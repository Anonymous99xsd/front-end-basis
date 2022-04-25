window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var tel = document.querySelector("#tel");
    tel.onblur = function () {
        if (regtel.test(this.value)) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 手机号码格式正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 手机号码格式不正确';
        }
    }
    var regsms = /^\d{6}$/;
    var sms = document.querySelector("#sms");
    sms.onblur = function () {
        if (regsms.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 验证码正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 验证码错误';
        }
    }
    var regpwd = /^[a-zA-Z0-9-_]{8,16}$/;
    var pwd = document.querySelector("#pwd");
    pwd.onblur = function () {
        if (regpwd.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 密码格式正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码格式不正确';
        }
    }
    var dbpwd = document.querySelector("#dbpwd");
    dbpwd.onblur = function () {
        if (this.value == pwd.value && this.value != '') {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 密码一致';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 密码不一致';
        }
    }
}