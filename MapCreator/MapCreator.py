from PIL import Image, ImageDraw

def pngToJson(path):
    file = open('map1.json', 'w')
    im = Image.open(path)
    width, height = im.size
    pixels = im.load()
    file.write('{ "width": ' + str(width) + ', "height": ' + str(height) + ', "data": [')

    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            if r == 255 and g != 255 and b != 255:
                file.write('{ "x": ' + str(40) + ', "y": ' + str(40) + ', "position": { "x": ' + str(x*40) + ', "y": ' + str(y*40) + ' }, "color": "#FF0000" },')
            if r != 255 and g == 255 and b != 255:
                file.write('{ "x": ' + str(40) + ', "y": ' + str(40) + ', "position": { "x": ' + str(x*40) + ', "y": ' + str(y*40) + ' }, "color": "#00FF00" },')
            if r != 255 and g != 255 and b == 255:
                file.write('{ "x": ' + str(40) + ', "y": ' + str(40) + ', "position": { "x": ' + str(x*40) + ', "y": ' + str(y*40) + ' }, "color": "#0000FF" },')
    print(']}')
    file.write(']}')
    file.close()


pngToJson('grille1.png')
#print('{ "x": 100, "y": 100, "position": { "x": 200, "y": 200 }, "color": "#000000" }')