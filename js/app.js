console.log("Hola mundo desde app.js")

if(navigator.serviceWorker){
    console.log("Muy bien");
    navigator.serviceWorker.register("/sw.js")
}else{
    console.log("Nada bien")
}