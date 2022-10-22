from flask import Blueprint, Flask, jsonify,blueprints, request
from trellodb.models import Content,db
from trellodb.service import *


import sys

apiContents = Blueprint('apiContents',__name__,url_prefix="/api/contents")

@apiContents.route("/",methods=["GET"])
def allContent():
        allContents =Content.query.all()
        contents=[]

        for veri in allContents:
             contents.append(
                 {
                 "id":veri.id,
                "name":veri.name,
                 } 
             )
        return jsonify({"success":True, "data":contents})



@apiContents.route("/addContent",methods=["POST"])
def addContent():
    try:
        data=request.json
        response=add_content(data)
        return response

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})
   

@apiContents.route("/get-content/<id>",methods=["GET"])
def ıdContent(id):
    response=get_content_by_id(id)
    return response

@apiContents.route("/get-content/<id>",methods=["DELETE"])
def deleteContent(id):
    response=delete_content(id)
    return response

@apiContents.route("/get-content/<id>",methods=["PUT"])
def updateContent(id):
    data=request.json
    response=update_content(id,data)
    return response