class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def calculate_perimeter(self):
        return 2 * (self.width + self.height)

# Instantiate a few rectangles
rectangle1 = Rectangle(4, 5)
rectangle2 = Rectangle(7, 3)
rectangle3 = Rectangle(6, 8)

# Display area and perimeter for each rectangle
print("Rectangle 1 - Width: {}, Height: {}".format(rectangle1.width, rectangle1.height))
print("Area:", rectangle1.calculate_area())
print("Perimeter:", rectangle1.calculate_perimeter())

print("\nRectangle 2 - Width: {}, Height: {}".format(rectangle2.width, rectangle2.height))
print("Area:", rectangle2.calculate_area())
print("Perimeter:", rectangle2.calculate_perimeter())

print("\nRectangle 3 - Width: {}, Height: {}".format(rectangle3.width, rectangle3.height))
print("Area:", rectangle3.calculate_area())
print("Perimeter:", rectangle3.calculate_perimeter())
