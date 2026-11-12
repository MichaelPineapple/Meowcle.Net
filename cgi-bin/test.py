#!/usr/bin/env python3

import json
import os
import sys

def send(status, obj):
    sys.stdout.write("Status: %s\r\n" % status)
    sys.stdout.write("Content-Type: application/json; charset=utf-8\r\n\r\n")
    sys.stdout.write(json.dumps(obj))

send("200 OK", {"resultCode": "ok", "payload": "Hello"})
