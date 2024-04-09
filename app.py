import os
import sys
import uvicorn
from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse
from fastapi.responses import Response
from textBrief.pipeline.prediction import PredictionPipeline

text: str = """
The Flight of the Eisenstein
2
The Horus Heresy
It is a time of legend.
Mighty heroes battle for the right to rule the galaxy. The vast
armies of the Emperor of Earth have conquered the galaxy in a
Great Crusade – the myriad alien races have been smashed by
the Emperor’s elite warriors and wiped from the face of history.
The dawn of a new age of supremacy for humanity beckons.
Gleaming citadels of marble and gold celebrate the many
victories of the Emperor. Triumphs are raised on a million
worlds to record the epic deeds of his most powerful and deadly
warriors.
First and foremost amongst these are the primarchs, superheroic
beings who have led the Emperor’s armies of Space Marines in
victory after victory. They are unstoppable and magnificent, the
pinnacle of the Emperor’s genetic experimentation. The Space
Marines are the mightiest human warriors the galaxy has ever
known, each capable of besting a hundred normal men or more
in combat.
Organised into vast armies of tens of thousands called Legions,
the Space Marines and their primarch leaders conquer the galaxy
in the name of the Emperor.
Chief amongst the primarchs is Horus, called the Glorious, the
Brightest Star, favourite of the Emperor, and like a son unto him.
He is the Warmaster, the commander-in-chief of the Emperor’s
military might, subjugator of a thousand, thousand worlds and
conqueror of the galaxy. He is a warrior without peer, a diplomat
supreme, and his ambition knows no bounds.
The stage has been set.
"""

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["authentication"])
async def index():
    return RedirectResponse(url="/docs")

@app.get("/train")
async def training():
    try:
        os.system("python main.py")
        return Response("Training successful!")
    except Exception as e:
        return Response(f"Error occured {e}")
    
@app.post("/predict")
async def predict_route(text):
    try:
        obj = PredictionPipeline()
        summary = obj.predict(text)
        return summary
    except Exception as e:
        raise e
    
