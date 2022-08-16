from flask import Blueprint, Flask, jsonify,blueprints, request
from trellodb.models import Data

apiData = Blueprint('apiData',__name__,url_prefix="/api/data")

@apiData.route("/")
def data():
    try:
        allData =Data.get_all_data()
        data=[]

        for veri in allData:
            data.append(
                {
                "id":veri.id,
                "title":veri.title,
                "content":veri.content,
                } 
            )
        return jsonify({"success":True, "data":data})

    except Exception as e:
        print("ERROR IN PRODUCTS: ", e)
        return jsonify({"success": False, "message": "There is an error.."})



@apiData.route("/<int:id>",methods=["GET","DELETE","PUT"])
def dataId(id):
    try:
        data=Data.get_data_by_id(id)

        if data is None:
            return jsonify({"success": False, "message": "Product not found"})

        if request.method == "GET":
            userObj = {"id":data.id,"title":data.title,"content":data.content}
            return jsonify({"success": True, "data":userObj})

        elif request.method == "DELETE":
            Data.delete_data(id)
            return jsonify({"success": True, "message":"deleted"})

        elif request.method == "PUT":
            title=request.form.get("title")
            content=request.form.get("content")

            if title == None:
                title = data.name
            if content == None:
                content = data.content

            Data.update_data(id,title,content)
            return jsonify({"success": True, "message": "product updated"})

    except Exception as e:
        return jsonify({"success": False, "message": "There is an error.."})



@apiData.route("/addData",methods=["POST"])
def addData():
    try:
        title=request.form.get("title")
        content=request.form.get("content")
        
        if title == None:
            return jsonify({"success": False, "message": "title is required"})
        if content == None:
            return jsonify({"success": False, "message": "content is required"})
        
        Data.add_data(title , content)
        return jsonify({"success": True, "message":"başarılı"})

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})
   