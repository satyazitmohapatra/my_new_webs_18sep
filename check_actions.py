import urllib.request
import json

url = 'https://api.github.com/repos/satyazitmohapatra/my_new_webs_18sep/actions/runs?per_page=3'
req = urllib.request.Request(url, headers={'Accept': 'application/vnd.github.v3+json'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    for run in data['workflow_runs']:
        msg = run['head_commit']['message'].replace('\n', ' ')
        print(f"Run {run['id']} - Status: {run['status']} - Conclusion: {run['conclusion']} - Commit: {msg[:50]}")
