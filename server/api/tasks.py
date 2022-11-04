from flask import Blueprint, Flask, jsonify,blueprints, request
from trellodb.models import Tasks,db
from trellodb.service import *


import sys

apiTasks = Blueprint('apiTasks',__name__,url_prefix="/api/tasks")

@apiTasks.route("/",methods=["GET"])
def allTasks():
        allTasks =Tasks.query.all()
        tasks=[]

        for veri in allTasks:
             tasks.append(
                 {
                 "taskId":veri.taskId,
                "taskTitle":veri.taskTitle,
                "parentId":veri.parentId,
                "completed":veri.completed
                 } 
             )
        return jsonify({"success":True, "data":tasks})



@apiTasks.route("/addTasks",methods=["POST"])
def addTasks():
    try:
        data=request.json
        response=add_tasks(data)
        return response

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})
   

@apiTasks.route("/<id>",methods=["GET"])
def ıdTasks(id):
    response=get_tasks_by_id(id)
    return response

@apiTasks.route("/<id>",methods=["DELETE"])
def deleteTasks(id):
    response=delete_tasks(id)
    return response

@apiTasks.route("/<id>",methods=["PUT"])
def updateTasks(id):
    taskTitle=request.json.get("taskTitle")
    completed=request.json.get("completed")
    parentId=request.json.get("parentId")
    response=update_tasks(id,taskTitle,completed,parentId)
    return response