const { exec } = require('child_process');

// Function to call the C wrapper and read shared memory
function readSharedMemory() {
    

    exec('./wrapper', (error, stdout, stderr) => {
        console.time('Execution Time');
        // Output from the wrapper
        const data = stdout

        //remember to set up the errors btw
       
        // If needed, add additional processing of stdout here...
        console.timeEnd('Execution Time'); // End time measurement
    });
}
 // Start measuring time
// Call the function to read shared memory
readSharedMemory();

