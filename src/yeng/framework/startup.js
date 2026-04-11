class startup {
    constructor() {
        if (navigator.serviceWorker.controller) {
            this.initialize();
        }
        else {
            this.install();
        }}
    
        async initialize() {
        const main = await import("./main.js");
        main.load_dotnet()
    }
    
        install() {
        console.log("Installing")
        navigator.serviceWorker.register("/yeng-sw.js",{type:"module"})
        console.log("service worker registered")
        location.reload();}
}

new loader();