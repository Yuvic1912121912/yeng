import {dotnet} from "./dotnet/native/dotnet.js";
// This is the dotnet entry point function
class main{
    async load_dotnet() {
        const runtime = await dotnet
            .withDebugging(true /* enables debugging mode default false */)
            .withEnvironmentVariable();
    }
}
export default main;
export {main};
