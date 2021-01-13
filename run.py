#! /usr/bin/python3

from flask import Flask, render_template
import socket
app = Flask(__name__)

@app.route('/')
def render_main():
    return render_template('index.html')

@app.route('/member')
def render_member():
    return render_template('member.html')

@app.route('/privacy')
def render_privacy():
    return render_template('privacy.html')

@app.route('/blog_lr')
def render_blog_lr():
    return render_template('blog_lr.html')

@app.route('/corona')
def render_corona():
    return "Hello, World"

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
