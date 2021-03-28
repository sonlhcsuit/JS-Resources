import os
def add_control(file=None,previous_href=None,next_href=None):
    # next_href & previous href must be relative with the current file
    fs = open(file,'a') # must be absolute path
    
    control_str = """
---
<div>
<a href="./{}">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./{}">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
""".format(previous_href,next_href)
    fs.write(control_str)
    fs.close()

c_path = os.getcwd()
d_path = 'MINDX-C4EJS'
path = os.path.join(c_path,d_path)

files = os.listdir(path)

for i in range(len(files)):
    if i == 0:
        add_control(os.path.join(path,files[i]),None,files[i+1])
    elif i == len(files) - 1:
        add_control(os.path.join(path,files[i]),files[i-1],None)
    else:
        add_control(os.path.join(path,files[i]),files[i-1],files[i+1])


