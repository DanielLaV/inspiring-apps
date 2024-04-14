import boto3
import random

dynamodb = boto3.resource('dynamodb')
cards = ["Arabian Sea", "East Asia", "Gulf of Mexico", "Mediterranean", "South Africa", "South America", "West Africa", None, None]

def handler(event, context):
    """
    This lambda receives the user's email address and returns
    the order of their cards, along with whether those cards
    have been collected.

    If a user is logging in for the first time (email does not exist)
    they will be added to the database and assigned a randomized card
    order, which will be returned.
    """
    user_table = dynamodb.Table("FlamingoBingoUsers")
    card_table = dynamodb.Table("FlamingoBingoCards")
    email = event['email']
    user_card_order = user_table.get_item(
        Key={'email': email},
        ExpressionAttributeNames={
                '#cardOrder': 'cardOrder'
        },
        ProjectionExpression= '#cardOrder'
    )

    card_status = card_table.get_item(Key={'id': 1})['Item']
    """
    card_status = {
        "Arabian Sea": bool,
        "East Asia": bool,
        "Gulf of Mexico": bool,
        "Mediterranean": bool,
        "South Africa": bool,
        "South America": bool,
        "West Africa": bool
    }
    """

    # If there is no Item, the email does not exist in Dynamo
    if 'Item' in user_card_order:
        card_order = user_card_order['Item']

    # Randomize order, create the user in Dynamo and return both
    else:
        card_order = sorted(cards, key=lambda x: random.random())
        user_table.put_item(
            Item={
                'email': email,
                'cardOrder': card_order
            })

    #TODO Add error handling
    return {
        "cardOrder": card_order,
        "cardStatus": card_status
    }
