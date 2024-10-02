import subprocess

class DecryptHandler:

    def __init__(self, selected_js_template):
        self.selected_js_template = selected_js_template

    def decrypt_request_body(self, selected_template, raw_request):
        decrypted_body = self.run_node_decrypt(selected_template)

        if "\r\n\r\n" in raw_request:
            header_part, body_part = raw_request.split("\r\n\r\n", 1)
            return f"{header_part}\r\n\r\n{decrypted_body}"
        elif "\n\n" in raw_request:
            header_part, body_part = raw_request.split("\n\n", 1)
            return f"{header_part}\n\n{decrypted_body}"
        else:
            return raw_request

    def run_node_decrypt(self, selected_template):
        try:
            process = subprocess.Popen(
                ['node', f'scripts/{selected_template}', 'decrypt'],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )

            stdout, stderr = process.communicate()

            if process.returncode != 0:
                print(f"Error executing Node.js script: {stderr.decode('utf-8')}")
                return "Error during decryption"

            return stdout.decode('utf-8')

        except Exception as e:
            print(f"Exception while executing Node.js script: {e}")
            return "Error during decryption"
