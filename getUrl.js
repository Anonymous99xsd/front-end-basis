function getUrlParam(sUrl, sKey) {
    let param = sUrl.split('?')[1].split('#')[0]
    if (!sKey) {
        var res = new Object()
        param.split('&').forEach((v, i) => {
            let key = v.split('=')
            if (!(key[0] in res)) res[key[0]] = []
            res[key[0]].push(key[1])
        })
    } else {
        if (param.includes('&')) {
            var res = []
            param.split('&').forEach(v => {
                if (v.split('=')[0] === sKey) {
                    res.push(v.split('=')[1])
                }
            })
            if (res.length === 1) res = res[0]
            else if (res.length === 0) res = ''
        } else {
            var res = ''
            res = param.split('=')[1]
        }
    }
    return res
}

var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')
console.log(a.key.join(''));