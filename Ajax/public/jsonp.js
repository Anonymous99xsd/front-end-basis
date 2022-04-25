function jsonp(option) {
    var script = document.createElement('script');
    var params = '';
    for (var attr in option.data) {
        params += `&${attr}=${option.data[attr]}`;
    }
    var fnName = 'myFn' + Math.random().toString().replace('.', '');
    window[fnName] = option.callback;
    script.src = option.url + '?callback=' + fnName + params;
    document.body.appendChild(script);

    script.onload = function () {
        document.body.removeChild(script);
    }
}