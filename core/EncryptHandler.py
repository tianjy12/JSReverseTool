import subprocess
import os
import json

class EncryptHandler:
    def __init__(self, selected_template):
        self.selected_template = selected_template

    def encrypt_request_body(self, raw_request):
        if "\n\n" in raw_request:
            header_part, body_part = raw_request.split("\n\n", 1)
        else:
            return raw_request

        try:
            json_body = json.loads(body_part)
        except json.JSONDecodeError:
            return "Invalid JSON in request body"

        encrypted_body = self.run_node_encrypt(json_body)

        return f"{header_part}\n\n{encrypted_body}"

    def run_node_encrypt(self, json_body):
        try:
            script_path = os.path.abspath(f'scripts/{self.selected_template}')

            json_data_str = json.dumps(json_body)

            temp_file_path = os.path.abspath('temp/temp.txt')
            with open(temp_file_path, 'w') as temp_file:
                temp_file.write(json_data_str)

            process = subprocess.Popen(
                ['node', script_path, 'encrypt'],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )

            stdout, stderr = process.communicate()

            if process.returncode != 0:
                print(f"Error executing Node.js script: {stderr.decode('utf-8')}")
                return "Error during encryption"

            return stdout.decode('utf-8').strip()

        except Exception as e:
            print(f"Exception while executing Node.js script: {e}")
            return "Error during encryption"