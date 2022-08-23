from flask import Blueprint, Flask, jsonify,blueprints, request

from trellodb.models import  DataTitle

apiDataTitle = Blueprint('apiDataTitle',__name__,url_prefix="/api/dataTitle")

@apiDataTitle.route("/")
def dataTitle():
    try:
        allData =DataTitle.get_all_dataTitle()
        dataTitle=[]

        for veri in allData:
            dataTitle.append(
                {
                "id":veri.id,
                "title":veri.title,
                } 
            )
        return jsonify({"success":True, "data":dataTitle})

    except Exception as e:
        print("ERROR IN PRODUCTS: ", e)
        return jsonify({"success": False, "message": "There is an error.."})



@apiDataTitle.route("/<int:id>",methods=["GET","DELETE","PUT"])
def dataId(id):
    try:
        dataTitle=DataTitle.get_dataTitle_by_id(id)

        if dataTitle is None:
            return jsonify({"success": False, "message": "Product not found"})

        if request.method == "GET":
            userObj = {"id":dataTitle.id,"title":dataTitle.title}
            return jsonify({"success": True, "dataTitle":userObj})

        elif request.method == "DELETE":
            DataTitle.delete_dataTitle(id)
            return jsonify({"success": True, "message":"deleted"})

        elif request.method == "PUT":
            title=request.form.get("title")
           

            if title == None:
                title = dataTitle.name
           

            DataTitle.update_dataTitle(id,title)
            return jsonify({"success": True, "message": "product updated"})

    except Exception as e:
        return jsonify({"success": False, "message": "There is an error.."})



@apiDataTitle.route("/addData",methods=["POST"])
def addDataTitle():
    try:
        title=request.form.get("title")
      
        
        if title == None:
            return jsonify({"success": False, "message": "title is required"})
        
        
        DataTitle.add_dataTitle(title)
        return jsonify({"success": True, "message":"başarılı"})

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})
   
