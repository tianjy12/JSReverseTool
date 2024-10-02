import requests

class SendHttpRequest:
    def __init__(self):
        pass

    def send(self, raw_request):
        request_lines = raw_request.split("\n")
        request_line = request_lines[0].split()
        method = request_line[0]
        path = request_line[1]

        headers = {}
        body = ""
        host = ""

        in_body = False
        for line in request_lines[1:]:
            if line == "":
                in_body = True
                continue
            if in_body:
                body += line
            else:
                if ": " in line:
                    header_key, header_value = line.split(": ", 1)
                    headers[header_key] = header_value
                    if header_key.lower() == "host":
                        host = header_value

        url = f"https://{host}{path}"

        try:
            if method == "POST":
                response = requests.post(url, headers=headers, data=body, timeout=5)
            elif method == "GET":
                response = requests.get(url, headers=headers, timeout=5)
            else:
                return f"Unsupported HTTP method: {method}"

            return response
        except Exception as e:
            return f"Error sending request: {str(e)}"
