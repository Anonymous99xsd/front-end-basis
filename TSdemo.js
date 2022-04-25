var str = "xsd";
var strlen = str.length;
var num = 8;
var array = [];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
var value = null;
var v = null;
var n;
var ner;
console.log(str);
console.log(num);
console.log(array);
console.log(c);
console.log(value);
console.log(v);
console.log(n);
console.log(ner);
console.log(strlen);
console.log("------------------------------------------");
function identity(arg) {
    console.log(arg);
    return arg;
}
var myIdentity = identity;
myIdentity('xsd');
