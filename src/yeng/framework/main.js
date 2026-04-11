import {dotnet} from "./dotnet/native/dotnet.js";
// This is the dotnet entry point function
/**
 * @typedef {Object} Runtime
 * @property {*} [key] - Runtime properties
 */

/**
 * @class main
 */
class main{
    /**
     * Loads the .NET runtime with the specified configuration.
     * @param {string[]} assets - The assets configuration object. contains all dlls to be be loaded.
     *  due to how the loader works dlls can not be dynamicly loaded and must be specified here.
     * @param {string} mainAssembly - The main assembly name.
     * @param {string[]} [parms] - Application arguments.
     * @param {boolean} [debug] - Whether to enable debugging. defaults to false.
     * @param {Object<string, string>} [env] - Environment variables.
     * @returns {Promise<Runtime>} The created runtime instance.
     */
    static async load_dotnet(assets, mainAssembly, parms, debug, env) {
        const runtime = await dotnet
            .withConfig({ resources: assets })
            .withMainAssembly(mainAssembly || "")
            .withApplicationArguments(parms)
            .withEnvironmentVariables(env)
            .withDiagnosticTracing(!!debug)
            .withDebugging(debug ? 1 : 0)
            .create();
        return runtime;
    }
}
export default main;
export {main};
