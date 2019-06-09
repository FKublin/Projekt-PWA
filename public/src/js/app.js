var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(){
        console.log('Service Worker registered');
    })
    .catch(function(err) {
        console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event){
    console.log('beforeinstallprompt');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});