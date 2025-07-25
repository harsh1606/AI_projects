
# 🎙️ Real-Time Voice Activity Detection in the Browser (Silero + FastAPI)

This project demonstrates real-time **voice activity detection (VAD)** in the browser using the **Silero VAD model** running via **ONNX Runtime Web**, with a **FastAPI** backend serving the interface.

## 🚀 Demo Features

- 🧠 Runs the Silero VAD model fully **in-browser** using WebAssembly and `onnxruntime-web`
- 🎧 Uses `AudioWorklet` to capture microphone audio with low latency
- 📦 Lightweight FastAPI backend serving static files
- ⚡ Real-time speech probability output (e.g., `Speech prob: 0.98`)

## 📂 Project Structure

```
.
├── app.py                # FastAPI app to serve static frontend
├── silero_vad.onnx       # ONNX model (Silero VAD)
├── static/
│   ├── index.html        # HTML + JavaScript app to run ONNX inference in-browser
│   └── vad-processor.js  # AudioWorklet for streaming audio chunks
```

## 🔧 Getting Started

### 🐍 1. Backend (FastAPI)

#### Requirements

```bash
pip install fastapi uvicorn
```

#### Run the server

```bash
uvicorn app:app --reload
```

The app will be live at [http://localhost:8000](http://localhost:8000)

---

### 🌐 2. Frontend (Browser)

- Open [http://localhost:8000](http://localhost:8000)
- Click **"Start VAD"**
- Grant microphone access
- Watch the live **speech probability** update as you speak

---

## 🧠 How It Works

- `index.html` loads `silero_vad.onnx` directly into the browser using `onnxruntime-web`
- Captures 16kHz microphone audio using `AudioWorklet` via `vad-processor.js`
- Sends audio chunks to the ONNX model to get **speech probability**
- Displays probability in real-time

---

## 📦 Model Info

- **Model**: [`silero_vad.onnx`](https://github.com/snakers4/silero-vad)
- **Input**: 512-sample audio chunks (16 kHz)
- **Output**: `speech_prob` (0.0 to 1.0)

---

## ⚠️ Notes

- The model must be placed in the root directory or served correctly by FastAPI.
- Tested in **Chrome** with support for `AudioWorklet` and `BigInt64Array`.

---

## 🧪 Future Enhancements

- Record and export speech-only segments
- Use WebSockets for real-time backend processing
- Host on cloud platforms (e.g., Azure, Render)

---

## 📄 License

MIT License

---

## 👤 Author

**Harsh Kumar Tyagi** — [@harsh1606](https://github.com/harsh1606)
