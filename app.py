#! /usr/bin/python3

from flask import Flask, render_template
import socket
app = Flask(__name__)

@app.route('/')
def render_main():
    return render_template('index.html')

@app.route('/activity')
def render_elements():
    return render_template('activity.html')

@app.route('/about')
def render_generic():
    return render_template('about.html')

@app.route('/blog_lr')
def render_blog_lr():
    return render_template('blog_lr.html')

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
