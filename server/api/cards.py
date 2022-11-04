from flask import Blueprint, Flask, jsonify,blueprints, request
from trellodb.models import Cards,db
from trellodb.service import *


import sys

apiCards = Blueprint('apiCards',__name__,url_prefix="/api/cards")

@apiCards.route("/",methods=["GET"])
def allCards():
        allCards =Cards.query.all()
        cards=[]

        for veri in allCards:
             cards.append(
                 {
                 "cardId":veri.cardId,
                "cardTitle":veri.cardTitle
                 } 
             )
        return jsonify({"success":True, "data":cards})



@apiCards.route("/addCards",methods=["POST"])
def addCards():
    try:
        data=request.json
        response=add_cards(data)
        return response

    except Exception as e:
        return jsonify({"success":False,"message":"there i,s an error"})
   

@apiCards.route("/<id>",methods=["GET"])
def ıdCards(id):
    response=get_cards_by_id(id)
    return response

@apiCards.route("/<id>",methods=["DELETE"])
def deleteCards(id):
    response=delete_cards(id)
    return response

@apiCards.route("/<id>",methods=["PUT"])
def updateCards(id):
    try:
        cardTitle=request.json.get("cardTitle")
        response=update_cards(id,cardTitle)
        return response

    except Exception as e:
        return jsonify({"success":False,"message":"there is an error"})
   