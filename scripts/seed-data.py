import os
from dotenv import load_dotenv
load_dotenv()

import pymysql

_real_connect = pymysql.connect

def patched_connect(*args, **kwargs):
    kwargs['host'] = os.environ['DB_HOST']
    kwargs['port'] = int(os.environ.get('DB_PORT', '3306'))
    kwargs['user'] = os.environ['DB_USER']
    kwargs['password'] = os.environ['DB_PASSWORD']
    kwargs['database'] = os.environ['DB_NAME']
    kwargs.setdefault('autocommit', True)
    return _real_connect(*args, **kwargs)

pymysql.connect = patched_connect

with open('DataGenerator.ipynb', 'r', encoding='utf-8') as f:
    import json
    nb = json.load(f)

def display(*args, **kwargs):
    pass

globals_dict = {'__name__': '__main__', 'display': display}

for i, cell in enumerate(nb['cells']):
    if cell.get('cell_type') != 'code':
        continue

    src = ''.join(cell.get('source', []))
    if not src.strip():
        continue

    cleaned_lines = []
    for line in src.splitlines():
        if line.lstrip().startswith('!'):
            continue
        cleaned_lines.append(line)

    src = '\n'.join(cleaned_lines).strip()
    if not src:
        continue

    try:
        exec(src, globals_dict)
    except Exception as e:
        print(f'Failed on notebook cell {i}')
        raise

print('Seed data loaded successfully.')
