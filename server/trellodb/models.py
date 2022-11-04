from dataclasses import dataclass
from trellodb import db




class Cards(db.Model):
    __tablename__='cards'

    cardId =  db.Column(db.Integer, primary_key=True,autoincrement=True)
    cardTitle = db.Column(db.String(100))

    
class Tasks(db.Model):
    __tablename__='tasks'

    taskId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    taskTitle = db.Column(db.String(100))
    parentId=db.Column(db.Integer)
    completed=db.Column(db.Boolean)

 
       

 