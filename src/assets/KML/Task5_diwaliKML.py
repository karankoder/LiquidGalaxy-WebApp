import random


def generate_random_coords(south, north, west, east, num_points):
    coords = []
    for _ in range(num_points):
        latitude = random.uniform(south, north)
        longitude = random.uniform(west, east)
        coords.append((longitude, latitude))
    return coords


def create_kml(coords):
    kml = """<?xml version="1.0" encoding="UTF-8"?>
    <kml xmlns="http://www.opengis.net/kml/2.2">
      <Document>
    """

    for lon, lat in coords:
        scaled_number = random.uniform(0.7, 0.8)
        opacity = random.randint(0, 255)
        kml += f"""
        <Placemark>
          <Style>
            <IconStyle>
              <scale>{scaled_number}</scale>
              <color>{opacity:02x}8cf9ff</color>
              <Icon>
                <href>http://maps.google.com/mapfiles/kml/shapes/shaded_dot.png</href>
              </Icon>
            </IconStyle>
          </Style>
          <Point>
            <coordinates>{lon},{lat},0</coordinates>
          </Point>
        </Placemark>
        """

    kml += "</Document></kml>"
    return kml


bounding_boxes = [
    (22, 26, 85, 93, 160),  # east
    (30.3, 36, 74, 77.4, 130),  # Kashmir
    (32.7, 35, 77.4, 79, 50),  # right kashmir
    (26.3, 30, 74.4, 80, 220),  # Delhi
    (19.3, 25.4, 73, 84, 140),  # Lower region
    (15.1, 20.2, 73.5, 82, 295),  # upper southen region
    (9, 15, 76, 79, 140),  # lower Southern region
    (21.2, 24, 70, 73, 55),  # gujarat
    (25, 27, 71, 74, 50),  # rajasthan
    (25, 27, 80.6, 84, 20),  # nepal
    (12.6, 14.6, 75, 76.2, 20),
    (6, 9, 80, 82, 40),  # southern tip
    (25, 26.8, 92, 95, 25),  # east
    (19, 21.8, 83.4, 86.5, 25),  # odisha
    (26.7, 28.5, 72.4, 75, 25),  # rajasthan
]


all_coords = []

for bbox in bounding_boxes:
    south, north, west, east, num_points = bbox
    coords = generate_random_coords(south, north, west, east, num_points)
    all_coords.extend(coords)


kml_content = create_kml(all_coords)

with open("diwali_lights.kml", "w") as file:
    file.write(kml_content)

print("KML file generated successfully as 'diwali_lights.kml'")
