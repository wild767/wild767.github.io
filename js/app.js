if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("/serviceWorker.js") 
    .then(() => console.log("good"))
    .catch((err) => console.log(err));
}