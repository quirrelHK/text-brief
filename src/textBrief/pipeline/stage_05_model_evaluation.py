from textBrief.config.configuration import ConfigurationManager
from textBrief.components.model_evaluation import ModelEvaluation
from textBrief.logging import logger


class ModelEvaluationTrainingPipeline:
    def __init__(self):
        pass
    
    def main(self):
        config = ConfigurationManager()
        model_evalution_config = config.get_model_evaluation_config()
        model_evalution = ModelEvaluation(config=model_evalution_config)
        model_evalution.evalute()