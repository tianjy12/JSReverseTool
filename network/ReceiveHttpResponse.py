import tkinter as tk

class ReceiveHttpResponse:
    @staticmethod
    def format_response(response, text_widget):
        text_widget.config(state=tk.NORMAL)
        text_widget.delete(1.0, tk.END)

        if isinstance(response, str):
            text_widget.insert(tk.END, response)
            text_widget.config(state=tk.DISABLED)
            return

        status_line = f"HTTP/{response.raw.version} {response.status_code} {response.reason}\n"
        text_widget.insert(tk.END, status_line)

        for header, value in response.headers.items():
            header_line = f"{header}: {value}\n"
            text_widget.insert(tk.END, header_line)

        text_widget.insert(tk.END, "\n")

        text_widget.insert(tk.END, response.text)

        text_widget.config(state=tk.DISABLED)
