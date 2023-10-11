console.log('--primer console.log');

setTimeout(()=>{
    console.log('-->set timeout');      //ASINCRONICO
}, 0);

console.log('--segundo console.log');   //SINCRONICO

setInterval(()=>{
    console.log('setinterval');
}, 1000);