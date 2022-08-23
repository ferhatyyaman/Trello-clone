from dataclasses import dataclass
from trellodb import db

@dataclass
class Data(db.Model):
    __tablename__='data'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200))
  
    def __init__(self,id,content):
        self.id=id
        self.content=content

    @classmethod
    def get_all_data(cls):
        return cls.query.all()

    @classmethod
    def get_data_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def add_data(cls, content):
        veri = cls(None, content)

        db.session.add(veri)
        db.session.commit()
    
    @classmethod
    def update_data(cls, id, content):
        data = cls.query.filter_by(id=id).first()
        data.content = content
        db.session.commit()

    @classmethod
    def delete_data(cls, id):
        data = cls.query.filter_by(id=id).first()
        db.session.delete(data)
        db.session.commit()




@dataclass
class DataTitle(db.Model):
    __tablename__='dataTitle'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    
  
    def __init__(self,id,title):
        self.id=id
        self.title=title
       

    @classmethod
    def get_all_dataTitle(cls):
        return cls.query.all()

    @classmethod
    def get_dataTitle_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def add_dataTitle(cls, title):
        veri = cls(None, title)

        db.session.add(veri)
        db.session.commit()
    
    @classmethod
    def update_dataTitle(cls, id, title):
        data = cls.query.filter_by(id=id).first()
        data.title = title
        db.session.commit()

    @classmethod
    def delete_dataTitle(cls, id):
        data = cls.query.filter_by(id=id).first()
        db.session.delete(data)
        db.session.commit()