//console.log("SW hola mundo")

self.addEventListener('install', (event) => {
    console.log("SW: Instalado")
});

self.addEventListener('activate', (event) => {
    console.log("SW: Activate");
});

self.addEventListener('fetch', (event) => {
    if(event.request.url.includes('.jpg')){
        let newResp = fetch("/images/viego-league-of-legends-lol-papel-pintado-3840x2160_54.jpg");
        console.log("Es una imagen");
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResp = new Response(`body{
            background-color:black !important;
            color: red;
        }`, {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        );
        event.respondWith(newResp);
    }
});