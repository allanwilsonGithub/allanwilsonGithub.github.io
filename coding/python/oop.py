# A class is a template for creating objects
# An object is an instance of a class
# Instantiate: create an instance of a class
# Method: a function called in a class
# Attribute: a variable bound to a class instance


class Kettle(object):

    def __init__(self, make, price):
        self.make = make
        self.price = price
        self.on = False


kenwood = Kettle("Kenwood", 8.99)
print(kenwood.make)
print(kenwood.price)

kenwood.price = 12.75
print(kenwood.price)

hamilton = Kettle("Hamilton", 14.55)

print("Models: {} = {}, {} = {}".format(kenwood.make, kenwood.price, hamilton.make, hamilton.price))

print("Models: {0.make} = {0.price}, {1.make} = {1.price}".format(kenwood, hamilton))


class Movie(object):

    def __init__(self, title, year, actor):
        self.title = title
        self.year = year
        self.actor = actor


jaws = Movie('Jaws', 1975, 'Roy Schneider')
alien = Movie('Alien', 1979, 'Sigourny Weaver')
the_blues_brothers = Movie('The Blues Brothers', 1980, 'Jim Belushi')

movies = [jaws, alien, the_blues_brothers]


def describe_movie(name):
    print("'{0.title}' was made in {0.year} and starred {0.actor}".format(name))


for i in movies:
    describe_movie(i)
