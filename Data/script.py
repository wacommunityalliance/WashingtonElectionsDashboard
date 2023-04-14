# just run this 1x after you have produced the final folder structure

import os
import json

starting_directory = os.getcwd()

current_directory = starting_directory.split(os.path.sep)[-1]

def create_nested_structure(root):
    result = []

    for filename in os.listdir(root):
        file_path = os.path.join(root, filename)

        if os.path.isdir(file_path):
            sub_items = create_nested_structure(file_path)
            result.append({
                'title': filename,
                'path': None,
                'items': sub_items if sub_items else None
            })
        else:
            if not filename.endswith('.geojson'):
                continue

            result.append({
                'title': process_title(filename),
                'path': os.path.sep + current_directory + os.path.abspath(file_path).replace(starting_directory, ''),
                'items': None
            })

    return sorted(result, key=lambda x: x['title'])

def process_title(title):
    if title.endswith('.geojson'):
        title = title[:-8]
        if '_' in title:
            title = title.split('_', 1)[1]
    return title

def add_items(nested_structure):
    for item in nested_structure:
        sub_items = item['items']

        if sub_items is not None:
            for sub_item in sub_items:
                sub_sub_items = sub_item['items']

                if sub_sub_items:
                    sub_item['items'] = sorted(add_items(sub_sub_items), key=lambda x: x['title'])


    return nested_structure

nested_structure = create_nested_structure(starting_directory)
nested_structure_with_items = {'items': add_items(nested_structure)}
print(json.dumps(nested_structure_with_items))