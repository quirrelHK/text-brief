FROM python:3.8-slim-buster

RUN apt update -y && apt install awscli -y
WORKDIR /app

COPY requirements.txt ./

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

RUN pip install --upgrade accelerate

RUN pip uninstall -y transformers accelerate

RUN pip install transformers accelerate


CMD [ "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]