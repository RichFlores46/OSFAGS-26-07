let swLocation = "sw.js";

//En el primer if se identifica si el navegador trabaja 
if(navigator.serviceWorker){
    //En el segundo if se identifica en que servidor se 
    if(window.location.href.includes("localhost"))
        swLocation = "/OSFAGS4!/sw.js";
    //registra la ubicacion
    navigator.serviceWorker.register(swLocation);
}