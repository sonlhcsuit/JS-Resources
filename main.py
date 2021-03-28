def add_control(file=None,next_href=None,previous_href=None):
    # next_href & previous href must be relative with the current file
    fs = open(file,'a') # must be absolute path
    
    control_str = """
---
<div>
<a href="./Lecture-01.2.Introduction-to-Front-End.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./Lecture-01.2.Introduction-to-Front-End.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
"""
    fs.write(control_str)
    fs.close()

add_control('/Users/apple/silver/projects/personal/JS-Resources/MINDX-C4EJS/Lecture-01.1.Overview.md')