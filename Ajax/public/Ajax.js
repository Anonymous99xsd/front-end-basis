function ajax(option) {
    var defaults = {
        type: "get",
        data: {
            name: 'xsd',
            age: 21
        },
        dataType: "application/x-www-form-urlencoded",
        success: function (result) {
            console.log('请求成功' + result);
        },
        error: function (result, xhr) {
            console.log('请求失败' + result);
            console.log(xhr);
        }
    }
    // 后面替换前面的
    Object.assign(defaults, option);
    var xhr = new XMLHttpRequest();
    var params = '';
    for (var i in defaults.data) {
        params += `${i}=${defaults.data[i]}&`;
    }
    params = params.substr(0, params.length - 1);
    if (defaults.type == 'get') {
        defaults.url += '?' + params;
        xhr.open(defaults.type, defaults.url);
        xhr.send();
    } else {
        xhr.open(defaults.type, defaults.url);
        xhr.setRequestHeader('Content-Type', defaults.dataType);
        if (defaults.dataType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data));
        } else {
            xhr.send(params);
        }
    }
    xhr.onload = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            defaults.success(xhr.responseText);
        } else {
            defaults.error(xhr.responseText, xhr);
        }
    }
}