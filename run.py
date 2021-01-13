#! /usr/bin/python3

from flask import Flask, render_template
from urllib.request import urlopen
from bs4 import BeautifulSoup
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
    url303 = "https://coronaboard.kr/"

    html = urlopen(url303).read()
    soup = BeautifulSoup(html, "html.parser")

    div_corona = soup.find("div", class_="col-3 col-sm-3 col-md-2 text-center")
    p_total = div_corona.find_all("p")[0]
    p_today = div_corona.find_all("p")[1]

    strResult = p_total + " / " + p_today

    return strResult

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
