# 🎙️ Silero VAD in the Browser (Client-Side ONNX Inference)

This project demonstrates real-time **Voice Activity Detection (VAD)** in the browser using the lightweight **Silero VAD ONNX model** and **ONNX Runtime Web**. The app uses your microphone to detect whether you're speaking or silent, and runs entirely client-side with no server processing required.

## 🚀 Features

- ✅ Client-side inference with `onnxruntime-web`
- ✅ Real-time microphone input using Web Audio API
- ✅ Voice activity prediction using [Silero VAD](https://github.com/snakers4/silero-vad)
- ✅ Lightweight and fast (runs in-browser via WebAssembly)
- ✅ Clean output of `speech probability` for every audio chunk

## 📁 Project Structure

```
silero-vad-browser/
├── app.py                  # (Optional FastAPI server to serve static files)
├── static/
│   ├── index.html          # Main UI with real-time VAD
│   └── silero_vad.onnx     # ONNX model for Silero VAD
```

## 📦 Requirements

Only required if using the optional FastAPI server:

```bash
pip install fastapi uvicorn
```

## 💻 Running the App

### Option 1: Run with Python + FastAPI

```bash
uvicorn app:app --reload
```

Then open in your browser:

```
http://localhost:8000
```

### Option 2: Run Without Python (Static File Server)

If you just want to test the frontend:

```bash
# Inside the project directory:
cd static
python -m http.server 8080
```

Then open:

```
http://localhost:8080/index.html
```

## 🧠 How It Works

1. Loads `silero_vad.onnx` into the browser using `onnxruntime-web`
2. Captures audio via `navigator.mediaDevices.getUserMedia()`
3. Feeds 512-sample chunks into Silero VAD for inference
4. Displays the probability of speech per chunk (e.g., `Speech prob: 0.91`)

## 📚 References

- [Silero VAD](https://github.com/snakers4/silero-vad)
- [ONNX Runtime Web](https://onnxruntime.ai/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 🔒 Privacy

This app runs **entirely in your browser** — no audio is sent to a server. It’s a great starting point for building real-time AI interviewers, voice assistants, or audio analytics tools.

## 📜 License

MIT License. Attribution to Silero and ONNX Runtime Web appreciated.
