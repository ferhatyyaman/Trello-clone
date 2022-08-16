from dataclasses import dataclass
from trellodb import db

@dataclass
class Data(db.Model):
    __tablename__='data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    content = db.Column(db.String(200))
  
    def __init__(self,id,title,content):
        self.id=id
        self.title=title
        self.content=content

    @classmethod
    def get_all_data(cls):
        return cls.query.all()

    @classmethod
    def get_data_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def add_data(cls, title, content):
        veri = cls(None, title, content)

        db.session.add(veri)
        db.session.commit()
    
    @classmethod
    def update_data(cls, id, title, content):
        data = cls.query.filter_by(id=id).first()
        data.title = title
        data.content = content
        db.session.commit()

    @classmethod
    def delete_data(cls, id):
        data = cls.query.filter_by(id=id).first()
        db.session.delete(data)
        db.session.commit()