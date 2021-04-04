import os
import re
def add_control(file=None,previous_href=None,next_href=None):
    # next_href & previous href must be relative with the current file
    fs = open(file,'a') # must be absolute path
    control_str = """
---
<!-- Navigator -->
<div>
<a href="./{}">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./{}">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->
""".format(previous_href,next_href)
    fs.write(control_str)
    fs.close()

def add_controls(dir_path=None):
    c_path = os.getcwd()
    d_path = dir_path
    path = os.path.join(c_path,d_path)
    files = os.listdir(path)
    files = sorted(list(filter(lambda x:'Lecture' in x,files)))
    print(files)
    for i in range(len(files)):
        if i == 0:
            add_control(os.path.join(path,files[i]),None,files[i+1])
        elif i == len(files) - 1:
            add_control(os.path.join(path,files[i]),files[i-1],None)
        else:
            add_control(os.path.join(path,files[i]),files[i-1],files[i+1])

def remove_control(file):
    rg_str = r'^-{3}\n\<\!-{2}\sNavigator\s-{2}\>.*?\<\!-{2}\sNavigator\s-{2}\>'
    rg = re.compile(rg_str,re.IGNORECASE|re.MULTILINE|re.DOTALL)
    f = open(file,'r')
    f_content = f.read()

    f_content = re.sub(rg,'',f_content)
    print(f_content)
    f.close()
    f = open(file,'w')
    f.write(f_content)
    f.close()

def remove_controls(dir_path=None):
    c_path = os.getcwd()
    d_path = dir_path
    path = os.path.join(c_path,d_path)
    files = os.listdir(path)
    files = sorted(list(filter(lambda x:'Lecture' in x,files)))
    print(files)
    for i in range(len(files)):
        remove_control(os.path.join(path,files[i]))
        

if __name__ == '__main__':

    remove_controls('MINDX-C4EJS')
    add_controls('MINDX-C4EJS')
