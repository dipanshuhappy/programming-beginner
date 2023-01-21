# Question 1:

Create a class named 'Student' with a name, roll no. and an array of grades. Print the student details.
GPA is average rounded to 2 decimal places.

```python
class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll = roll_no

    def setGrades(self, grades):
        self.grades = grades

    def calcGPA(self):
        self.gpa = round(sum(self.grades) / len(grades) / 10, 2)

    def getDetails(self):
        self.calcGPA()
        print("Name:", self.name)
        print("Roll no:", self.roll)
        print("GPA:", self.gpa)

name = input()
roll = int(input())
grades = list(map(int, input().split()))
s1 = Student(name, roll)
s1.setGrades(grades)
s1.getDetails()
```

Testcase 1:\
Input:

> Rahul\
> 20\
> 80 90 100 89 29

Output:

> Name: Rahul\
> Roll no: 20\
> GPA: 7.76

Testcase 2:\
Input:

> Kunal\
> 34\
> 80 90 90 100 80

Output:

> Name: Kunal\
> Roll no: 34\
> GPA: 8.8

Testcase 3:\
Input:

> Shivani\
> 14\
> 90 90 100 89 91 92

Output:

> Name: Shivani\
> Roll no: 14\
> GPA: 9.2

# Question 2:

In a family there are 4 members John, Ram, Dolly, Kaira of age 36, 5, 8, 32 respectively and they went for the outing after the pandemic is over. They all decided to go to the theater to watch Movie but in the theater at a time only one can allowed to enter with a unique no provided to them in a series of 1,2,3,4. So help the theater staff with a python program using an Object and Class in python in a way that when they provide a number the authorized person details will be displayed

```python
class member():
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def output(self):
        print(self.name)
        print(self.age)

# All members
m1 = member('John', 36)
m2 = member('Ram', 5)
m3 = member('Dolly', 8)
m4 = member('Kaira', 32)
members = [m1,m2,m3,m4]

# Output
n = int(input()) - 1
members[n].output()
```

Testcase 1:\
Input:

> 2

Output:

> Ram\
> 5

Testcase 2:\
Input:

> 4

Output:

> Kaira\
> 32

Testcase 3:\
Input:

> 1

Output:

> John\
> 36

Testcase 4:\
Input:

> 3

Output:

> Dolly\
> 8

# Question 3:

Define a class “Vehicle” that uses init method to initialize the name, model and speed of a bus.

Vehicle has two methods accel() to calculate acceleration and break() to calculate the number of breaks, that takes the value speed from init method.

accel() returns the Vehicle.speed+70 whereas brakes() returns Vehicle.speed-20.

Create an object of class Vehicle to call the accel() and brakes() methods.

```python
class Vehicle:
    def __init__(self, name, model, speed):
        self.name = name
        self.model = model
        self.speed = speed
    def accel(self):
        self.accel = self.speed + 70
        return self.accel
    def brake(self):
        self.brake = self.speed - 20
        return self.brake

name, model, speed = input(),input(),int(input())
v1 = Vehicle(name, model, speed)
print('Acceleration is ',v1.accel())
print('Brakes is',v1.brake())
```

Testcase 1:\
Input:

> Tata\
> Cityride Skool\
> 100

Output:

> Acceleration is 170\
> Brakes is 80

Testcase 2:\
Input:

> Tata\
> Starbus Ultra Skool\
> 50

Output:

> Acceleration is 120\
> Brakes is 30

Testcase 3:\
Input:

> Tata\
> AONE Skool\
> 70
> Output:
> Acceleration is 140\
> Brakes is 50

# Question 4:

Create a class test with single method AtoB() that returns a^b. Create an object of class Solve and call the power method using the object.

```python
class solve:
    def AtoB(self, A, B):
        print('result is:', A**B)

A, B = int(input()), int(input())
q = solve()
q.AtoB(A, B)
```

Testcase 1:\
Input:

> \
> 3

Output:

> result is: 125

Testcase 2:\
Input:

> 7\
> 3

Output:

> result is: 343

Testcase 3:\
Input:

> 4\
> 7

Output:

> result is: 16384

# Question 5

Create a class with single method division() that returns the division of two numbers. Print the output in integer.

```python
class solve:
    def division(self, Dividend, Divisor):
        print('result is:',Dividend // Divisor)

Dividend, Divisor, Q = int(input()), int(input()), solve()
Q.division(Dividend, Divisor)
```

Testcase 1:\
Input:

> 10\
> 3

Output:

> result is: 3

Testcase 2:\
Input:

> 15\
> 5

Output:

> result is: 3

Testcase 3:\
Input:

> 15\
> 10

Output:

> result is: 1

# Question 6

Define a class “session” that has the following features:

Initializes the name, branch, registration id of two students. (b) Has a method details() which prints the details of both students. (c) Create an object of the class batch and call the details() method to print the details of the students.

```python
class session:
    def __init__(self, name, branch, reg_id):
        self.name = name
        self.branch = branch
        self.reg = reg_id
    def details(self):
        return f'{self.name} {self.branch} {self.reg}'

n1, b1, r1 = input(), input(), input()
S1 = session(n1, b1, r1)
print('student 1 is', S1.details())

n2, b2, r2 = input(), input(), input()
S2 = session(n2, b2, r2)
print('student 2 is', S2.details())
```

Testcase 1:\
Input:

> Siya\
> BT\
> 123\
> Rohan\
> EC\
> 456

Output:

> student 1 is Siya BT 123\
> student 2 is Rohan EC 456

Testcase 2:\
Input:

> Abhishek \
> CSE \
> E20ECSE203 \
> Bhavna \
> Bio \
> E20BIO412

Output:

> student 1 is Abhishek CSE E20ECSE203 \
> student 2 is Bhavna Bio E20BIO412

# Question 7

Rajiv is working in a company. He is a programmer that needs to create a class Hide which can access the hidden element outside the class using the object of Hide method.

```python
class Hide:
    def access(self):
        self.hide = input()
        print(self.hide)

Q = Hide()
Q.access()
```

Testcase 1:\
Input:

> I am stalker

Output:

> I am stalker

Testcase 2:\
Input:

> I am in CSE

Output:

> I am in CSE

Testcase 3:\
Input:

> Always be Happy in any Condition of Life.

Output:

> Always be Happy in any Condition of Life.

# Question 8

Define a class LWR that uses init method to initialize the length(l), width(w) and radius(r) of square, rectangle and circle respectively. Also defines three methods arsquare(), arrectangle() and arcircle() that takes the values of l,w,r from init method and calculate the respective area. Create an object of class shapes to call the methods defined in class shapes.

```python
class LWR:
    def __init__(self):
        self.length = int(input())
        self.width = int(input())
        self.radius = int(input())
    def arsquare(self):
        return self.length**2
    def arrectangle(self):
        return self.length * self.width
    def arcircle(self):
        return 3.14*self.radius**2

lwr = LWR()
print('Area of Square',lwr.arsquare())
print('Area of Rectangle',lwr.arrectangle())
print('Area of Circle', lwr.arcircle())
```

Testcase 1:\
Input:

> 2\
> 3\
> 4

Output:

> Area of Square 4\
> Area of Rectangle 6\
> Area of Circle 50.24

Testcase 2:\
Input:

> 4\
> 2\
> 3

Output:

> Area of Square 16\
> Area of Rectangle 8\
> Area of Circle 28.26

Testcase 3:\
Input:

> 5\
> 10\
> 32

Output:

> Area of Square 25\
> Area of Rectangle 50\
> Area of Circle 3215.36

# Question 9

Write a class Individual with following features:\
Class Individual has a init method that initializes name of the person.\
Class Individual has a person method which prints the name of the Person.\
Call person method by creating an object of Person Class.

```python
class Individual:
    def __init__(self):
        self.name = input()
    def person(self):
        print('Hello, my name is',self.name)

S = Individual()
S.person()
```

Testcase 1:\
Input:

> Bennett

Output:

> Hello, my name is Bennett

Testcase 2:\
Input:

> Sultan

Output:

> Hello, my name is Sultan

Testcase 3:\
Input:

> Bonnie

Output:

> Hello, my name is Bonnie

# Question 10

Define a class person which contains name, age and gender as data members. Inherit class teacher from person with additional data members as total experience and subject of specialization. Also inherit a class student from person with additional data members branch and marks. Input all the details along with choice to create teacher and student class objects, initialize and display the details. Choice 1 should be entered for teacher class object and 2 for student class object.

```python
class person:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

class teacher(person):
    def __init__(self, name, age, gender, exp, spec):
        person.__init__(self, name, age, gender)
        self.exp = exp
        self.spec = spec
    def display(self):
        print('Displaying the details of a teacher...')
        print(f'{self.name}\n{self.age}\n{self.gender}\n{self.exp}\n{self.spec}')

class student(person):
    def __init__(self, name, age, gender, branch, marks):
        person.__init__(self, name, age, gender)
        self.branch = branch
        self.marks = marks

    def display(self):
        print('Displaying the details of a student...')
        print(f'{self.name}\n{self.age}\n{self.gender}\n{self.branch}\n{self.marks}')

choice = int(input())-1
if choice:
    name, age, gender, branch, marks = input(), int(input()), input(), input(), float(eval(input()))
    A = student(name, age, gender, branch, marks)
    A.display()
else:
    name, age, gender, exp, spec = input(), int(input()), input(), float(eval(input())), input()
    A = teacher(name, age, gender, exp, spec)
    A.display()
```

Testcase 1:\
Input:

> 1\
> Himansu\
> 33\
> Male\
> 10\
> Python

Output:

> Displaying the details of a teacher...\
> Himansu\
> 33\
> Male\
> 10.0\
> Python

Testcase 2:\
Input:

> 2\
> Ramesh\
> 22\
> Male\
> CSE\
> 7.8

Output:

> Displaying the details of a student...\
> Ramesh\
> 22\
> Male\
> CSE\
> 7.8

# Question 11

The book class contains data members as name of the book, author name, price. The book is available in both hard cover and softcopy for which two different classes are inherited from book. The hardcopy contains additional data member pages and softcopy contains additional data member size (in MB). Depending on user input (choice 1 for hardcover 2 for softcopy) create hardcover book or softcopy book objects, initialize and display the details.

```python
class Book:
    def __init__(self, name, author, price):
        self.name = name
        self.author = author
        self.price = price

class SoftCopy(Book):
    def __init__(self, name, author, price, size):
        Book.__init__(self, name, author, price)
        self.size = size+'MB'
    def display(self):
        print('Details of Softcopy of Book')
        print(f'{self.name}\n{self.author}\n{self.price}\n{self.size}')

class HardCover(Book):
    def __init__(self, name, author, price, pages):
        Book.__init__(self, name, author, price)
        self.pages = pages
    def display(self):
        print('Details of Hardcover Book')
        print(f'{self.name}\n{self.author}\n{self.price}\n{self.pages}')

choice = int(input()) - 1
if choice:
    name, author, price, size = input(), input(), input(), input()
    B = SoftCopy(name, author, price, size)
    B.display()
else:
    name, author, price, pages = input(), input(), input(), input()
    B = HardCover(name, author, price, pages)
    B.display()
```

Testcase 1:\
Input:

> 1\
> C++ programming\
> E Balaguruswami\
> 430\
> 652

Output:

> Details of Hardcover Book\
> C++ programming\
> E Balaguruswami\
> 430\
> 652

Testcase 2:\
Input:

> 2\
> C++ programming\
> E Balaguruswami\
> 280\
> 4.2

Output:

> Details of Softcopy of Book\
> C++ programming\
> E Balaguruswami\
> 280\
> 4.2MB

# Question 12

Create a class employee with name and employee id as data members. Create another class department with department name as data member. Inherit a class HOD from employee and department. Create a HOD class object and display the details of the department HOD.

```python
class Employee:
    def __init__(self, name, emp_id):
        self.name = name
        self.emp_id = emp_id

class Department:
    def __init__(self, dept_name):
        self.dept_name = dept_name

class HOD(Employee, Department):
    def __init__(self, name, emp_id, dept_name):
        Employee.__init__(self, name, emp_id)
        Department.__init__(self, dept_name)

    def display(self):
        print(f'Department: {self.dept_name}\n'
              f'The HOD Detials....\n'
              f'Name: {self.name}\n'
              f'Employee id: {self.emp_id}')

name, emp_id, dept = input(), input(), input()
A = HOD(name, emp_id, dept)
A.display()
```

Testcase 1:\
Input:

> Dr Deepak\
> 001\
> CSE

Output:

> Department: CSE\
> The HOD Detials....\
> Name: Dr Deepak\
> Employee id: 001

Testcase 2:\
Input:

> Ranjit\
> 107\
> ECE

Output:

> Department: ECE\
> The HOD Detials....\
> Name: Ranjit\
> Employee id: 107

# Question 13

Create a class student to store the name of the student. Inherit two classes from student, the first class stores the academic score of the student and the second class stores the extra-curricular score of the student. Derive a class result from academic score and extra-curricular class. Display the final result by taking the 80 percent from academic score and 20 percent from the extra-curricular.

```python
class student:
    def __init__(self, name):
        self.name = name

class scores(student):
    def __init__(self, name, score):
        student.__init__(self, name)
        self.score = score

class CCA(student):
    def __init__(self, name, ECA):
        student.__init__(self, name)
        self.ECA = ECA

class final_scores(scores, CCA):
    def __init__(self, name, score, ECA):
        scores.__init__(self, name, score)
        CCA.__init__(self, name, ECA)

    def result(self):
        self.final = 0.8 * self.score + 0.2 * self.ECA
        print(f'Name: {self.name}\n'
              f'Academic Score: {self.score}\n'
              f'Extra Curricular score: {self.ECA}\n'
              f'Result: {self.final}')

name, score, ECA = input(), float(input()), float(input())
A = final_scores(name, score, ECA)
A.result()
```

Testcase 1:\
Input:

> Himansu\
> 75.2\
> 88.6

Output:

> Name: Himansu\
> Academic Score: 75.2\
> Extra Curricular score: 88.6\
> Result: 77.88

Testcase 2:\
Input:

> Bidhan\
> 80\
> 67

Output:

> Name: Bidhan\
> Academic Score: 80.0\
> Extra Curricular score: 67.0\
> Result: 77.4

# Question 14

Create a class named “Compute” with a method “area” that calculates the area of a shape based on the dimensions supplied to the method. Take three types of user inputs:
If the inputs supplied are ‘a’ and ‘b’, then it must be identified as rectangle shape and area would be a _ b.
If only one input is supplied, the shape is identified as an square for which area would be a _ a.
If no input supplied, it must return 0.

```python
class Compute:
    def area(self,n, inp_tup):
        if n == 1:
            self.a = self.b = inp_tup
        elif n == 2:
            self.a, self.b = inp_tup[0], inp_tup[1]
        elif n > 2:
            return print('Invalid Inputs')
        self.A = self.a * self.b
        return print(self.A)

try:
    n = int(input())
    inp_tuple = eval(input())
    Compute().area(n, inp_tuple)
except:
    print('0')

```

Testcase 1:\
Input:

> 1\
> 9

Output:

> 81

Testcase 2:\
Input:

> 2\
> 10,6

Output:

> 60

Testcase 3:\
Input:

>

Output:

> 0

Testcase 4:\
Input:

> 3\
> 1,2,3

Output:

> Invalid Inputs

# Question 15

Create two classes “Rectangle” and “Circle” with the same two methods “perimeter” and “area” to compute perimeter and area of the shapes. Use constructors to initialize the inputs that are taken by the users. Now, create two objects, one with each class and calculate the perimeter and area of the shapes with the given user inputs [circle results up to 3 decimal places].

```python
from math import pi
class Rectangle:
    def __init__(self, l, w):
        self.l = l
        self.w = w
    def perimeter(self):
        self.p = 2*(self.l + self.w)
        print(f'Perimeter of Rectangle is: {self.p}')
    def area(self):
        self.A = self.l * self.w
        print(f'Area of Rectangle is: {self.A}')
    def display(self):
        self.perimeter()
        self.area()


class Cirle:
    def __init__(self, r):
        self.r = r
    def perimeter(self):
        self.p = round(2 * pi * self.r, 3)
        print(f'Perimeter of Circle is: {self.p}')
    def area(self):
        self.A = round(pi * self.r**2, 3)
        print(f'Area of Circle is: {self.A}')
    def display(self):
        self.perimeter()
        self.area()

length, breadth, radius = int(input()), int(input()), int(input())
Rect1 = Rectangle(length, breadth)
Circle1 = Cirle(radius)
Rect1.display()
Circle1.display()
```

Testcase 1:\
Input:

> 9\
> 7\
> 14

Output:

> Perimeter of Rectangle is: 32\
> Area of Rectangle is: 63\
> Perimeter of Circle is: 87.965\
> Area of Circle is: 615.752

Testcase 2:\
Input:

> 12\
> 20\
> 15

Output:

> Perimeter of Rectangle is: 64\
> Area of Rectangle is: 240\
> Perimeter of Circle is: 94.248\
> Area of Circle is: 706.858

# Question 16

Create a class “Point” to compare the distances of three points from the origin given in the XY-coordinate system. To implement the scenario, override the built-in magic method “** lt **” with own method to check (compare) the magnitude of the three points.

```python
class Point:
    def __init__(self, p):
        # self.p = p
        self.x = p[0]
        self.y = p[1]
        self.d = (self.x**2 + self.y**2)**0.5

    def __lt__(self, other):
        if self.d > other.d:
            print(f'Distance to ({other.x},{other.y}) is less than ({self.x},{self.y})')
        else:
            print(f'Distance to ({self.x},{self.y}) is less than ({other.x},{other.y})')

points = []
for _ in range(3):
    point = (int(input()), int(input()))
    points.append(point)

A = Point(points[0])
B = Point(points[1])
C = Point(points[2])

A.__lt__(B)
C.__lt__(A)
B.__lt__(C)
```

Testcase 1:\
Input:

> -8\
> 2\
> 6\
> 7\
> 1\
> 9

Output:

> Distance to (-8,2) is less than (6,7)\
> Distance to (-8,2) is less than (1,9)\
> Distance to (1,9) is less than (6,7)

Testcase 2:\
Input:

> -2\
> -5\
> -9\
> -8\
> -6\
> -3

Output:

> Distance to (-2,-5) is less than (-9,-8)\
> Distance to (-2,-5) is less than (-6,-3)\
> Distance to (-6,-3) is less than (-9,-8)

# Question 17

Define a class Pattern which has a method displayPattern with signature displayPattern(self, n=5, char=’@’). First, we want to display the triangle of 5 lines with character ‘@’, second, we want display the triangle of user-defined n lines with character '@’, and third, we want to display the triangle of n lines with ‘char’ character. To demonstrate the same, in python program, first you take the choice from the user, e.g., 1 for displaying triangle with first signature, 2 for displaying the triangle with second signature, and 3 for displaying triangle with third signature.Display the triangles by each signature with Pattern class object.

```python
class Pattern:
    def __init__(self, n = 5, char = '@'):
        self.n = n
        self.char = char

    def displayPattern(self):
        for i in range(self.n):
            print(self.char * (i+1))

sig = int(input())
try:
    n = int(input())
    char = input()
    P = Pattern(n, char)
except:
    if sig == 2:
        P = Pattern(n)
    else:
        P = Pattern()
finally:
    P.displayPattern()
```

Testcase 1:\
Input:

> 1

Output:

> @\
> @@\
> @@@\
> @@@@\
> @@@@@

Testcase 2:\
Input:

> 2\
> 4

Output:

> @\
> @@\
> @@@\
> @@@@

Testcase 3:\
Input:

> 3\
> 4\
> &

Output:

> &\
> &&\
> &&&\
> &&&&

# Question 18

Define a class Comparison with one data member and then overload three operators ‘>’, ‘<’, and ‘==’ using their magic methods **gt**, **lt**, and **eq**, respectively. Create two objects of Comparison class and compare them with comparison operator.

```python
class Comparison:
    def __init__(self, n):
        self.n = n

    def __gt__(self, other):
        if self.n > other.n:
            print('Ob1 is greater than Ob2')
        else:
            print('Ob1 is not greater than Ob2')

    def __lt__(self, other):
        if self.n < other.n:
            print('Ob1 is less than Ob2')
        else:
            print('Ob1 is not less than Ob2')

    def __eq__(self, other):
        if self.n == other.n:
            print('Ob1 is equal to Ob2')
        else:
            print('Ob1 is not equal to Ob2')


Ob1 = Comparison(eval(input()))
Ob2 = Comparison(eval(input()))
Ob1 > Ob2
Ob1 < Ob2
Ob1 == Ob2
```

Testcase 1:\
Input:

> 5\
> 5

Output:

> Ob1 is not greater than Ob2\
> Ob1 is not less than Ob2\
> Ob1 is equal to Ob2

Testcase 2:\
Input:

> 10\
> 12

Output:

> Ob1 is not greater than Ob1\
> Ob1 is less than Ob2\
> Ob1 is not equal to Ob2

Testcase 3:\
Input:

> 3.5\
> 4

Output:

> Ob1 is not greater than Ob1\
> Ob1 is less than Ob2\
> Ob1 is not equal to Ob2

# Question 19

Define a class Alumni (parent class) and initialize the year, name of a student, and course pass out year. Define a class Passout, which is a child class and inherits the attributes of the alumni and prints the year, name of student and course name that pass out in that year.

```python
class Alumni:
    def __init__(self, year, name, course):
        self.year = year
        self.name = name
        self.course = course

class Passout(Alumni):
    def __init__(self, year, name, course):
        super().__init__(year, name, course)
    def display(self):
        print('Year:',self.year)
        print('Name of Student:',self.name)
        print('Course:',self.course)

year, name, course = int(input()), input(), input()
A = Passout(year, name, course)
A.display()
```

Testcase 1:\
Input:

> 2011\
> Rahul\
> BTech

Output:

> Year: 2011\
> Name of Student: Rahul\
> Course: BTech

Testcase 2:\
Input:

> 2015\
> Sohan\
> MTech

Output:

> Year: 2015\
> Name of Student: Sohan\
> Course: MTech

Testcase 3:\
Input:

> 2009\
> Jimmi\
> Integrated BTech MTech

Output:

> Year: 2009\
> Name of Student: Jimmi\
> Course: Integrated BTech MTech

# Question 20

Create a class “Base” with two methods namely., “addition” and “subtraction” for addition and subtraction of two integer numbers. Inherit the Base class in another class namely., “Child” that is having its own method “special_multiplication” that evaluates {(x+y)\*(x-y)} where x and y are the two user inputs of integer types. Now, Create a class namely., “Inheritance” containing the main method and users inputs are supplied here. Create the object of the Child class and call the methods of Base and Child class.

```python
class Base:
    def addition(self, x, y):
        return x + y
    def subtraction(self, x, y):
        return x - y

class Child(Base):
    def special_multiplication(self, x, y):
        return self.addition(x, y) * self.subtraction(x, y)

x, y = int(input()), int(input())
sol = Child()
print("Base Addition:", sol.addition(x, y))
print("Base Subtraction:", sol.subtraction(x, y))
print("Child Multiplication:", sol.special_multiplication(x, y))
```

Testcase 1:\
Input:

> 25\
> 12

Output:

> Base Addition: 37\
> Base Subtraction: 13\
> Child Multiplication: 481

Testcase 2:\
Input:

> 237\
> 213

Output:

> Base Addition: 450\
> Base Subtraction: 24\
> Child Multiplication: 10800

Testcase 3:\
Input:

> 12\
> 34

Output:

> Base Addition: 46\
> Base Subtraction: -22\
> Child Multiplication: -1012
