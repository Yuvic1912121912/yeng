import {dotnet} from "./dotnet/native/dotnet.js";
// This is the dotnet entry point function
/**
 * @file main.js
 * @description This file contains the main class for the Yeng framework, responsible for loading the .NET runtime and providing the main entry point for the framework.
 * @exports main
 * @namespace yeng.framework.main
 */
/**
 * @typedef {Object} Runtime
 * @property {*} [key] - Runtime properties
 */
/**
 * @class main
 * Main class for the Yeng framework. namespace is 
 * @namespace yeng.framework.main.main
 *  */
class main{
    /** @type {string} The directory path of the framework package.
     * @namespace yeng.framework */
    static framework_dir = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));
    /** @type {string} The directory path of the Yeng framework. 
     * @namespace yeng*/
    static yeng_dir = main.framework_dir.substring(0, main.framework_dir.lastIndexOf("/"));
    /**
     * Loads the .NET runtime with the specified configuration.
     * @static
     * @param {string[]} assets - The assets configuration object. Contains all DLLs to be loaded.
     *  Due to how the loader works, DLLs cannot be dynamically loaded and must be specified here.
     * @param {string} mainAssembly - The main assembly name.
     * @param {string[]} [parms] - Application arguments.
     * @param {boolean} [debug] - Whether to enable debugging. Defaults to false.
     * @param {Object<string, string>} [env] - Environment variables.
     * @returns {Promise<Runtime>} The created runtime instance.
     */
    static async load_dotnet(assets, mainAssembly, parms=[], debug=false, env={}, customFs=null, customFsMount="/custom") {
        this.Runtime = await dotnet
            .withConfig({ resources: assets })
            .withMainAssembly(mainAssembly || "")
            .withApplicationArguments(...parms)
            .withVirtualWorkingDirectory(customFsMount)
            .withEnvironmentVariables(env)
            .withDiagnosticTracing(!!debug)
            .withDebugging(debug ? 0 : 1)
            .create(); console.log("dotnet Runtime loaded");
            await this.Runtime.runMain();
            if (debug === true) console.log("dotnet Runtime main assembly executed");
        return this.Runtime;
    }
}
export default main;
export {main};
