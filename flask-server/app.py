from flask import Flask, jsonify , request
from flask_cors import CORS
from flask_pymongo import PyMongo
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Library"
CORS(app)
mongo = PyMongo(app)
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = mongo.db.student_login.find_one({
       'username': data['username'],
       'password': data['password']
    })
    if not user:
        return jsonify({'success': False, 'message': 'Invalid username or password'}), 401
    
    return jsonify({
        'success': True,
        'message': 'Login successful',
        'username': user['username']
    })
if __name__ == '__main__':
    app.run(debug=True)
