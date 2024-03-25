from textBrief.config.configuration import ConfigurationManager
from textBrief.components.data_validation import DataValidation
from textBrief.logging import logger


class DataValidationTrainingPipeline:
    def __init__(self):
        pass
    
    def main(self):
        config = ConfigurationManager()
        data_validation_config = config.get_data_validation_config()
        data_validation = DataValidation(config=data_validation_config)
        data_validation.validation_all_files_exists()