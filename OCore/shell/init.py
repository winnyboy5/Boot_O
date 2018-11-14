import sys
import os
import subprocess 
# Takes first name and last name via command  
# line arguments and then display them 
# print("Output from Python") 
print("First name: " + sys.argv[1]) 
print("Last name: " + sys.argv[2]) 

if sys.argv[3] == 'true':
    routeString = ' --routing'
else:
    routeString = ''

commandString = 'pwd && cd.. && if exist "OApp" rd /q /s "OApp" && ng new OApp --style='+sys.argv[1]+' --prefix='+sys.argv[2]+' '+routeString+ '&& cd OCore && echo "done"'
# save the script as hello.py 

def subprocess_cmd(command):
    process = subprocess.Popen(command,stdout=subprocess.PIPE, shell=True)
    proc_stdout = process.communicate()[0].strip()
    print proc_stdout
    return True

subprocess_cmd(commandString)
