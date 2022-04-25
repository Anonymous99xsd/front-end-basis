// 1.页面输入一个数判断他为奇数还是偶数
const fn1 = function () {
    let sum = parseInt(prompt())
    alert(sum % 2 === 1 ? 'odd' : 'even')
}

// 2.输入三个数，判断他们哪一个数数最大数
const fn2 = function () {
    let sum1 = parseInt(prompt()),
        sum2 = parseInt(prompt()),
        sum3 = parseInt(prompt())
    alert(sum1 > sum2 ? (sum1 > sum3 ? sum1 : sum3) : (sum2 > sum3 ? sum2 : sum3))
}

// 3.工资所得税工资超过5000的部分需要缴纳个人所得税，输出税后工资 税率按0.05算 文字+税后工资
const fn3 = function () {
    let cash = parseInt(prompt())
    cash += cash > 5000 ? (cash - 5000) * 0.05 : cash
    alert(cash)
}

// 4.进入网吧的年龄 条件大于18岁
const fn4 = function () {
    let age = parseInt(prompt())
    alert(age >= 18 ? '能' : '不能')
}

// 5.请录入行的分数 判断他的分数为 优（>90）、良(80-90)、及格(>60)、不及格(<60)
const fn5 = function () {
    let score = parseInt(prompt())
    if (score > 90) {
        alert('优')
    } else if (score > 80) {
        alert('良')
    } else if (score > 60) {
        alert('及格')
    } else {
        alert('不及格')
    }
}