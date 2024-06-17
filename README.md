# Text Brief
A backend API for summarizing text, this API uses SOTA Pegasus model for summarizing text, which is a transformer model. [Link](https://huggingface.co/docs/transformers/en/model_doc/pegasus)

## This API has two routes

1. Train route:\
    From training the model on new data. Performs data ingestion, data validation and data transformation. And then trains and evaluates the model.
2. Predict route:\
    Input text is given to the model using this route, the summary of the given text is returned as a response.
    
### API endpoints
![API Endpoints](https://github.com/quirrelHK/text-brief/blob/main/media/api_endpoint.png)

### Text to summarize
![API Endpoints](https://github.com/quirrelHK/text-brief/blob/main/media/input.png)

### Summarize text
![API Endpoints](https://github.com/quirrelHK/text-brief/blob/main/media/output.png)

## Clone this repo and cd into the folder
```bash
git https://github.com/quirrelHK/text-brief.git

cd text-brief
```

## Install the requirements
```bash
 python setup.py
```

## Run the app
```bash
uvicorn app:app --reload
```