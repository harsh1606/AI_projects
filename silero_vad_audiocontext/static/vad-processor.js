// vad-processor.js
class VADProcessor extends AudioWorkletProcessor {
    constructor() {
      super();
    }
  
    process(inputs, outputs, parameters) {
      const input = inputs[0][0];
      if (input) {
        // Send audio data to the main thread
        this.port.postMessage(input);
      }
      return true; // Keep processor alive
    }
  }
  
  registerProcessor('vad-processor', VADProcessor);
  