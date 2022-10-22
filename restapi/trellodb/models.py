from dataclasses import dataclass
from trellodb import db




class Content(db.Model):
    __tablename__='content'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
     

class Title(db.Model):
    __tablename__='title'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    
  
 
       

 