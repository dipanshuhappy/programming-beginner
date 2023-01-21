# Question 1:

Write a Python class to represent a circle, with attributes for the radius, the color, and a method to calculate the area of the circle.

## Solution

```python
class Circle:
    def init(self, radius, color):
        print(f"Circle object created with radius {radius} and color '{color}'")
        self.radius = radius
        self.color = color


def calculate_area(self):
    return 3.14 * self.radius**2

```

Test case 1:

Input:

> 3
> red

Output:

> Circle object created with radius 3 and color 'red'
> 28.26

Test case 2:

Input:

> 5
> blue

Output:

> Circle object created with radius 5 and color 'blue'
> 78.50

# Question 2:

Define a class `Person` with properties `name` and `age`.
Then print the name and age .

## Solution

```python
class Person:
   def __init__(self, name, age):
       self.name = name
       self.age = age
p = Person(input(),int(input()))
print(p.name)
print(p.age)
```

Test case 1:

Input:

> John
> 30

Output:

> John
> 30

Test case 2:

Input:

> Sol
> 32

Output:

> Sol
> 32

# Question 3:

Define a class `Car` with properties make, model and year. Include a method `get_description()` that returns a string describing the car.

## Solution

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def get_description(self):
        return f"{self.year} {self.make} {self.model}"
```

Test case 1:

Input:

> car = Car("Toyota", "Camry", 2020)
> print(car.get_description())

Output:

> 2020 Toyota Camry

Test case 2:

Input:

> car = Car("T", "C", 2021)
> print(car.get_description())

Output:

> 2021 T C

# Question 4:

Define a class BankAccount with properties name, balance and method deposit(amount) and withdraw(amount)

## Solution

```python
class BankAccount:
    def __init__(self,name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient balance"
        self.balance -= amount
        return self.balance
```

Test case 1:

Input:

> account = BankAccount("John", 1000)
> print(account.deposit(100))
> print(account.withdraw(200))

Output:

> 1100
> 900

Test case 2:

Input:

> account = BankAccount("Mike", 500)
> print(account.deposit(200))
> print(account.withdraw(800))

Output:

> 700
> Insufficient balance

# Question 5:

Define a class Student with properties name, roll_no, age and method display() to display these properties.

## Solution

```python
class Student:
    def __init__(self, name, roll_no, age):
        self.name = name
        self.roll_no = roll_no
        self.age = age
    def display(self):
        return f"Name: {self.name}, Roll No: {self.roll_no}, Age: {self.age}"

```

Test case 1:

Input:

> s = Student("John", "1234", 20)
> print(s.display())

Output:

> Name: John, Roll No: 1234, Age: 20

Test case 2:

Input:

> s = Student("Mike", "5678", 22)
> print(s.display())

Output:

> Name: Mike, Roll No: 5678, Age: 22

# Question 6:

Create a factory class CarFactory that has a method create_car(car_type: str) -> Car that returns a car object based on the car type passed in. The class should be able to create objects of classes Sedan and SUV.

## Solution

```python
class Car:
    def __init__(self, car_type):
        self.car_type = car_type
    def drive(self):
        pass

class Sedan(Car):
    def drive(self):
        return "Driving Sedan"

class SUV(Car):
    def drive(self):
        return "Driving SUV"

class CarFactory:
    @staticmethod
    def create_car(car_type: str) -> Car:
        if car_type == "Sedan":
            return Sedan(car_type)
        elif car_type == "SUV":
            return SUV(car_type)
        raise ValueError("Invalid car type")

factory = CarFactory()
car1 = factory.create_car(input())
print(car1.drive())

```

Test case 1:

Input:

> Sedan

Output:

> Driving Sedan

Test case 2:

Input:

> SUV

Output:

> Driving SUV

# Question 7:

Create a decorator class `validate_input` that takes in a function as an argument and validates the input to the function. The decorator should check if the input is a positive number and return an error message if it is not.

## Solution

```python
class validate_input:
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        if all(isinstance(i, (int, float)) and i > 0 for i in args):
            return self.func(*args, **kwargs)
        return "Invalid input. Only positive numbers are allowed."

@validate_input
def calculate_area(length, width):
    return length * width


```

Test case 1:

Input:

> 4 5

Output:

> 20

Test case 2:

Input:

> -4 5

Output:

> Invalid input. Only positive numbers are allowed.

# Question 8:

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

# Question 9:

Create a class Queue that implements a queue data structure using a Python list. The class should have methods enqueue(item: int), dequeue(), and is_empty().

## Solution

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item: int):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        return None

    def is_empty(self):
        return len(self.items) == 0

```

Test case 1:

Input:

```
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print(q.dequeue()) # 1
print(q.dequeue()) # 2

```

Output:

```
1
2
```

Test case 2:

Input:

```
q = Queue()
q.enqueue(4)
q.enqueue(3)
q.enqueue(1)
print(q.dequeue()) # 4
print(q.dequeue()) # 3
```

Output:

```
4
3
```

# Question 10:

Create a class Stack that implements a stack data structure using a Python list. The class should have methods push(item: int), pop(), and is_empty().

## Solution

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item: int):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def is_empty(self):
        return len(self.items) == 0


```

Test case 1:

Input:

```
s = Stack()
s.push(1)
s.push(2)
s.push(3)
print(s.pop()) # 3
print(s.pop()) # 2

```

Output:

```
3
2
```

Test case 2:

Input:

```
s = Stack()
print(s.pop()) # None
s.push(4)
s.push(5)
print(s.pop()) # 5
print(s.is_empty()) # False
```

Output:

```
None
5
False

```

# Question 11:

Q: Create a class LinkedList that implements a singly linked list data structure. The class should have methods `add_node(data: int), delete_node(data: int), search_node(data: int), print_list()`.

## Solution

```python
class Node:
    def __init__(self, data: int):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add_node(self, data: int):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete_node(self, data: int):
        if self.head is None:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next is not None:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search_node(self, data: int):
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def print_list(self):
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next



```

Test case 1:

Input:

```
ll = LinkedList()
ll.add_node(1)
ll.add_node(2)
ll.add_node(3)
ll.print_list()
# Output: 3
#         2
#         1


```

Output:

```
3
2
1
```

Test case 2:

Input:

```
ll = LinkedList()
ll.add_node(1)
ll.add_node(2)
ll.add_node(3)
ll.delete_node(2)
print(ll.search_node(2)) # False
ll.print_list()
# Output: 3
#         1

```

Output:

```
False
3
1
```

# Question 12:

Create a class Person with attributes name, age, and gender. Implement a method is_adult() that returns True if the person's age is 18 or greater, and False otherwise.

## Solution

```python
class Person:
    def __init__(self, name: str, age: int, gender: str):
        self.name = name
        self.age = age
        self.gender = gender

    def is_adult(self):
        return self.age >= 18

```

Test case 1:

Input:

```
person1 = Person("John", 20, "Male")
print(person1.is_adult()) # True

```

Output:

```
True
```

Test case 2:

Input:

```
person2 = Person("Sara", 17, "Female")
print(person2.is_adult()) # False

```

Output:

```
False
```

# Question 13:

Create a class Rectangle with attributes length and width. Implement methods area() and perimeter() that return the area and perimeter of the rectangle respectively.

## Solution

```python
class Rectangle:
    def __init__(self, length: int, width: int):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


```

Test case 1:

Input:

```
rect1 = Rectangle(5, 10)
print(rect1.area()) # 50
print(rect1.perimeter()) # 30

```

Output:

```
50
30
```

Test case 2:

Input:

```
rect2 = Rectangle(8, 2)
print(rect2.area()) # 16
print(rect2.perimeter()) # 20


```

Output:

```
16
20

```

# Question 14:

Write a program which has a class named pal and has a method check() which takes a number as attribute and check whether
the number is palprime or not. Palprime is a number which is both prime and pallindrome.

```python
#solution
class pal():
    def __init__(self,a):
        self.a=a
    def check(self):
        c=0
        for i in range(2,self.a):
            if (self.a)%i==0:
                c+=1
        if c==0 and str(self.a)==(str(self.a)[::-1]):
            return True
        else:
            return False
num=int(input("Enter the number: "))
ans=bool
x=pal(num)
ans=x.check()
print(ans)
```

Testcase 1:\
Input:

> Enter the number: 11

Output:

> True

Testcase 2:\
Input:

> Enter the number: 17

Output:

> False

Testcase 3:\
Input:

> Enter the number: 101

Output:

> True

# Question 15:

Write a program which has a class named convert and that has a method named octa which takes a binary
number as input and convert it to octal number and return it.

```python
#solution
class convert():
    def __init__(self,a):
        self.a=a
    def octa(self):
        self.a=(self.a)[::-1]
        s=0;c=0;l=len(self.a);o=''
        for i in self.a:
            s+=int(i)*(2**c)
            c+=1
            l-=1
            if c==3:
                o+=str(s)
                s=0
                c=0
            if c!=3 and l==0:
                o+=str(s)
        return o
num=input("Enter the binary number: ")
obj=convert(num)
o=str
o=obj.octa()
print('Octal number: ',int(o[::-1]))
```

Testcase 1:\
Input:

> Enter the binary number: 1111

Output:

> Octal number: 17

Testcase 2:\
Input:

> Enter the binary number: 101011

Output:

> Octal number: 53

Testcase 3:\
Input:

> Enter the binary number: 11111010

Output:

> Octal number: 372

# Question 16:

Write a program which has a class which has a class named tp and that has a method named check which takes a number as
input and check whether it is twisted prime or not. Twisted prime is a number which is prime itself and when it is
reversed too.

```python
#solution
class tp():
    def __init__(self,a):
        self.a=a
    def check(self):
        c=0;d=0
        for i in range(2,self.a):
            if self.a%i==0:
                c+=1
        x=int(str(self.a)[::-1])
        for i in range(2,x):
            if x%i==0:
                d+=1
        if c==0 and d==0:
            return True
        else:
            return False
num=int(input("Enter the binary number: "))
obj=tp(num)
o=bool
o=obj.check()
if o==True:
    print('Twisted prime')
else:
    print('Not twisted prime')
```

Testcase 1:\
Input:

> Enter the binary number: 167

Output:

> Twisted prime

Testcase 2:\
Input:

> Enter the binary number: 59

Output:

> Not twisted prime

Testcase 3:\
Input:

> Enter the binary number: 37

Output:

> Twisted prime

# Question 17:

Write a program which has a class named fun which has a named add which takes two list of numbers separated by spaces
and then add them and return the sum. The list of the numbers should be taken as
a number as it is according to position. Example:-
a=[4,6,3,2,9];b=[1,3,5,6]\
sum=47685

```python
#solution
class fun():
    def __init__(self,a,b):
        self.a=a
        self.b=b
    def add(self):
        x=self.a[::-1]
        y=self.b[::-1]
        n1=0;n2=0;s=0
        for i in range(len(x)):
            n1+=int(x[i])*(10**i)
        for i in range(len(y)):
            n2+=int(y[i])*(10**i)
        s=n1+n2
        return s
l1=input('Enter the first list of numbers separated by spaces: ').split()
l2=input('Enter the second list of numbers separated by spaces: ').split()
obj=fun(l1,l2)
x=obj.add()
print('Sum is: ',x)
```

Testcase 1:\
Input:

> Enter the first list of numbers separated by spaces: 4 6 3 2 9\
> Enter the second list of numbers separated by spaces: 1 3 5 6

Output:

> Sum is: 47685

Testcase 2:\
Input:

> Enter the first list of numbers separated by spaces: 8 9 7 5 6\
> Enter the second list of numbers separated by spaces: 5 2 4 8 2 6

Output:

> Sum is: 614582

Testcase 3:\
Input:

> Enter the first list of numbers separated by spaces: 9 8 7 0 5\
> Enter the second list of numbers separated by spaces: 6 3 6 9 2 0

Output:

> Sum is: 735625

# Question 18:

Write a program which has a class named caps which has a method do() which takes a string and converts first letter of
each word of the string to capital.

```
#solution
class caps():
    def __init__(self,a):
        self.a=a
    def do(self):
        return (self.a).title()

sr=input('Enter the string: ')
obj=caps(sr)
x=obj.do()
print(x)
```

Testcase 1:\
Input:

> Enter the string: please Do me a favour.

Output:

> Please Do Me A Favour.

Testcase 2:\
Input:

> Enter the string: finally, it is done now.

Output:

> Finally, It Is Done Now.

Testcase 3:\
Input:

> Enter the string: i

Output:

> I

# Question 19:

Write a Python program to find the size of a singly linked list.

```python
class Node:
    # Singly linked node
    def __init__(self, data=None):
        self.data = data
        self.next = None
class singly_linked_list:
    def __init__(self):
        # Createe an empty list
        self.tail = None
        self.head = None
        self.count = 0

    def append_item(self, data):
        #Append items on the list
        node = Node(data)
        if self.head:
            self.head.next = node
            self.head = node
        else:
            self.tail = node
            self.head = node
        self.count += 1

    def iterate_item(self):
        # Iterate the list.
        current_item = self.tail
        while current_item:
            val = current_item.data
            current_item = current_item.next
            yield val

items = singly_linked_list()
items.append_item('PHP')
items.append_item('Python')
items.append_item('C#')
items.append_item('C++')
items.append_item('Java')

print("Original list:")
for val in items.iterate_item():
    print(val)

print("\nSize of the list:",items.count)
```

Test case:

> Input: PHP<br>Python <br>C#<br> C++ <br> Java

> Output: Size of the list: 5

Test case 2:

> Input: Apple<br> Mango<br> Pineapple

> Output: Size of the list: 3

# Question 20:

Write a Python program to search a specific item in a singly linked list and return true if the item is found otherwise return false.

```python
#Solution
class Node:
    # Singly linked node
    def __init__(self, data=None):
        self.data = data
        self.next = None
class singly_linked_list:
    def __init__(self):
        # Createe an empty list
        self.tail = None
        self.head = None
        self.count = 0

    def append_item(self, data):
        #Append items on the list
        node = Node(data)
        if self.head:
            self.head.next = node
            self.head = node
        else:
            self.tail = node
            self.head = node
        self.count += 1

    def iterate_item(self):
        # Iterate the list.
        current_item = self.tail
        while current_item:
            val = current_item.data
            current_item = current_item.next
            yield val

    def search_item(self, val):
         # Search the list
         for node in self.iterate_item():
             if val == node:
                 return True
         return False

items = singly_linked_list()
items.append_item('PHP')
items.append_item('Python')
items.append_item('C#')
items.append_item('C++')
items.append_item('Java')

a=input("Enter the Item to find: ")
if items.search_item(a):
    print("True")
else:
    print("False")
```

Test case 1:

> Input: Enter the Item to find: SQL

> Output: False

Test case 2:

> Input: Enter the Item to find: Java

> Output: True

# Question 21:

Write a Python program to access a specific item in a singly linked list using index value.

```Python
#Solution
class Node:
    # Singly linked node
    def __init__(self, data=None):
        self.data = data
        self.next = None
class singly_linked_list:
    def __init__(self):
        # Createe an empty list
        self.tail = None
        self.head = None
        self.count = 0

    def append_item(self, data):
        #Append items on the list
        node = Node(data)
        if self.head:
            self.head.next = node
            self.head = node
        else:
            self.tail = node
            self.head = node
        self.count += 1

    def __getitem__(self, index):
        if index > self.count - 1:
            return "Index out of range"
        current_val = self.tail
        for n in range(index):
            current_val = current_val.next
        return current_val.data


items = singly_linked_list()
items.append_item('PHP')
items.append_item('Python')
items.append_item('C#')
items.append_item('C++')
items.append_item('Java')

n=int(input("Enter the Index to search: "))
print("The element at Index",n,"is",items[n])

```

Test case 1:

> Input: Enter the Index to search: 2

> Output: The element at Index 2 is C#

Test case 2:

> Input: Enter the Index to search:0

> Output:The element at Index 0 is PHP

Test case 3:

> Input: Enter the Index to search: 10

> Output: The element at Index 10 is Index out of range

# Question 22:

Write a Python program to create a Balanced Binary Search Tree (BST) using an array (given) elements where array elements are sorted in ascending order.

```python
#Solution
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def sorted_array_to_bst(nums):

    if not nums:
        return None
    mid_val = len(nums)//2
    node = TreeNode(nums[mid_val])
    node.left = sorted_array_to_bst(nums[:mid_val])
    node.right = sorted_array_to_bst(nums[mid_val+1:])
    return node

def preOrder(node):
    if not node:
        return
    print(node.val)
    preOrder(node.left)
    preOrder(node.right)

result = sorted_array_to_bst([1, 2, 3, 4, 5, 6, 7])
preOrder(result)
```

Test case 1:

> Input: Given array: [1, 2, 3, 4, 5, 6, 7]

> Output: 4
> 2
> 1
> 3
> 6
> 5
> 7

Test case 2:

> Input: Given array: [2, 4, 6, 8, 10, 12]

> Output: 8
> 4
> 2
> 6
> 12
> 10

# Question 23:

Write a Python program to find the kth smallest element in a given a binary search tree.

```python
#Solution
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def kth_smallest(root, k):
    stack = []
    while root or stack:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        k -= 1
        if k == 0:
            break
        root = root.right
    return root.val

root = TreeNode(8)
root.left = TreeNode(5)
root.right = TreeNode(14)
root.left.left = TreeNode(4)
root.left.right = TreeNode(6)
root.left.right.left = TreeNode(8)
root.left.right.right = TreeNode(7)
root.right.right = TreeNode(24)
root.right.right.left = TreeNode(22)
n = int(input('Enter the value of k:'))
print(kth_smallest(root, n))

```

Test case 1:

> Input: Enter the value of k: 1

> Output: 4

Test case 2:

> Input: Enter the value of k: 4

> Output: 6

Test case 3:

> Input: Enter the value of k: 5

> Output: 6

Q24 How do you implement a stack data structure in Python?

Solution
class Stack:
def **init**(self):
self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

#Test Cases
s = Stack()
s.push(1)
s.push(2)
s.push(3)
print(s.pop()) Output: 3
print(s.peek()) Output: 2
print(s.is_empty()) Output: False

Q25 How do you implement a queue data structure in Python?
class Queue:
def **init**(self):
self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)

    def peek(self):
        if not self.is_empty():
            return self.items[0]

    def is_empty(self):
        return len(self.items) == 0

# Test Cases

q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print(q.dequeue()) Output: 1
print(q.peek()) Output: 2
print(q.is_empty()) Output: False

Q3How do you implement a linked list in Python?
class Node:
def **init**(self, data):
self.data = data
self.next = None

class LinkedList:
def **init**(self):
self.head = None

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def delete_by_value(self, data):
        if self.head is None:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current_node = self.head
        while current_node.next:
            if current_node.next.data == data:
                current_node.next = current_node.next.next
                break
            current_node = current_node.next

    def print_list(self):
        current_node = self.head
        while current_node:
            print

#TEST CASES
insert_at_beginning(3)
ll.insert_at_beginning(2)
ll.insert_at_beginning

Q26 How do you implement a binary search tree in Python?

class Node:
def **init**(self, data):
self.data = data
self.left = None
self.right = None

class BST:
def **init**(self):
self.root = None

    def insert(self, data):
        new_node = Node(data)
        if self.root is None:
            self.root = new_node
            return
        current_node = self.root
        while True:
            if data < current_node.data:
                if current_node.left is None:
                    current_node.left = new_node
                    break
                current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    break
                current_node = current_node.right

    def search(self, data):
        current_node = self.root
        while current_node:
            if data == current_node.data:
                return True
            elif data < current_node.data:
                current_node = current_node.left
            else:
                current_node = current_node.right
        return False

# Test Cases

bst = BST()
bst.insert(5)
bst.insert(3)
bst.insert(7)
print(bst.search(5)) Output: True
print(bst.search(6)) Output: False

# Question 27:

Explain what is meant by inheritance

## Solution

```
In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object or class, retaining similar implementation.
```

# Question 18:

Create a class `Animal` with attributes `name`, `species`, and `sound`. Create a subclass `Dogs` that inherits from `Animals` and has an additional attribute `breed`. Implement a method `speak()` in both classes that prints the animal's sound.

```
#solution
class Animals:
    def __init__(self, name: str, species: str, sound: str):
        self.name = name
        self.species = species
        self.sound = sound

    def speak(self):
        print(self.sound)

class Dogs(Animals):
    def __init__(self, name: str, breed: str, sound: str):
        self.breed = breed
        super().__init__(name, "Dog", sound)

    def speak(self):
        print(self.name + " says " + self.sound)

```

Testcase 1:\
Input:

```
a = Animals("Lion", "Mammal", "Roar")
a.speak()
```

Output:

> Roar

Testcase 2:
Input:

```
d = Dogs("Fido", "Golden Retriever", "Woof")
d.speak()
```

Output:

> Fido says Woof

# Question 28:

Create a class Shape with a method area() that raises a NotImplementedError. Create subclasses Rectangle and Circle that inherit from Shape and implement the area() method.

## Solution

```python
from math import pi

class Shape:
    def area(self):
        raise NotImplementedError("This method should be implemented in the subclass.")

class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self):
        return pi * (self.radius ** 2)


```

Test case 1:

Input:

```
r = Rectangle(5, 10)
print(r.area()) # 50


```

Output:

```
50

```

Test case 2:

Input:

```
c = Circle(5)
print(c.area()) # 78.53981633974483

```

Output:

```
78.53981633974483
```

# Question 29:

Create a class Student with attributes name, age, and grades. Create a subclass GraduateStudent that inherits from Student and has an additional attribute research_topic. Implement a method gpa() in both classes that

## Solution

```python
class Student:
    def __init__(self, name: str, age: int, grades: list):
        self.name = name
        self.age = age
        self.grades = grades

    def gpa(self):
        return sum(self.grades) / len(self.grades)

class GraduateStudent(Student):
    def __init__(self, name: str, age: int, grades: list, research_topic: str):
        super().__init__(name, age, grades)
        self.research_topic = research_topic


```

Test case 1:

Input:

```
s = Student("John Smith", 22, [90, 85, 80, 95])
print(s.gpa()) # 88.75


```

Output:

```
88.75

```

Test case 2:

Input:

```
gs = GraduateStudent("Jane Smith", 25, [90, 85, 80, 95], "Machine Learning")
print(gs.gpa()) # 88.75

```

Output:

```
88.75

```

# Question 30

What are Design Patterns in software development and why are they important?

## Solution

```
Design Patterns are reusable solutions to common programming problems that aim to improve the overall design and maintainability of code by providing a common vocabulary and structure for developers. They're important because they provide proven solutions to common problems, which can save time and improve the quality of the code.
```
