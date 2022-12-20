# Level 9

## <ins> A class on class </ins>

Languages that are “object-oriented programming language.” This means that almost all the code is implemented using a special construct called classes. Programmers use classes to keep related things together. This is done using the keyword “class,” which is a grouping of object-oriented constructs.

### What is a class?

A class is a code template for creating objects. Objects have member variables and have behaviour associated with them. In python a class is created by the keyword class.

An object is created using the constructor of the class. This object will then be called the instance of the class. In Python we create instances in the following manner

A class by itself is of no use unless there is some functionality associated with it. Functionalities are defined by setting attributes, which act as containers for data and functions related to those attributes. Those functions are called methods.

```python
class Snake:
...     name = "python" # set an attribute `name` of the class
```

### Methods?

Once there are attributes that “belong” to the class, you can define functions that will access the class attribute. These functions are called methods. When you define methods, you will need to always provide the first argument to the method with a self keyword.

For example, you can define a class Snake, which has one attribute name and one method change_name. The method change name will take in an argument new_name along with the keyword self.

### Instance attributes in python and the init method

You can also provide the values for the attributes at runtime. This is done by defining the attributes inside the init method. The following example illustrates this.

```python
class Snake:

    def __init__(self, name):
        self.name = name

    def change_name(self, new_name):
        self.name = new_name
```

```python
>>> # two variables are instantiated
>>> python = Snake("python")
>>> anaconda = Snake("anaconda")

>>> # print the names of the two variables
>>> print(python.name)
python
>>> print(anaconda.name)
anaconda
```

## Question 1

Now , we can use this knowledge of classes to make a data structure called linked list . In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

> Given a pointer to the head of a singly-linked list, print each data value from the reversed list. If the given list is empty, do not print anything.

**Input Format**

The first line of input contains , the number of test cases.

The input of each test case is as follows:

The first line contains an integer , the number of elements in the list.
Each of the next n lines contains a data element for a list node.

```python
Sample Input
3
5
16
12
4
2
5
3
7
3
9
5
5
1
18
3
13
Sample Output
5
2
4
12
16
9
3
7
13
3
18
1
5
```

<ins>Answer:</ins>

There are three test cases. There are no blank lines between test case output.

The first linked list has 5 elements:_16->12->4->2->5_ . Printing this in reverse order produces:
5
2
4
12
16

The second linked list has 3 elements _7->3->9->NULL_:
Printing this in reverse order produces:
9
3
7

The third linked list has 5 elements:
_5->1->18->3->13->NULL_
. Printing this in reverse order produces:
13
3
18
1
5

```python
#!/bin/python3

import math
import os
import random
import re
import sys

class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node


        self.tail = node

def print_singly_linked_list(node, sep):
    while node:
        print(node.data, end='')

        node = node.next

        if node:
            print(sep, end='')

#
# Complete the 'reversePrint' function below.
#
# The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
#

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#

def reversePrint(llist):
    if llist:
        reversePrint(llist.next)
        print(llist.data)

if __name__ == '__main__':
    tests = int(input())

    for tests_itr in range(tests):
        llist_count = int(input())

        llist = SinglyLinkedList()

        for _ in range(llist_count):
            llist_item = int(input())
            llist.insert_node(llist_item)

        reversePrint(llist.head)

```
