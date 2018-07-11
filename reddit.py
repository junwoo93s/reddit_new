import praw
from flask import Flask, render_template, request, redirect, Response
import json


app = Flask(__name__)

@app.route("/calling", methods = ['POST'])
def calling():
	arr =[]
	data = request.json
	reddit = praw.Reddit(client_id = '', client_secret = '',user_agent='my user agent')
	for submission in reddit.subreddit(data).new(limit=1):
		print(submission.title)
		print(submission.selftext)
		arr.append(submission.title)
		arr.append(submission.sefltext)
		return arr
