from flask import Blueprint, Flask, jsonify,blueprints, request
from trellodb.service import *
from trellodb.models import  Title,db

apiTitle = Blueprint('apiTitle',__name__,url_prefix="/api/title")


@apiTitle.route("/",methods=["GET"])
def allTitle():
        allTitle =Title.query.all()
        title=[]

        for veri in allTitle:
             title.append(
                 {
                 "id":veri.id,
                "title":veri.title,
                 } 
             )
        return jsonify({"success":True, "data":title})


@apiTitle.route("/get-title/<id>",methods=["GET"])
def IdTitle(id):
    response=get_title_by_id(id)
    return response

@apiTitle.route("/get-title/<id>",methods=["DELETE"])
def deleteTitle(id):
    response=delete_title(id)
    return response

@apiTitle.route("/get-title/<id>",methods=["PUT"])
def updateTitle(id):
    data=request.json
    response=update_title(id,data)
    return response

   
@apiTitle.route("/addTitle",methods=["POST"])
def addTitle():
    try:
        data=request.json
        response=add_title(data)
        return response

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})