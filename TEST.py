# Mock database interactions
from flask import Flask, render_template, request, redirect, url_for, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your routes and other Flask code...

class User:
    def __init__(self, username, password_hash):
        self.username = username
        self.password_hash = password_hash

# Mock registration route
@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Mock user creation (replace with actual logic)
        new_user = User(username=username, password_hash=password)
        
        return jsonify({'success': True, 'message': 'User registered successfully'})

    return jsonify({'success': False, 'message': 'Invalid request'})

if __name__ == "__main__":
    app.run(debug=True)
