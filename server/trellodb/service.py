from flask import Blueprint, Flask, jsonify
from trellodb import db
from trellodb.models import Cards,Tasks




#cards

def get_all_cards():
        try:
                data = Cards.query.all()
                return jsonify({"cardTitle" : data.cardTitle, "cardId": data.cardId})
        except:
                return jsonify({"satatus":"başarısız"})

def get_cards_by_id(cardId):
        try:
                data = Cards.query.filter_by(cardId=cardId).first()
                return jsonify({"cardTitle" : data.cardTitle, "cardId": data.cardId})
        except:
                return jsonify({"satatus":"başarısız"})

def add_cards(data):
        try:
                data=Cards(cardTitle=data["cardTitle"])
                db.session.add(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:
                return jsonify({"status": "error", "messages" : ["Bir hata oluştu."]}), 403 

def update_cards(id,cardTitle):
        try:
                data = Cards.query.filter_by(cardId=id).first()
                data.cardTitle=cardTitle
                db.session.commit()
                return jsonify({"satatus":"başarılııı"})
        except:
                return jsonify({"satatus":"başarısızzz"})

def delete_cards(cardId):
        try:
                data = Cards.query.filter_by(cardId=cardId).first()
                db.session.delete(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:  
                return jsonify({"satatus":"başarısızzz"})     


#tasks

def get_all_tasks():
        try:
                data = Tasks.query.all()
                return jsonify({"taskTitle" : data.taskTitle, "taskId": data.taskId, "parentId":data.parentId,"completed":data.completed})
        except:
                return jsonify({"satatus":"başarısız"})

def get_tasks_by_id(taskId):
        try:
                data = Tasks.query.filter_by(taskId=taskId).first()
                return jsonify({"taskTitle" : data.taskTitle, "taskId": data.taskId, "parentId":data.parentId,"completed":data.completed})
        except:
                return jsonify({"satatus":"başarısız"})

def add_tasks(data):
        try:
                data=Tasks(taskTitle=data["taskTitle"], completed=data["completed"], parentId=data["parentId"])
                db.session.add(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:
                return jsonify({"status": "error", "messages" : ["Bir hata oluştu."]}), 403 

def update_tasks(taskId,taskTitle,completed,parentId):
        try:
                data = Tasks.query.filter_by(taskId=taskId).first()
                data.taskTitle=taskTitle
                data.completed=completed
                data.parentId=parentId
                db.session.commit()
                return jsonify({"satatus":"başarılııı"})
        except:
                return jsonify({"satatus":"başarısızzz"})

def delete_tasks(taskId):
        try:
                data = Tasks.query.filter_by(taskId=taskId).first()
                db.session.delete(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:  
                return jsonify({"satatus":"başarısızzz"})     
 