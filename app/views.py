from flask import render_template
from app import app


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")


@app.route('/hello')
def hello():
    return "Hello, World!"


@app.route('/')
@app.route('/post')
def post():
    return render_template("post.html")


@app.route('/')
@app.route('/works')
def works():
    return render_template("works.html")


@app.route('/')
@app.route('/search')
def search():
    return render_template("search.html")


@app.route('/')
@app.route('/profile')
def profile():
    return render_template("profile.html")

@app.route('/')
@app.route('/signup')
def signup():
    return render_template("signup.html")

@app.route('/')
@app.route('/signin')
def signin():
    return render_template("signin.html")

@app.route('/')
@app.route('/reset')
def reset():
    return render_template("reset.html")

@app.route('/')
@app.route('/text')
def text():
    return render_template("text.html")