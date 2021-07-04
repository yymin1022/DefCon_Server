#! /usr/bin/python3

from flask import Flask, render_template
from bs4 import BeautifulSoup

import datetime
import requests
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
    headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'}
    url = "http://ncov.mohw.go.kr/"

    res = requests.get(url, headers=headers)
    soup = BeautifulSoup(res.text, features="html.parser")

    div_table = soup.find("div", class_="liveboard_layout")
    div_live = div_table.find("div", class_="liveNumOuter")
    div_data = div_live.find("div", class_="liveNum")
    str_date = div_live.find("span", class_="livedate").text
    str_total = div_data.find_all("span", class_="num")[0].text.split(")")[1]
    str_today = div_data.find_all("span", class_="before")[0].text.split(" ")[2][:-1]

    strResult = " 어제 " + str_today + "명<br/>누적 " + str_total + "명<br/>" + str_date

    return strResult

@app.route('/work')
def render_work():
    dateStart = datetime.date(2021,3,1)
    dateToday = datetime.date.today()
    
    countDays = (dateToday - dateStart).days

    strResult = str(countDays)
    
    return strResult

def calcByeongsa(days):
    value = days % 5
    
    if value == 0:
        pass
    elif value == 1:
        pass
    elif value == 2:
        pass
    elif value == 3:
        pass
    elif value == 4:
        pass
    
    return days

def calcGanbu(days):
    value = days % 8
    
    if value == 0:
        pass
    elif value == 1:
        pass
    elif value == 2:
        pass
    elif value == 3:
        pass
    elif value == 4:
        pass
    elif value == 5:
        pass
    elif value == 6:
        pass
    elif value == 7:
        pass
    
    return days

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)