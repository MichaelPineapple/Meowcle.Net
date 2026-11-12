#!/usr/bin/env python3

import json
import os
import sys
    
def main(request):
    return {"resultCode": "ok", "payload": str(request)}

length = int(os.environ.get("CONTENT_LENGTH") or 0)
request = sys.stdin.buffer.read(length)
response = main(request)
status = "200 OK"
sys.stdout.write("Status: %s\r\n" % status)
sys.stdout.write("Content-Type: application/json; charset=utf-8\r\n\r\n")
sys.stdout.write(json.dumps(response))
