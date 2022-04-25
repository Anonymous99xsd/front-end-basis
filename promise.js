function text() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var name = 'Xsd';
            res(name);
        }, 1000);
    })
}

async function main() {
    var data = await text();
    console.log(data);
}

main();