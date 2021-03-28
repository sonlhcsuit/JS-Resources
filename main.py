import re 
import os

c_path = os.getcwd()
d_path = 'sources'
path  = os.path.join(c_path,d_path)
files = os.listdir(path)
for filename in files:
    new_filename = filename.replace(' ','-').replace('_','-')
    os.system('mv {} {}'.format(os.path.join(path,filename.replace(' ','\ ')),os.path.join(path,new_filename)))