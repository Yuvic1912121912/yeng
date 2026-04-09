class loader {
    constructor() {
        const main = await import("./main.js");
        main.load_dotnet();
    }
}