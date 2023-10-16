from flask import Flask, request
import pickle
import numpy as np
from flask_cors import CORS
import os

app = Flask(_name_)
CORS(app)

def SpeechRecognition(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("model/model.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]


@app.route("/", methods=["POST"])
def predict():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        # to_predict_list = list(to_predict_list.values())
        to_predict_list = list(to_predict_list.values())
        price = SpeechRecognition(to_predict_list)
        result = {"data": price}
        # response = openai.Image.create(
        #         prompt="american gold",
        #         n=1,
        #         size="256x256",
        #     )
        print ("result")
        return result

if _name_ == "_main_":
    app.run(debug=True)