from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__, static_folder='static')
with open('dataset/houses.json') as f:
    house_data = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/viewer')
def viewer():
    return render_template('viewer.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    user_input = request.json
    budget = user_input.get('budget', '').lower()
    rooms = int(user_input.get('rooms', 0))
    floors = int(user_input.get('floors', 0))
    style = user_input.get('style', '').lower()
    for house in house_data:
        if (house['budget'].lower() == budget and
            house['rooms'] == rooms and
            house['floors'] == floors and
            house['style'].lower() == style):
            model_path = f"/static/{house['model_path']}"
            return jsonify({"success": True, "model_path": model_path})
    return jsonify({"success": False, "message": "No matching house design found."})
if __name__ == '__main__':
    app.run(debug=True)
