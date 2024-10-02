from network.SendHttpRequest import SendHttpRequest
from network.ReceiveHttpResponse import ReceiveHttpResponse
from tkinter import messagebox

class HttpHandler:
    def __init__(self, response_text_widget):
        self.response_text = response_text_widget

    def send_request(self, raw_request):
        try:
            http_sender = SendHttpRequest()
            response = http_sender.send(raw_request)

            ReceiveHttpResponse.format_response(response, self.response_text)

        except Exception as e:
            messagebox.showerror("Error", f"Failed to send request: {str(e)}")
