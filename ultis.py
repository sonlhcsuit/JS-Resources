import os
import re
import argparse
import toml

ROOT = os.getcwd()


def extract_file_directory(file_path=''):
    parent_dir = os.path.dirname(file_path)
    sub_paths = file_path.split(parent_dir)
    f_d = os.path.join(sub_paths[0], parent_dir)
    return f_d


def create_navigator(file_path='', previous_path='', next_path='', index_path='',
                     config_path='./config/navigator.toml'):
    """
    :param file_path: file to be added navigator at last
    :param previous_path: previous file path to go back
    :param next_path: next file path to continue
    :param index_path: index file path to go to index
    :param config_path: config for navigator view using md | html
    :return: void
    """
    # consider './' & '/' are used to indicate root project of us
    config_path = os.path.normpath(ROOT + '/./' + config_path)
    file_path = os.path.normpath(ROOT + '/./' + file_path)

    config_dir = extract_file_directory(config_path)
    file_dir = extract_file_directory(file_path)

    config = toml.load(config_path)
    template_path = os.path.normpath(config_dir + '/./' + config['template'])

    # print(conf_dir)
    # print(config_path)
    # print(file_path)
    # print(file_dir)
    # print(template_path)

    navigate = {
        'previous_path': previous_path,
        'next_path': next_path,
        'index_path': index_path
    }
    icon = {
        'previous_icon': '',
        'next_icon': '',
        'index_icon': '',
    }

    f_stream = open(template_path)
    template = f_stream.read()
    f_stream.close()
    for nav in navigate.keys():
        abs_path = os.path.normpath(ROOT + '/./' + navigate[nav])
        rel_path = os.path.relpath(abs_path, start=file_dir)
        template = template.replace(f"%{{{config['navigate'][nav]}}}%", rel_path)
    for i in icon.keys():
        config['icon'][i]
        abs_path = os.path.normpath(ROOT + '/./' + config['icon'][i])
        rel_path = os.path.relpath(abs_path, start=config_dir)
        template = template.replace(f"%{{{i}}}%", rel_path)


def create_navigators(directory_path=''):
    print(directory_path)
    if directory_path == '':
        return
    dir = os.path.normpath(ROOT + '/./' + directory_path)

    files = os.listdir(dir)
    files = sorted(list(filter(lambda x: 'Lecture' in x, files)))

    for i in range(len(files)):
        if i == 0:
            create_navigator(os.path.join(directory_path, files[i]), None, files[i + 1])
        elif i == len(files) - 1:
            create_navigator(os.path.join(directory_path, files[i]), files[i - 1], None)
        else:
            create_navigator(os.path.join(directory_path, files[i]), files[i - 1], files[i + 1])


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


def parser():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('resource', help='Specify which kinds of resources you would like to perform an action')
    arg_parser.add_argument('action', help='Specify action (create, update, delete) for navigators, indexes, articles')
    arg_parser.add_argument('directory', default=None, help='Specify directory to perform an action.')
    arg_parser.add_argument('-c', '--config', default=None, help='Specify configuration of resources.')

    args = arg_parser.parse_args()
    args = vars(args)
    # print(args)




if __name__ == '__main__':
    parser()
    create_navigators('MINDX-C4EJS')
    # create_navigator('miniAppData/countries/countries.json', 'MINDX-C4EJS/Lecture-01.1.Overview.md',
    #                  'MINDX-CIJS/Lecture 1.1 Basic Knowledge.md', 'MINDX-C4EJS/README.md')

    # remove_controls('MINDX-C4EJS')
    # add_controls('MINDX-C4EJS')
