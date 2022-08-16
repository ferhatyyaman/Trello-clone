from flask import Flask, jsonify
from flask_cors import CORS

from api.data import apiData

from trellodb import createApp
from trellodb.initialize_db import createDB

app=createApp() 
CORS(app)
createDB()


app.register_blueprint(apiData)

@app.route("/")
def index():
    return jsonify({"success":True, "message":"worldjaksfs"})


#run server
if __name__=="__main__":
    app.run(debug=True)  