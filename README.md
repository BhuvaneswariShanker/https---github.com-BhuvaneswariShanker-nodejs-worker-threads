# What is Worker Thread in Node.JS?

Worker threads are the useful feature in Node.Js which allows us to run JavaScript code in parallel with the main thread. Before worker threads Node.Js could execute one operation at a time. Worker threads provide the capability to perform parallel processing by creating separate threads.

Worker threads are useful for performing CPU-intensive JavaScript operations, but they don’t not help much with I/O intensive work. They are also able to share memory by transferring ArrayBuffer instances or sharing SharedArrayBuffer instances.

## Creating a simple worker-thread
 
 Create two files named worker.js and index.js in your Node.Js project.

 Or Copy the files from this repository.

## Run the index.js file

Run index.js file it will ask for a prompt , where we can give any number for which factorial calculation is performed by worker threads and result is published to main index.js thread at the end.

