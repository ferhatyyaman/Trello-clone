from trellodb.models import db
from trellodb import createApp

def createDB():
    db.create_all(app=createApp())