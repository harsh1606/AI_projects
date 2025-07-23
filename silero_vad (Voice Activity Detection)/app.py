from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve static files at /static
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve index.html at /
@app.get("/")
async def root():
    return FileResponse("static/index.html")