//console.log("SW hola mundo")
let url2 = window.location.href

self.addEventListener('install', (event) => {
    console.log("SW: Instalado")
});

self.addEventListener('activate', (event) => {
    console.log("SW: Activate");
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url)
    if(event.request.url.includes('.jpg')){
        rutaImg = "/images/viego-league-of-legends-lol-papel-pintado-3840x2160_54.jpg"
        let newResp = fetch(rutaImg);
        if(!url2.includes('localhost')){
            newResp = fetch("/PWA_U1_01/"+rutaImg);
        }
        console.log("Es una imagen");
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResp = new Response(`body{
            background-color:black !important;
            color: red;
            }
            div {
                margin-bottom: 10px;
            }`, {
                headers: {
                    'Content-Type': 'text/css'
                }
            }
        );
        event.respondWith(newResp);
    }

    if(event.request.url.includes('reqres.in')){
        let newResp = new Response(`{
            "name": "No mires",
            "job": "detras de ti",
            "avatar": "https://c.tenor.com/AEYxXlE5ANwAAAAC/giygas-earth-bound.gif"
        }`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        event.respondWith(newResp);
    }
});