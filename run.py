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

    divTable = soup.find("div", class_="liveboard_layout")
    divLive = divTable.find("div", class_="liveNumOuter")
    divData = divLive.find("div", class_="liveNum")
    strDate = divLive.find("span", class_="livedate").text
    strTotal = divData.find_all("span", class_="num")[0].text.split(")")[1]
    strToday = divData.find_all("span", class_="before")[0].text.split(" ")[2][:-1]

    strResult = " 어제 %s명<br/>누적 %s명<br/>%s"%(strToday, strTotal, strDㅎ;
    ate)

    return strResult

@app.route('/work')
def render_work():
    dateStart = datetime.date(2021,3,1)
    dateToday = datetime.date.today()
    
    countDays = (dateToday - dateStart).days

    strResult = "병사<br/>%s<br/><br/>간부<br/>%s"%(calcByeongsa(countDays), calcGanbu(countDays))
    
    return strResult

def calcByeongsa(days):
    calcValue = days % 5
    returnValue = ""
    
    if calcValue == 0:
        returnValue = "1조 2BRK<br/>2조 MID/SWI<br/>3조 1BRK<br/>4조 MOR<br/>5조 AFT"
    elif calcValue == 1:
        returnValue = "1조 MOR<br/>2조 AFT<br/>3조 2BRK<br/>4조 MID/SWI<br/>5조 1BRK"
    elif calcValue == 2:
        returnValue = "1조 MID/SWI<br/>2조 1BRK<br/>3조 MOR<br/>4조 AFT<br/>5조 2BRK"
    elif calcValue == 3:
        returnValue = "1조 AFT<br/>2조 2BRK<br/>3조 MID/SWI<br/>4조 1BRK<br/>5조 MOR"
    elif calcValue == 4:
        returnValue = "1조 1BRK<br/>2조 MOR<br/>3조 AFT<br/>4조 2BRK<br/>5조 MID/SWI"
    
    return returnValue

def calcGanbu(days):
    calcValue = days % 5
    returnValue = ""
    
    if calcValue == 0:
        returnValue = "A조 2DAY<br/>B조 1MID<br/>C조 2SWI<br/>D조 2BRK"
    elif calcValue == 1:
        returnValue = "A조 S/B<br/>B조 2MID/1SWI<br/>C조 1BRK<br/>D조 1DAY"
    elif calcValue == 2:
        returnValue = "A조 1MID<br/>B조 2SWI<br/>C조 2BRK<br/>D조 2DAY"
    elif calcValue == 3:
        returnValue = "A조 2MID/1SWI<br/>B조 1BRK<br/>C조 1DAY<br/>D조 S/B"
    elif calcValue == 4:
        returnValue = "A조 2SWI<br/>B조 2BRK<br/>C조 2DAY<br/>D조 1MID"
    elif calcValue == 5:
        returnValue = "A조 1BRK<br/>B조 1DAY<br/>C조 S/B<br/>D조 2MID/1SWI"
    elif calcValue == 6:
        returnValue = "A조 2BRK<br/>B조 2DAY<br/>C조 1MID<br/>D조 2SWI"
    elif calcValue == 7:
        returnValue = "A조 1DAY<br/>B조 S/B<br/>C조 2MID/1SWI<br/>D조 1BRK"
    
    return returnValue

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)