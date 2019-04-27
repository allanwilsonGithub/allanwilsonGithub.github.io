import paramiko

robot_IP = '192.168.1.115'
username = 'pi'
password = 'raspberry'

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(robot_IP, username=username, password=password)
ssh_stdin, ssh_stdout, ssh_stderr = ssh.exec_command("python /home/pi/pi2go/robotMoveForward.py");