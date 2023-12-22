import express from 'express';
import { Command, program } from 'commander'

const app = express();

const commander = new Command();

commander
    .option('-p <port>', 'port server', 8080)
    .option('-m <mode>', 'mode server', 'dev')
commander.parse();

console.log('options: ', commander.opts());
console.log('args: ', commander.args);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = commander.opts().p
const mode = commander.opts().m

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${mode}`);
});

