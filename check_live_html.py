import urllib.request
import re

url = 'https://satyazitmohapatra.github.io/my_new_webs_18sep/'
try:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode()
        
        # Find hrefs
        matches = re.findall(r'href="([^"]*PROJECT_001[^"]*)"', html)
        print("Matches in live HTML:")
        for m in set(matches):
            print(m)
except Exception as e:
    print("Error:", e)
