var str = 'asadasdasdadasdas';

const s = {};
for (let i = 0; i < str.length; i++) {
    if(!s[str.charAt(i)]) {
        s[str.charAt(i)] = 1;
    } else {
        s[str.charAt(i)]++;
    }
}

// const map = new Map();
// for (v of str) {
//     if(!map[v]) {
//         map[v] = 1;
//     } else {
//         map[v]++;
//     }
// }

console.log(s);