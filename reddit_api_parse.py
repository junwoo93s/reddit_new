import praw
from flask import Flask, render_template, request, redirect, Response
import json



# arr =[]
reddit = praw.Reddit(client_id = '835t6BTU6Es7Qg', client_secret = 't61CZFPiRlLwNJEsa2HK7UCwDO8',user_agent='my user agent')
for submission in reddit.subreddit('overwatch').hot(limit=10):
	print(submission.title)
	print(submission.selftext)
	# arr.append(submission.title)
	# arr.append(submission.sefltext)

