import os
import re
import argparse
import toml
pwd = os.getcwd()


def create_navigator(path='',previous_path='',next_path='',index_path='',config='./navigator.toml'):
    # previous_t = '%\{previous\}%'
    # index_t = '%\{index\}%'
    # next_t = '%\{next\}%'
    # f = open(os.path.normpath(os.path.join(pwd,template)),'r')
    # t = f.read()
    # f.close()
    # t = re.sub(previous_t,previous_path,t)
    # t = re.sub(index_t,previous_path,t)
    # t = re.sub(next_t,previous_path,t)
    # print(t)
    # print(os.path.join(pwd,'MINDX-C4EJS',previous_path))
    # print(os.path.relpath(os.path.join(pwd,'MINDX-C4EJS',previous_path),start=os.path.join(pwd,'sources')))

   






















# def update_index(dir_path):
#     pass
# def add_control(file='#',previous_href='#',next_href='#',syllabus='README.md'):
#     # next_href & previous href must be relative with the current file
#     fs = open(file,'a') # must be absolute path
#     control_str = """
# ---
# <!-- Navigator -->
# <div>
# <a href="./{}">
#     <img width=50 src="../sources/left-arrow.svg" >
# </a>
# <a href="./{}">
#     <img width=50 src="../sources/index.svg" >
# </a>
# <a href="./{}">
#     <img  width=50 src="../sources/right-arrow.svg">
#     </a>
# </div>
# <!-- Navigator -->
# """.format(previous_href,syllabus,next_href)
#     fs.write(control_str)
#     fs.close()

# def add_controls(dir_path=None):
#     c_path = os.getcwd()
#     d_path = dir_path
#     path = os.path.join(c_path,d_path)
#     files = os.listdir(path)
#     files = sorted(list(filter(lambda x:'Lecture' in x,files)))
#     print(files)
#     for i in range(len(files)):
#         if i == 0:
#             add_control(os.path.join(path,files[i]),None,files[i+1])
#         elif i == len(files) - 1:
#             add_control(os.path.join(path,files[i]),files[i-1],None)
#         else:
#             add_control(os.path.join(path,files[i]),files[i-1],files[i+1])

# def remove_control(file):
#     rg_str = r'^-{3}\n\<\!-{2}\sNavigator\s-{2}\>.*?\<\!-{2}\sNavigator\s-{2}\>'
#     rg = re.compile(rg_str,re.IGNORECASE|re.MULTILINE|re.DOTALL)
#     f = open(file,'r')
#     f_content = f.read()

#     f_content = re.sub(rg,'',f_content)
#     # print(f_content)
#     f.close()
#     f = open(file,'w')
#     f.write(f_content.strip())
#     f.close()

# def remove_controls(dir_path=None):
#     c_path = os.getcwd()
#     d_path = dir_path
#     path = os.path.join(c_path,d_path)
#     files = os.listdir(path)
#     files = sorted(list(filter(lambda x:'Lecture' in x,files)))
#     print(files)
#     for i in range(len(files)):
#         remove_control(os.path.join(path,files[i]))
        
        

# def parser():
#     arg_parser = argparse.ArgumentParser()
#     arg_parser.add_argument('resource',help='Specify which kinds of resources you would like to perform an action')
#     arg_parser.add_argument('action',help='Specify action (create, update, delete) for navigators, indexes, articles')
#     arg_parser.add_argument('directory',default=None,help='Specify directory to perform an action.')
#     arg_parser.add_argument('-t','--template',default=None,help='Specify template.')

#     args = arg_parser.parse_args()
#     args = vars(args)
#     print(args)

if __name__ == '__main__':
    # parser()
    create_navigator('Lecture-01.2.Introduction-to-Front-End.md','Lecture-01.1.Overview.md','Lecture-01.3.Introduction-to-HTML.md')
    # remove_controls('MINDX-C4EJS')
    # add_controls('MINDX-C4EJS')
