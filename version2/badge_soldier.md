# Question 1:

Write a Python program that prompts the user to enter a list of dictionaries, where each dictionary represents a product with the following keys: "name", "quantity", and "price". The program should then print a table with the following columns: "name", "quantity", "price", "total price", and "total quantity". The "total price" column should be the product of the "quantity" and "price" columns, and the "total quantity" column should be the sum of all the "quantity" values. The table should be right-aligned and formatted to display 2 decimal places for all floating point values.

```python
import math

def pretty_print_products(products):
    # Calculate total quantity and total price
    total_quantity = 0
    total_price = 0
    for product in products:
        total_quantity += product['quantity']
        total_price += product['quantity'] * product['price']

    # Print table header
    print(f"{'name':>20} {'quantity':>10} {'price':>10} {'total price':>15} {'total quantity':>20}")

    # Print table rows
    for product in products:
        total_price = product['quantity'] * product['price']
        print(f"{product['name']:>20} {product['quantity']:>10} ${product['price']:>9.2f} ${total_price:>14.2f} {total_quantity:>20}")

```

```python
pretty_print_products([{'name': 'apple', 'quantity': 1, 'price': 0.5}, {'name': 'banana', 'quantity': 2, 'price': 0.25}, {'name': 'cherry', 'quantity': 3, 'price': 0.75}])
# Output:
#                 name     quantity      price     total price     total quantity
#                 apple           1      $0.50       $0.50                  6
#                 banana          2      $0.25       $0.50                  6
#                 cherry          3      $0.75       $2.25                  6

pretty_print_products([{'name': 'dog', 'quantity': 5, 'price': 10.0}, {'name': 'cat', 'quantity': 3, 'price': 15.0}, {'name': 'bird', 'quantity': 2, 'price': 20.0}])
# Output:
#                 name     quantity      price     total price     total quantity
#                 dog            5     $10.00      $50.00                 10
#                 cat            3     $15.00      $45.00                 10
#                 bird           2     $20.00      $40.00                 10

```

# Question 2:

Write a Python program that prompts the user to enter a string and a positive integer n. The program should then print the string n times, with each repetition right-aligned and indented by a multiple of n. For example, if the input string is "Hello" and n is 3, the output should be:

```
                                 Hello
                             Hello
                         Hello

```

```python
import math

def pretty_print_string(string, n):
    # Print string n times, with each repetition right-aligned and indented by a multiple of n
    for i in range(n):
        print(f"{' ' * (n - i - 1) * len(string):>{n * len(string)}}{string}")
```

```python
# Test cases
print(pretty_print_string("Hello", 3)) # Output:
#                                 Hello
#                             Hello
#                         Hello

print(pretty_print_string("Python", 5)) # Output:
#                                         Python
#                                     Python
#                                 Python
#                             Python
#                         Python

print(pretty_print_string("AI", 4)) # Output:
#                                         AI
#                                     AI
#                                 AI
#                             AI

print(pretty_print_string("OpenAI", 2)) # Output:
#                             OpenAI
#                         OpenAI
```

# Question 3

You are given a task to make a simple script in a python backend framework that sends a email to a particular person , with a message that depends on the user inputs . You are given the function , and now you simply need to return a string that represents the final email .
NOTE:
firstName should be title case, lastName should be title case , price should be to two decimal place , subscription should be uppercase ,and the user id should be in double quotes.

```python
def get_email_string(
    firstName:str,
    lastName:str,
    orderId:int,
    userId:int,
    subscription:str,
    price:int,
    validTill:str,
    itemsBrought:list[str] ):
    #write your  line of code in after the return statement
    return “”
if __name__=='__main__':
    print(get_email_string("Dipanshu","Singh",8283213,232132,"Gold",102.390,"Tuesday",["water","life"]))

```

Test Cases:
Input:

> get_email_string("John", "Smith", 123456, 654321, "Bronze", 50.00, "Monday", ["book", "pen"])

Output:

```
Dear John Smith,

Your order with ID 123456 and user ID 654321 for the Bronze subscription, costing $50.00, is valid until Monday.
You have purchased the following items: book, pen.

Thank you for your purchase.

Best regards,
Online Store
```

Input:

> get_email_string("Jane", "Doe", 654321, 123456, "Gold", 100.00, "Wednesday", ["coffee", "mug"])

Output:

```
Dear Jane Doe,

Your order with ID 654321 and user ID 123456 for the Gold subscription, costing $100.00, is valid until Wednesday.
You have purchased the following items: coffee, mug.

Thank you for your purchase.

Best regards,
Online Store
```

<ins>Answer:</ins>

```python
def get_email_string(
    firstName:str,
    lastName:str,
    orderId:int,
    userId:int,
    subscription:str,
    price:int,
    validTill:str,
    itemsBrought:list[str] ):
    #write your one line of code in after the return statement
    items_string = ', '.join(itemsBrought)
    email_string = f"Dear {firstName} {lastName},\n\nYour order with ID {orderId} and user ID {userId} for the {subscription} subscription, costing ${price:.2f}, is valid until {validTill}.\nYou have purchased the following items: {items_string}.\n\nThank you for your purchase.\n\nBest regards,\nOnline Store"
    return email_string


```

# Question 4:

Wap to print the following pattern for general n.
Note: n will only be odd.

```python
#for n=7
*
 * *
   * * *
     * * * *
   * * *
 * *
*
```

Solution:

```python
#solution
num = int(input())
for i in range(1,num+1):
    if i <= round(num/2):
        for j in range(1,i):
            print("",end=" ")
        for j in range(0,i):
            print("*",end=" ")
    else:
        for j in range(1,num-i+1):
            print("",end=" ")
        for j in range(0,num-i+1):
            print("*",end=" ")
    print()
```

Testcase 1:\
Input:

> 3

Output:

```python
*
 * *
*
```

Testcase 2:\
Input:

> 5

Output:

```python
*
 * *
  * * *
 * *
*
```

Testcase 3:\
Input:

> 7

Output:

```python
*
 * *
  * * *
   * * * *
  * * *
 * *
*
```

# Question 5:

Swap an array using Bubble Sort method. Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.

```python
#Solution
def bubbleSort(arr):
    n = len(arr)
    swapped = False
    for i in range(n-1):

        for j in range(0, n-i-1):


            if arr[j] > arr[j + 1]:
                swapped = True
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

        if not swapped:
            return


arr = [64, 34, 25, 12, 22, 11, 90]

bubbleSort(arr)

print("Sorted array is:")
for i in range(len(arr)):
    print("% d" % arr[i], end=" ")
```

Test Case 1:

> Input: arr=[64, 34, 25, 12, 22, 11, 90]

> Output: 11 12 22 25 34 64 90

Test Case 2:

> Input: arr= [0, 69, 7, 19, 56, 62, 99]

> Output: 0 7 19 56 62 69 99

Test Case 3:

> Input: arr = [43, 6, 24, 78, 32, 8]

> Output: 6 8 24 32 43 78

# Question 6:

Write a program which has a user-defined function numer() which take a date of birth as input
and calculate the numerology number using it. Numerology number is calculated by add each digit
of the date of birth and if the sum is a 2-digit number then it again adds its digits again untill
the sum comes to be a single digit number.
Numerology number => 16-09-2002 => 1+6+9+2+2=20 => 2+0=2
Hence the numerology number is 2.

```python
#solution
def numer():
    x=input('Enter the date of birth( dd-mm-yyyy) form: ')
    x=x.split('-')
    s=0;c=0
    for i in x:
        for j in i:
            s+=int(j)
    while(s>9):
        for i in str(s):
            c+=int(i)
        if c>9:
            s=c
            c=0
            continue
        else:
            s=c
    print('Numerology number is: ',s)
numer()
```

Testcase 1:\
Input:

> Enter the date of birth( dd-mm-yyyy) form: 21-11-1981

Output:

> Numerology number is: 6

Testcase 2:\
Input:

> Enter the date of birth( dd-mm-yyyy) form: 14-08-1975

Output:

> Numerology number is: 8

Testcase 3:\
Input:

> Enter the date of birth( dd-mm-yyyy) form: 01-01-1951

Output:

> Numerology number is: 9

# Question 7:

Create a class TextEditor that uses the Command design pattern to keep track of the changes made to a text document. The class should have methods insert_text(position: int, text: str), delete_text(position: int, length: int), and undo() and redo().

## Solution

```python
class TextEditor:
    class InsertCommand:
        def __init__(self, editor, position, text):
            self.editor = editor
            self.position = position
            self.text = text

        def execute(self):
            self.editor.text = self.editor.text[:self.position] + self.text + self.editor.text[self.position:]

    class DeleteCommand:
        def __init__(self, editor, position, length):
            self.editor = editor
            self.position = position
            self.length = length

        def execute(self):
            self.editor.text = self.editor.text[:self.position] + self.editor.text[self.position + self.length:]

    def __init__(self):
        self.text = ""
        self.commands = []
        self.current_position = -1

    def insert_text(self, position, text):
        command = self.InsertCommand(self, position, text)
        command.execute()
        self.commands.append(command)
        self.current_position += 1

    def delete_text(self, position, length):
        command = self.DeleteCommand(self, position, length)
        command.execute()
        self.commands.append(command)
        self.current_position += 1

    def undo(self):
        if self.current_position < 0:
            return
        self.commands[self.current_position].execute()
        self.current_position -= 1

    def redo(self):
        if self.current_position == len(self.commands) - 1:
            return
        self.current_position += 1
        self.commands[self.current_position].execute()



```

Test case 1:

Input:

```
editor = TextEditor()
editor.insert_text(0, "Hello ")
editor.insert_text(6, "world!")
print(editor.text) # "Hello world!"
editor.undo()
print(editor.text) # "Hello "
editor.redo()
print(editor.text) # "Hello world!"
```

Output:

```
Hello world!
Hello
Hello world!
```

Test case 2:

Input:

```
editor = TextEditor()
editor.insert_text(0, "Hello ")
editor.insert_text(6, "world!")
editor.delete_text(5, 6)
print(editor.text) # "Hello"
editor.undo()
print(editor.text) # "Hello world!"
editor.redo()
print(editor.text) # "Hello"
```

Output:

```
Hello
Hello world!
Hello
```

# Question 8

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

# Question 9

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

# Question 10

> Let's say you are an employee of organization. The organization determines the employees' salaries for a 30-days period. If an employee is on leave, the string '0' is used to indicate this. On the other hand, the string "1" is used to indicate that the employee is at work. Every day the employee X works, they are paid S rupees. The bonus is also included with each employee if they work the longest consecutive stretch of days in a given month (i.e., without taking any breaks). For the month's longest workweek, the corporation awards bonus B rupees.

> Your task is to calculate the employee X's salary (including the bonus B).
> Note: Only one longest streak will be counted if there are two or more of the same length.

```
Input:

(1) The first line denotes the number of test cases, T.

(2) Each test case's first line contains the two integers S and B. (S stands for the entire monthly compensation, and B stands for the bonus for the consecutively longest working days during the month.)

(3) The second line is made up of strings of 0s and 1s. (0's indicate a leave of absence, and 1 indicates work).
```

```
Input
2
6000 3000
111100110101100000101100011111
8000 2000
111010111101001010100100111101

Output
117000
152000
```

<ins>Answer:</ins>

```python
def ma(x):
    l1=[]
    k=0
    while k<=(len(x)-1):
        count=0
        # while True:
        for i in range(k,len(x)):
            if x[i]=="1":
                count+=1
                k+=1
            else:
                k+=1
                break
        if count!=0:
            l1.append(count)
    return l1
T=int(input())
L=[]
for i in range(T):
    l=[]
    for j in range(3):
        p=input()
        l.append(p)
    L.append(l)

def sal():
    for j in range(T):
        k=ma(L[j][2])
        b=max(ma(L[j][2]))
        print((int(L[j][0])*sum(k))+(int(L[j][1])*b))
sal()
```
