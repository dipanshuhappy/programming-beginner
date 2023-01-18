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
