const { workerData, parentPort } = require('worker_threads') 
const calculateFactorial = require('./calculate')
 
console.log("Worker Thread is initiated ...");
const result  = calculateFactorial(workerData);
 
parentPort.postMessage({ fileName: workerData, status: 'Done' , result: result });