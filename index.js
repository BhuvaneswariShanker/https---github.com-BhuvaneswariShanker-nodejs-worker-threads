const { Worker } = require('worker_threads') 
const readline = require('readline');
 
function runService(workerData) { 
    return new Promise((resolve, reject) => { 
        const worker = new Worker( 
                './worker.js', { workerData }); 
        worker.on('message', resolve); 
        worker.on('error', reject); 
        worker.on('exit', (code) => { 
            if (code !== 0) 
                reject(new Error( 
`Worker Thread stopped with the exit code: ${code}`)); 
        }) 
    }) 
} 
 
async function run() { 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let userInput;

    rl.question('Enter user input: ', async (input) => {
        userInput = input;
        rl.close();
        const result = await runService(userInput);
        console.log(result); 
    });
   
} 
 
run().catch(err => console.error(err)) 