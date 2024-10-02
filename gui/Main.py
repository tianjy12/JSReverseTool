import tkinter as tk
from tkinter import messagebox
from core.JSFileSelector import JSFileSelector
from core.HttpHandler import HttpHandler
from core.DecryptHandler import DecryptHandler
from core.EncryptHandler import EncryptHandler
import threading
from conf import Config
from PIL import Image, ImageTk

class JSReverseToolGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("JSReverse Tool")
        self.root.geometry("1000x750")

        icon_image = Image.open('imgs/ico.png')
        icon_photo = ImageTk.PhotoImage(icon_image)
        self.root.iconphoto(True, icon_photo)

        self.selected_js_template = None

        self.create_widgets()

    def create_widgets(self):
        top_frame = tk.Frame(self.root)
        top_frame.pack(side=tk.TOP, fill=tk.X)

        about_button = tk.Button(top_frame, text="About", command=self.show_about)
        about_button.pack(side=tk.LEFT, padx=5, pady=5)

        choose_js_button = tk.Button(top_frame, text="选择JS模板", command=self.choose_js_template)
        choose_js_button.pack(side=tk.LEFT, padx=5, pady=5)

        decrypt_button = tk.Button(top_frame, text="解密", command=self.decrypt_request_body)
        decrypt_button.pack(side=tk.LEFT, padx=5, pady=5)

        encrypt_button = tk.Button(top_frame, text="加密", command=self.encrypt_request_body)  # 新增加密按钮
        encrypt_button.pack(side=tk.LEFT, padx=5, pady=5)

        send_button = tk.Button(top_frame, text="Send", command=self.send_request)
        send_button.pack(side=tk.LEFT, padx=5, pady=5)

        self.js_template_label = tk.Label(top_frame, text="当前JS模板：未选择", font=("Helvetica", 10), fg="blue")
        self.js_template_label.pack(side=tk.LEFT, padx=10)

        main_frame = tk.Frame(self.root)
        main_frame.pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        left_frame = tk.Frame(main_frame)
        left_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

        self.request_text = tk.Text(left_frame, height=20, width=50)
        self.request_text.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

        right_frame = tk.Frame(main_frame)
        right_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

        self.response_text = tk.Text(right_frame, height=20, width=50)
        self.response_text.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

        self.response_text.config(state=tk.DISABLED)

    def show_about(self):
        about_window = tk.Toplevel(self.root)
        about_window.title("About")
        about_window.geometry("450x250")

        about_label = tk.Label(about_window, text=Config.LOGO, justify=tk.LEFT, wraplength=380)
        about_label.pack(pady=20)

        close_button = tk.Button(about_window, text="Close", command=about_window.destroy)
        close_button.pack(pady=10)

        about_window.transient(self.root)
        about_window.grab_set()
        self.root.wait_window(about_window)

    def choose_js_template(self):
        js_file_selector = JSFileSelector(self.root)
        selected_template = js_file_selector.choose_js_template()

        if selected_template:
            self.selected_js_template = selected_template
            js_file_name = selected_template.split('/')[-1]
            self.js_template_label.config(text=f"当前JS模板：{js_file_name}", fg="green")
        else:
            self.js_template_label.config(text="当前JS模板：未选择", fg="red")

    def decrypt_request_body(self):
        if not self.selected_js_template:
            messagebox.showwarning("Error", "Please choose a JS template before decrypting.")
            return

        def perform_decrypt():
            decrypt_handler = DecryptHandler(self.selected_js_template)
            decrypted_body = decrypt_handler.decrypt_request_body(self.selected_js_template, self.request_text.get(1.0, tk.END))

            self.request_text.delete(1.0, tk.END)
            self.request_text.insert(tk.END, decrypted_body)

        threading.Thread(target=perform_decrypt).start()

    def encrypt_request_body(self):
        if not self.selected_js_template:
            messagebox.showwarning("Error", "Please choose a JS template before encrypting.")
            return

        def perform_encrypt():
            encrypt_handler = EncryptHandler(self.selected_js_template)
            encrypted_body = encrypt_handler.encrypt_request_body(self.request_text.get(1.0, tk.END))

            self.request_text.delete(1.0, tk.END)
            self.request_text.insert(tk.END, encrypted_body)

        threading.Thread(target=perform_encrypt).start()

    def send_request(self):
        raw_request = self.request_text.get(1.0, tk.END).strip()
        if not raw_request:
            messagebox.showwarning("Error", "Please enter a request body.")
            return

        if not self.selected_js_template:
            messagebox.showwarning("Error", "Please choose a JS template before sending.")
            return

        handler = HttpHandler(self.response_text)
        handler.send_request(raw_request)


def start_gui():
    root = tk.Tk()
    app = JSReverseToolGUI(root)
    root.mainloop()