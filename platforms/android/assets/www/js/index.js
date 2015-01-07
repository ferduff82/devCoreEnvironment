var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener("deviceready", this.onDeviceReady, !1);
    },
    onDeviceReady: function() {
        app.receivedEvent("deviceready");
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id),
            listeningElement = parentElement.querySelector(".listening");
            receivedElement = parentElement.querySelector(".received");
            listeningElement.setAttribute("style", "display:none;"); 
            receivedElement.setAttribute("style", "display:block");
        navigator.vibrate(3000);
    }
};
app.initialize();