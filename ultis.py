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
                     config_path='/config/navigator.toml'):
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
        abs_path = os.path.normpath(ROOT + '/./' + config['icon'][i])
        rel_path = os.path.relpath(abs_path, start=file_dir)

        template = template.replace(f"%{{{i}}}%", rel_path)
    f_stream = open(file_path, 'r')
    text = f_stream.read()
    f_stream.close()
    f_stream = open(file_path, 'w')
    f_stream.write(text)
    f_stream.write('\n')
    f_stream.write(template)
    f_stream.close()

def create_navigators(directory_path='', config_path='/config/navigator.toml'):
    print(directory_path)
    if directory_path == '':
        return
    dir = os.path.normpath(ROOT + '/./' + directory_path)

    files = os.listdir(dir)
    files = sorted(list(filter(lambda x: 'Lecture' in x, files)))
    # j = 0
    for i in range(len(files)):
        if i == 0:
            create_navigator(file_path=os.path.join(directory_path, files[i]),
                             next_path=os.path.join(directory_path, files[i + 1]),
                             index_path=os.path.join(directory_path, 'README.md'),
                             config_path=config_path
                             )
        elif i == len(files) - 1:
            create_navigator(file_path=os.path.join(directory_path, files[i]),
                             previous_path=os.path.join(directory_path, files[i - 1]),
                             index_path=os.path.join(directory_path, 'README.md'),
                             config_path=config_path)
        else:
            create_navigator(file_path=os.path.join(directory_path, files[i]),
                             previous_path=os.path.join(directory_path, files[i - 1]),
                             next_path=os.path.join(directory_path, files[i + 1]),
                             index_path=os.path.join(directory_path, 'README.md'),
                             config_path=config_path)
        print(os.path.join(directory_path, files[i]))


def delete_navigators(directory_path):
    if directory_path == '':
        return
    dir = os.path.normpath(ROOT + '/./' + directory_path)

    files = os.listdir(dir)
    files = sorted(list(filter(lambda x: 'Lecture' in x, files)))

    for i in range(len(files)):
        delete_navigator(file_path=os.path.join(directory_path, files[i]))
    # print(os.path.join(directory_path, files[i]))


def delete_navigator(file_path=''):
    if file_path == '':
        return
    rg_str = r'^-{3}\n\<\!-{2}\sNavigator\s-{2}\>.*?\<\!-{2}\sNavigator\s-{2}\>'
    rg = re.compile(rg_str, re.IGNORECASE | re.MULTILINE | re.DOTALL)
    file_path = os.path.normpath(ROOT + '/./' + file_path)

    f = open(file_path, 'r')
    f_content = f.read()
    f_content = re.sub(rg, '', f_content)
    f.close()

    f = open(file_path, 'w')
    f.write(f_content.strip())
    f.close()


def parser():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('resource', help='Specify which kinds of resources you would like to perform an action')
    arg_parser.add_argument('action', help='Specify action (create, update, delete) for navigators, indexes, articles')
    arg_parser.add_argument('directory', help='Specify directory to perform an action.')
    arg_parser.add_argument('-c', '--config',  help='Specify configuration of resources.')

    args = arg_parser.parse_args()
    args = vars(args)
    if args['action'] == 'create' or args['action'] == 'update':
        if args['config'] == None:
            raise Exception('Must specify config file when create or update')
        if args['config'][-4:] != 'toml':
            raise Exception('config file must be in toml format')
    print(args)
    return args


def main(args):
    if args['resource'] == 'navigator':
        if args['action'] == 'create':
            print('Creating')
            create_navigators(args['directory'], args['config'])
        elif args['action'] == 'delete':
            delete_navigators(args['directory'])

            print('Deleting')


        elif args['action'] == 'update':
            delete_navigators(args['directory'])

            create_navigators(args['directory'], args['config'])

            print('Updating')

            print(args['directory'])


    elif args['resources'] == 'index':
        pass


if __name__ == '__main__':
    args = parser()
    main(args)
