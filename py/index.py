from gettext import find
from os import stat
import requests
from bs4 import BeautifulSoup
import pandas as pd
url = "https://www.officedepot.com/a/browse/ergonomic-office-chairs/N=5+593065&amp;cbxRefine=1429832/"
res = requests.get(url)
content =  BeautifulSoup(res.content,'html.parser')
print(content)

# data = content.find_all('div',{'class':'absolute w-100 h-100 z-1 hide-sibling-opacity'})
# print(data)
# links=[]
# products_nams=[]
# stat_link='https://www.walmart.com/browse/electronics/dell-gaming-laptops'
# for items in data:
#     rest_link=find('a')['href']
#     name
# sans-serif mid-gray relative flex flex-column w-100