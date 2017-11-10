var createEvent = (function (){
    try{
        new Event('nothing');
        return function (name, options) { return new Event(name, options); };
    }catch(e){}

    return function (name, options) {
        var event = document.createEvent('Event');
        event.initEvent(name, options.bubbles, options.cancelable);
        return event;
    };
})();

function dispatchEvent(el, name, options){
    if ( options === void 0 ) options = {};

    var event = createEvent(name, options);
    return !el.dispatchEvent(event);
}

export { dispatchEvent };
//# sourceMappingURL=bundle.es.js.map
