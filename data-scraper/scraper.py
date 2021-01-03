from bs4 import BeautifulSoup
import requests
import lxml
import urllib.request, urllib.parse, urllib.error
import pandas as pd
import json
url = "https://collegedunia.com/reviews?stream=10"
open_ln = requests.get(url)
soup = BeautifulSoup(open_ln.content, "html.parser")
results = soup.find(id="js-reviews-pagination")
review_blocks = results.find_all('div', class_='review_block')
li = []
dic = {}
for i in review_blocks:
  review_for = i.find('div',class_='review_for')
  links = review_for.find('a')
  reviewsets = i.find('div',class_="review_sets")
  right = reviewsets.find('div',class_="right_side")
  reviewer = right.find('div',class_="reviewer_review")
  block = f"College Name: {links.text} Reviews: {reviewer.text}"
  bd = {
      "College Name": links.text,
      "Reviews": reviewer.text
  }
  li.append(bd)
data_file = json.dumps(li)
with open('data.json','w') as f:
  f.write(data_file)
