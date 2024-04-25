from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data for blog posts
posts = []

app = Flask(__name__, static_url_path='/static')

# Function to generate a unique ID for new posts
def generate_id():
    return max(post['id'] for post in posts) + 1 if posts else 1

@app.route('/')
def index():
    return render_template('index.html', posts=posts)

@app.route('/post/<int:id>')
def post(id):
    post = next((post for post in posts if post['id'] == id), None)
    if post:
        return render_template('post.html', post=post)
    else:
        return render_template('error.html', message='Post not found.')

@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        author = request.form['author']
        new_post = {'id': generate_id(), 'title': title, 'content': content, 'author': author}
        posts.append(new_post)
        return redirect(url_for('index'))
    return render_template('create.html')

@app.route('/delete/<int:id>')
def delete(id):
    global posts
    posts = [post for post in posts if post['id'] != id]
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
