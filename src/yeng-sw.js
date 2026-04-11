self.addEventListener('install', install)
function install() {
    self.skipWaiting();
    console.log("Service worker installed");
}
function activate() {
    self.clients.claim();
    console.log("Service worker activated");
}
self.addEventListener('activate', activate)
self.addEventListener('fetch', onfetch)
function onfetch(event) {
    event.respondWith((async function() {
        const response = await fetch(event.request)
        // inject cross origin isolation credentaless header to support SharedArrayBuffer
        
        const newresponse = new Response(response.body, { 
            status: response.status,
            statusText: response.statusText,
            headers: new Headers(response.headers)
        })
        
        newresponse.headers.set('Cross-Origin-Embedder-Policy', 'credentialless')
        newresponse.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
        newresponse.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
        
        if (event.request.url.startsWith('storage/')) {
            newresponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
            newresponse.headers.set('Access-Control-Allow-Origin', '*')
        }
        
        return newresponse
    })())
    }
