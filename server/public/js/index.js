window.addEventListener('load', function () {
    var l = document.querySelector('#l');
    var r = document.querySelector('#r');
    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter', function () {
        l.style.display = 'block';
        r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        l.style.display = 'none';
        r.style.display = 'none';
        timer = setInterval(function () {
            r.click();
        }, 3000);
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ul.children.length - 1; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            animate(ul, -this.getAttribute('index') * focus.offsetWidth);
            circle = num = this.getAttribute('index');
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ol.children.length) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            });
            circle++;
            circle == ol.children.length ? circle = 0 : circle;
            fn();
        }
    })
    l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ol.children.length;
                ul.style.left = -num * focus.offsetWidth + 'px';
            }
            num--;
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            });
            circle == 0 ? circle = ol.children.length : circle;
            circle--;
            fn();
        }
    })

    function fn() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        r.click();
    }, 3000);
})