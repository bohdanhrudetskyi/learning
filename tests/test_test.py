import unittest

class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)

if __name__ == '__main__':
    unittest.main()
# temperature = float(input('What is a temperature today? '))

# if temperature > 30:
#     print("It's hot today")
# elif temperature > 20:   # (20 , 30]
#     print("That's a good day")
# elif temperature > 10: # (10, 20]
#     print("It's a little bit cold")
# else:
#     print("This day is a cold day")
# print ("Done")

# i = 1
# j = 9
# while i <= 10:
#     print((j * ' ') + (i * '*') + ((i - 1) * "*"))
#     i += 1
#     j -= 1