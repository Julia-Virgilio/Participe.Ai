# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import pymongo  # Para integração com banco de dados NoSQL MongoDB

class ActionSalvarDadosConsumo(Action):
    def name(self) -> Text:
        return "action_salvar_dados_consumo"

    def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[Dict[Text, Any]]:
        # Dados fornecidos pelo usuário
        dados_consumo = tracker.get_slot("dados_consumo")
        
        # Conectando ao MongoDB (exemplo)
        try:
            cliente = pymongo.MongoClient("mongodb://localhost:27017/")
            db = cliente["consumo_db"]
            colecao = db["dados_consumo"]
            
            # Inserindo os dados no banco
            colecao.insert_one({"dados_consumo": dados_consumo})
            dispatcher.utter_message(text="Dados de consumo salvos com sucesso!")
        
        except Exception as e:
            dispatcher.utter_message(text=f"Erro ao salvar os dados: {str(e)}")
        
        return []
