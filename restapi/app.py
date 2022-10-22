from flask import Flask, jsonify
from flask_cors import CORS

from api.contents import apiContents
from api.title import apiTitle

from trellodb import createApp
from trellodb.initialize_db import createDB


app=createApp()  
CORS(app)
createDB()

app.config['SQLALCHEMY_ECHO'] = True

app.register_blueprint(apiContents)
app.register_blueprint(apiTitle)

@app.route("/")
def index():
    return jsonify({"success":True, "message":"Hello world"})


#run server
if __name__=="__main__":
    app.run(debug=True)  