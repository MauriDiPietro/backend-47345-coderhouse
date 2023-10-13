const obj = {};

for (let i = 0; i <= 10000; i++) {
    const nro = Math.ceil(Math.random() * 20)
    // console.log(nro)
    if(!obj[nro]) obj[nro] = 1
    else obj[nro]++
}

console.log(obj);

/*
{
    1: 100
    2: 500
}
*/