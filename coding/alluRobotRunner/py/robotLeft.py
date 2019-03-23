import paramiko

f = open("left.txt","w+")

robot_IP = '192.168.x.x'
username = 'pi'
password = 'raspberry'

ssh = paramiko.SSHClient()
ssh.connect(robot_IP, username=username, password=password)
ssh_stdin, ssh_stdout, ssh_stderr = ssh.exec_command(cmd_to_execute)