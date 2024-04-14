import boto3


dynamodb = boto3.resource('dynamodb')
cards = ["Arabian Sea", "East Asia", "Gulf of Mexico", "Mediterranean", "South Africa", "South America", "West Africa", None, None]

def handler(event, context):
    """
    This lambda takes in a region and updates the "FlamingoBingoCards" table
    with that region found.
    """
    region = event['region']
    card_table = dynamodb.Table("FlamingoBingoCards")
    card_status = card_table.get_item(Key={'card': 1})['Item']
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
    card_status[region] = True
    response = card_table.put_item(
            Item={
                'id': 1,
                'cards': card_status
            })

    #TODO Add error handling
    return {}, 200
