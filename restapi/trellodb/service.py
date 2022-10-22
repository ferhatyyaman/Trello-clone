from dataclasses import dataclass
from turtle import title
from flask import Blueprint, Flask, jsonify
from trellodb import db
from trellodb.models import Content,Title



def get_all_content():
        try:
                data = Content.query.all()
                return jsonify({"name" : data.name, "id": data.id})
        except:
                return jsonify({"satatus":"başarısız"})



def get_content_by_id(id):
        try:
                data = Content.query.filter_by(id=id).first()
                return jsonify({"name" : data.name, "id": data.id})
        except:
                return jsonify({"satatus":"başarısız"})


def add_content(data):
        try:
                data=Content(name=data["name"])
                db.session.add(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:
                return jsonify({"status": "error", "messages" : ["Bir hata oluştu."]}), 403
        

def update_content(id,name):
        try:
                data = Content.query.filter_by(id=id).first()
                data.name=name
                db.session.commit()
                return jsonify({"satatus":"başarılııı"})
        except:
                return jsonify({"satatus":"başarısızzz"})

def delete_content(id):
        try:
                data = Content.query.filter_by(id=id).first()
                db.session.delete(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:  
                return jsonify({"satatus":"başarısızzz"})      



#title

def get_all_title():
        try:
                data = Title.query.all()
                return jsonify({"name" : data.title, "id": data.id})
        except:
                return jsonify({"satatus":"başarısız"})


def get_title_by_id(id):
        try:
                data = Title.query.filter_by(id=id).first()
                return jsonify({"name" : data.title, "id": data.id})
        except:
                return jsonify({"satatus":"başarısız"})


def add_title(data):
        try:
                data=Title(title=data["title"])
                db.session.add(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:
                return jsonify({"status": "error", "messages" : ["Bir hata oluştu."]}), 403
    
def update_title(id,title):
        try:
                data = Title.query.filter_by(id=id).first()
                data.title=title
                db.session.commit()
                return jsonify({"satatus":"başarılııı"})
        except:
                return jsonify({"satatus":"başarısızzz"})


def delete_title(id):
        try:
                data = Title.query.filter_by(id=id).first()
                db.session.delete(data)
                db.session.commit()
                return jsonify({"satatus":"başarılı"})
        except:  
                return jsonify({"satatus":"başarısızzz"})  