from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Initialize an empty list to store feedbacks
feedbacks = []

@app.route('/')
def index():
    return render_template('index.html', feedbacks=feedbacks)

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    name = request.form['name']
    email = request.form['email']
    mobile = request.form['mobile']
    age = request.form['age']
    gender = request.form['gender']
    feedback = request.form['feedback']
    privacy_policy = request.form.get('privacy_policy', 'No')

    # Store feedback in the feedbacks list
    feedbacks.append({
        'name': name,
        'email': email,
        'mobile': mobile,
        'age': age,
        'gender': gender,
        'feedback': feedback,
        'privacy_policy': privacy_policy
    })

    return redirect(url_for('index'))

@app.route('/feedbacks')
def view_feedbacks():
    return render_template('feedbacks.html', feedbacks=feedbacks)

if __name__ == '__main__':
    app.run(debug=True)
