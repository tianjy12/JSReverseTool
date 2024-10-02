import tkinter as tk
from tkinter import filedialog, messagebox
import os

class JSFileSelector:
    def __init__(self, root):
        self.root = root

    def choose_js_template(self):
        js_template_dir = 'scripts'
        js_files = [f for f in os.listdir(js_template_dir) if f.endswith('.js')]

        if not js_files:
            messagebox.showerror("Error", "No JS templates found in the JSTemplate directory.")
            return None

        selected_template = None

        def on_select(event):
            nonlocal selected_template
            selected_template = template_listbox.get(template_listbox.curselection())
            template_window.destroy()

        template_window = tk.Toplevel(self.root)
        template_window.title("选择JS模板")

        template_listbox = tk.Listbox(template_window, height=10)
        for js_file in js_files:
            template_listbox.insert(tk.END, js_file)
        template_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        template_listbox.bind('<<ListboxSelect>>', on_select)

        self.root.wait_window(template_window)

        return selected_template