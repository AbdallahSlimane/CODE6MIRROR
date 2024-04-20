self.onmessage = (event) => {
    try {
        // Execute the received code
        const result = eval(event.data);
        // Post the result back to the main thread
        self.postMessage({ status: 'success', result });
    } catch (e) {
        // Handle errors and send them back to the main thread
        if(e instanceof Error) {
            console.error('Error while executing the code:', e);
        }
    }
};
