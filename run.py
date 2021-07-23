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

    strResult = " 어제 %s명<br/>누적 %s명<br/>%s"%(strToday, strTotal, strDate)

    return strResult

@app.route('/wa-api')
def render_wa_api():
    strResult = ""
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
    strResult = ""
    
    if calcValue == 0:
        strResult = "1조 2BRK<br/>2조 MID(23:40 ~ 07:20)/SWI(17:40 ~ 23:50)<br/>3조 1BRK<br/>4조 MOR(07:10 ~ 12:10)<br/>5조 AFT(12:00 ~ 17:50)"
    elif calcValue == 1:
        strResult = "1조 MOR(07:10 ~ 12:10)<br/>2조 AFT(12:00 ~ 17:50)<br/>3조 2BRK<br/>4조 MID(23:40 ~ 07:20)/SWI(17:40 ~ 23:50)<br/>5조 1BRK"
    elif calcValue == 2:
        strResult = "1조 MID(23:40 ~ 07:20)/SWI(17:40 ~ 23:50)<br/>2조 1BRK<br/>3조 MOR(07:10 ~ 12:10)<br/>4조 AFT(12:00 ~ 17:50)<br/>5조 2BRK"
    elif calcValue == 3:
        strResult = "1조 AFT(12:00 ~ 17:50)<br/>2조 2BRK<br/>3조 MID(23:40 ~ 07:20)/SWI(17:40 ~ 23:50)<br/>4조 1BRK<br/>5조 MOR(07:10 ~ 12:10)"
    elif calcValue == 4:
        strResult = "1조 1BRK<br/>2조 MOR(07:10 ~ 12:10)<br/>3조 AFT(12:00 ~ 17:50)<br/>4조 2BRK<br/>5조 MID(23:40 ~ 07:20)/SWI(17:40 ~ 23:50)"
    
    return strResult

def calcGanbu(days):
    calcValue = days % 8
    strResult = ""
    
    if calcValue == 0:
        strResult = "A조 S/B<br/>B조 2MID(23:20 ~ 07:30)/1SWI(17:00 ~ 23:30)<br/>C조 1BRK<br/>D조 1DAY(07:20 ~ 17:10)"
    elif calcValue == 1:
        strResult = "A조 1MID(23:20 ~ 07:30)<br/>B조 2SWI(17:00 ~ 23:30)<br/>C조 2BRK<br/>D조 2DAY(07:20 ~ 17:10)"
    elif calcValue == 2:
        strResult = "A조 2MID(23:20 ~ 07:30)/1SWI(17:00 ~ 23:30)<br/>B조 1BRK<br/>C조 1DAY(07:20 ~ 17:10)<br/>D조 S/B"
    elif calcValue == 3:
        strResult = "A조 2SWI(17:00 ~ 23:30)<br/>B조 2BRK<br/>C조 2DAY(07:20 ~ 17:10)<br/>D조 1MID(23:20 ~ 07:30)"
    elif calcValue == 4:
        strResult = "A조 1BRK<br/>B조 1DAY(07:20 ~ 17:10)<br/>C조 S/B<br/>D조 2MID(23:20 ~ 07:30)/1SWI(17:00 ~ 23:30)"
    elif calcValue == 5:
        strResult = "A조 2BRK<br/>B조 2DAY(07:20 ~ 17:10)<br/>C조 1MID(23:20 ~ 07:30)<br/>D조 2SWI(17:00 ~ 23:30)"
    elif calcValue == 6:
        strResult = "A조 1DAY(07:20 ~ 17:10)<br/>B조 S/B<br/>C조 2MID(23:20 ~ 07:30)/1SWI(17:00 ~ 23:30)<br/>D조 1BRK"
    elif calcValue == 7:
        strResult = "A조 2DAY(07:20 ~ 17:10)<br/>B조 1MID(23:20 ~ 07:30)<br/>C조 2SWI(17:00 ~ 23:30)<br/>D조 2BRK"
    
    return strResult

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)