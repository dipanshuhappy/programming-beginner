# Question 1:

Write a program which takes input as a list of numbers separated by space and find the mean of the numbers
rounded off to 3 decimal points.

```python
#solution
l=input('Enter the list of numbers separated by spaces: ').split()
b=len(l)
s=0
for i in l:
    s+=int(i)
print('Mean: ',"%.3f"%(s/b))
```

Testcase 1:\
Input:

> Enter the list of numbers separated by spaces: 5 12 4 2 32

Output:

> Mean: 11.000

Testcase 2:\
Input:

> Enter the list of numbers separated by spaces: 0 1 4 5 2 12 3

Output:

> Mean: 3.857

Testcase 3:\
Input:

> Enter the list of numbers separated by spaces: 7 8 6 2 5 10 10 21

Output:

> Mean: 8.625

# Question 2:

Write a program which takes n as input and then take n numbers which has to be added in a list
and then print the list in descending order.

```python
#solution
n=int(input('Enter number of elements: '))
l=[]
for i in range (n):
    l.append(int(input()))
l.sort()
l.reverse()
print(l)
```

Testcase 1:\
Input:

> Enter number of elements: 5\
> 2\
> 4\
> 6\
> 5\
> 2

Output:

> [6, 5, 4, 2, 2]

Testcase 2:\
Input:

> Enter number of elements: 7\
> 5\
> 8\
> 13\
> 25\
> 35\
> 36\
> 41

Output:

> [41, 36, 35, 25, 13, 8, 5]

Testcase 3:\
Input:

> Enter number of elements: 3\
> 5\
> 8\
> 12

Output:

> [12, 8, 5]

# Question 3:

Write a program which takes two lists as input each separated by spaces and then
add both lists and then sort the resultant list.

```python
#solution
a=input('Enter the first list separated by spaces: ').split()
b=input('Enter the second list separated by spaces: ').split()
c=[]
for i in a:
    c.append(int(i))
for i in b:
    c.append(int(i))
c.sort()
print(c)
```

Testcase 1:\
Input:

> Enter the first list separated by spaces: 2 5 4 6 21 14\
> Enter the second list separated by spaces: 3 6

Output:

> [2, 3, 4, 5, 6, 6, 14, 21]

Testcase 2:\
Input:

> Enter the first list separated by spaces: 4 5 8 75 4\
> Enter the second list separated by spaces: 6 2 7 6 12 4

Output:

> [2, 4, 4, 4, 5, 6, 6, 7, 8, 12, 75]

Testcase 3:\
Input:

> Enter the first list separated by spaces: 4 7 8 9 10 14\
> Enter the second list separated by spaces: 5 9 6 12

Output:

> [4, 5, 6, 7, 8, 9, 9, 10, 12, 14]

# Question 4:

Write a program which takes 2 lists as input each separated by spaces and find the intersection between
both the lists.

```python
#solution
a=input('Enter first list separated by spaces: ').split()
b=input('Enter second list separated by spaces: ').split()
c=[]
for i in a:
    if i in b:
        c.append(int(i))
        b.remove(i)
        continue
print(c)
```

Testcase 1:\
Input:

> Enter first list separated by spaces: 5 8 7 5 6 4 2\
> Enter second list separated by spaces: 1 2 5 4 5 8

Output:

> [5, 8, 5, 4, 2]

Testcase 2:\
Input:

> Enter first list separated by spaces: 2 4 5 8 7 5 2 3\
> Enter second list separated by spaces: 5 8 7 4 5 2 3

Output:

> [2, 4, 5, 8, 7, 5, 3]

Testcase 3:\
Input:

> Enter first list separated by spaces: 2 4 5 8 7 5 2 3\
> Enter second list separated by spaces: 5 8 7 4 5 2 3

Output:

> [2, 4, 5, 8, 7, 5, 3]

# Question 5:

Write a program which takes a list of positive integers separated by spaces as input and then check which of them
are prime numbers and perfect squares and print two resultant sets respectively.

```python
#solution
l=input('Enter a list of positive integers separated by spaces: ').split()
p=[];s=[]
for i in l:
    x=int(i)
    c=0
    for j in range(2,x):
        if x%j==0:
            c+=1
    if c==0:
        p.append(x)
    y=x**(1/2)
    y=int(y)
    if (y*y)==x:
        s.append(x)
print('List of prime numbers: ',p)
print('List of perfect squares: ',s)
```

Testcase 1:\
Input:

> Enter a list of positive integers separated by spaces: 5 2 3 4 6 9 11 13 64 100

Output:

> List of prime numbers: [5, 2, 3, 11, 13]\
> List of perfect squares: [4, 9, 64, 100]

Testcase 2:\
Input:

> Enter a list of positive integers separated by spaces: 8 6 2 1 3 12 5 78

Output:

> List of prime numbers: [2, 3, 5]\
> List of perfect squares: [1]

Testcase 3:\
Input:

> Enter a list of positive integers separated by spaces: 8 6 2 1 3 12 5 78

Output:

> List of prime numbers: [2, 3, 5]\
> List of perfect squares: [1]

# Question 6:

Write a program which takes a list of numbers separated by spaces and find minimum and maximum number from the list.

```python
#solution
l=input('Enter the list separated by spaces: ').split()
print('Maximum number:',max(l))
print('Minimum number:',min(l))
```

Testcase 1:\
Input:

> Enter the list separated by spaces: 5 8 7 5 9 6 3 2

Output:

> Maximum number: 9\
> Minimum number: 2

Testcase 2:\
Input:

> Enter the list separated by spaces: 4 7 8 99 1 20

Output:

> Maximum number: 99\
> Minimum number: 1

Testcase 3:\
Input:

> Enter the list separated by spaces: 8 4 5 9 1 90

Output:

> Maximum number: 90\
> Minimum number: 1

# Question 7:

Write a program which takes list as input and check whether the list is empty or not.
spaces entered are not considered at elements.

```python
#solution
a=input('Enter the list: ').split()
c=[]
for i in a:
    if i not in c:
        c.append(i)
if len(c)==0:
    print('Empty list')
elif len(c)==1 and c[0]==' ':
    print('Empty list')
else:
    print('Non-empty list')
```

Testcase 1:\
Input:

> Enter the list:

Output:

> Empty list

Testcase 2:\
Input:

> Enter the list: 1

Output:

> Non-empty list

Testcase 3:\
Input:

> Enter the list:

Output:

> Empty list

# Question 8:

Write a program which takes a list of strings and then print the list of string whose each letters
are unique means the word has no repeating letters.

```python
a=input('Enter the list of strings separated by spaces: ').split()
x=[]
for i in a:
    s=i
    s=s.lower()
    z='';c=0
    for j in i:
        if j in z:
            c=1
            break
        else:
            z+=j
    if c==0:
        x.append(i)
print(x)
```

Testcase 1:\
Input:

> Enter the list of strings separated by spaces: all Is well

Output:

> ['Is']

Testcase 2:\
Input:

> Enter the list of strings separated by spaces: ppt is being prepared

Output:

> ['is', 'being']

Testcase 3:\
Input:

> Enter the list of strings separated by spaces: spectacles are made for people with weak eyesight

Output:

> ['are', 'made', 'for', 'with', 'weak']

# Question 9:

How can you remove all items from a dictionary in Python?

# Solution

```
d = {'a': 1, 'b': 2, 'c': 3}
d.clear()
print(d)
```

# Output: {}

# Test cases

```
d = {'a': 1, 'b': 2, 'c': 3}
d.clear()
assert d == {}

d = {'a': 1, 'b': 2}
d.clear()
assert d == {}
```

# Question 10:

How can you check if a key exists in a dictionary in Python?

````
# Solution
d = {'a': 1, 'b': 2, 'c': 3}
print('a' in d)
# Output: True

# Test cases
d = {'a': 1, 'b': 2, 'c': 3}
assert 'a' in d == True

d = {'a': 1, 'b': 2, 'c': 3}
assert 'd' in d == False


```# Solution

d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 2, 'c': 4, 'd': 5}
intersection = {key: d1[key] for key in d1 if key in d2 and d1[key] == d2[key]}
print(intersection)

# Output: {'b': 2}

# Test cases

d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 2, 'c': 4, 'd': 5}
intersection = {key: d1[key] for key in d1 if key in d2 and d1[key] == d2[key]}
assert intersection == {'b': 2}

d1 = {'a': 1, 'b': 2, 'c': 3}
d2 = {'b': 2, 'c': 3, 'd': 5}
intersection = {key: d1[key] for key in d1 if key in d2 and d1[key] == d2[key]}
assert intersection == {'b': 2, 'c': 3}
````

# Question 10:

How can I count the occurrences of each item in a list, and store them in a dictionary?

```
def count_items(lst):
    count_dict = {}
    for item in lst:
        count_dict[item] = lst.count(item)
    return count_dict
print(count_items([1, 2, 3, 1, 2, 3, 1])) # {1: 3, 2: 2, 3: 2}
print(count_items(["apple", "banana", "cherry", "apple"])) # {'apple': 2, 'banana': 1, 'cherry': 1}
```

# Question 11:

Given an unsorted array that contains even number of occurrences for all numbers except two numbers. Find the two numbers which have odd occurrences

```python
# solution
def printTwoOdd(arr, size):

    xor2 = arr[0]

    set_bit_no = 0
    n = size - 2
    x, y = 0, 0

    for i in range(1, size):
        xor2 = xor2 ^ arr[i]

    set_bit_no = xor2 & ~(xor2 - 1)

    for i in range(size):

        if(arr[i] & set_bit_no):
            x = x ^ arr[i]

        else:
            y = y ^ arr[i]

    print("The two elements with odd occurence are", x, "&", y)

arr = list(map(int, input("Enter elements of the array:").split()))
arr_size = len(arr)
printTwoOdd(arr, arr_size)
```

Test case 1:

> Input: Enter elements of the array: 4 2 4 5 2 3 3 1

> Output:The two elements with odd occurence are 5 & 1

Test case 2:

> Input: Enter elements of the array: 12 23 34 12 12 23 12 45

> Output: The two elements with odd occurence are 34 & 45

Test case 3:

> Input: Enter elements of the array: 4 4 100 5000 4 4 4 4 100 100

> Output: The two elements with odd occurence are 100 & 5000

<br><br>

# Question 12:

Given an arrray of integers, print all its subarray. Subarray is any continuous part of an array

```python
#Solution
def printSubarray(arr):
    for i in range(0,len(arr)+1):
        start=i
        for j in range(i,len(arr)+1):
            end=j
            for k in range(start,end):
                print(arr[k],end=" ")

            print()

        print()
arr=list(map(int, input("Enter elements of the array:").split()))
printSubarray(arr)

```

Test case 1:

> Input: Enter elements of the array: 2 4 6 8 10<br>
> Output: <br>
> 2<br>
> 2 4<br>
> 2 4 6<br>
> 2 4 6 8<br>
> 2 4 6 8 10<br><br>
> 4<br>
> 4 6<br>
> 4 6 8<br>
> 4 6 8 10<br><br>
> 6<br>
> 6 8<br>
> 6 8 10<br><br>
> 8<br>
> 8 10<br><br>
> 10<br>

Test case 2:

> Input: Enter elements of the array: 3 6 4 7<br>
> Output: <br>3<br>
> 3 6<br>
> 3 6 4<br>
> 3 6 4 7<br><br>
> 6<br>
> 6 4<br>
> 6 4 7<br><br>
> 4<br>
> 4 7<br><br>
> 7

<br><br>

# Question 13:

Take Matrix input from user in Python with specified number of rows and columns and print the Matrix

```python
#solution
def get_matrix():
  # Get the dimensions of the matrix
  rows = int(input("Enter the number of rows: "))
  cols = int(input("Enter the number of columns: "))

  # Initialize the matrix
  matrix = []

  # Get the matrix elements from the user
  for i in range(rows):
    a = []
    for j in range(cols):
      a.append(int(input("Enter the element for row {} and column {}: ".format(i+1, j+1))))
    matrix.append(a)

  return matrix

# Test the function
matrix = get_matrix()
print(matrix)
```

Test Case:

> Input: Enter number of Rows: 3<br>Enter number of columns:3<br>
> Enter the element for row 1 and column 1: 1<br>
> Enter the element for row 1 and column 2: 4<br>
> Enter the element for row 1 and column 3: 5<br> > <br>
> Enter the element for row 2 and column 1: 3<br>
> Enter the element for row 2 and column 2: 6<br>
> Enter the element for row 2 and column 3: 4<br> > <br>
> Enter the element for row 3 and column 1: 4<br>
> Enter the element for row 3 and column 2: 3<br>
> Enter the element for row 3 and column 3: 5<br>

> Output:[[1, 4, 5], [3, 6, 4], [4, 3, 5]]

<br><br>

# Question 14:

Print a given matrix in its spiral form

```python
def print_matrix_spiral(matrix):
  # Get the number of rows and columns in the matrix
  rows = len(matrix)
  cols = len(matrix[0])

  # Initialize the row and column indices
  row = 0
  col = 0

  # Initialize the direction of the spiral
  # 0: right, 1: down, 2: left, 3: up
  direction = 0

  # Initialize the visited cells set
  visited = set()

  # Iterate until all cells are visited
  while len(visited) < rows * cols:
    # Print the current cell
    print(matrix[row][col], end=" ")

    # Mark the current cell as visited
    visited.add((row, col))

    # Update the row and column indices based on the direction
    if direction == 0:
      col += 1
      if col == cols or (row, col) in visited:
        col -= 1
        row += 1
        direction = 1
    elif direction == 1:
      row += 1
      if row == rows or (row, col) in visited:
        row -= 1
        col -= 1
        direction = 2
    elif direction == 2:
      col -= 1
      if col < 0 or (row, col) in visited:
        col += 1
        row -= 1
        direction = 3
    elif direction == 3:
      row -= 1
      if row < 0 or (row, col) in visited:
        row += 1
        col += 1

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
print_matrix_spiral(matrix)
```

> Input:<br> [[1, 2, 3],<br>

          [4, 5, 6],<br>
          [7, 8, 9]]

> Output: 1 2 3 6 9 8 7 4 5

<br><br>

# Question 15:

Write a python program to print the elements of a given matrix in row-wise and column-wise

```python
#Solution

matrix = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]

# Print the matrix row-wise
for row in matrix:
   print(row)

# Print the matrix column-wise
for i in range(len(matrix[0])):
   column = [row[i] for row in matrix]
   print(column)

```

Test Case 1:

> Input: Matrix= [[1, 2, 3],<br>

          [4, 5, 6], <br>
          [7, 8, 9]]

> Output: [1, 2, 3]<br> > [4, 5, 6]<br> > [7, 8, 9]<br> > [1, 4, 7]<br> > [2, 5, 8]<br> > [3, 6, 9]

Test Case 2:

> Input: Matrix = [[9, 8, 7],<br>

          [6, 5, 4], <br>
          [3, 2, 1]]

> Output: [9, 8, 7]<br> > [6, 5, 4]<br> > [3, 2, 1]<br> > [9, 6, 3]<br> > [8, 5, 2]<br> > [7, 4, 1]

<br><br>

# Question 16:

Write a Python function that takes a list of tuples and returns a new list containing only the tuples whose second element is a prime number.

```python
#solution
def prime_tuples(lst):
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True

    return [(x, y) for x, y in lst if is_prime(y)]
```

Testcase 1:\
Input:

> print(prime_tuples([(1, 2), (3, 4), (5, 6), (7, 8), (9, 10)]))

Output:

> [(1, 2), (7, 8)]

Testcase 2:\
Input:

> print(prime_tuples([(1, 2), (3, 5), (5, 7), (7, 11), (9, 13)]))

Output:

> [(1, 2), (3, 5), (5, 7), (9, 13)]

# Question 17:

Write a Python function that takes a list of tuples and returns a new list containing only the tuples whose second element is even.

```python
def even_tuples(lst):
    return [(x, y) for x, y in lst if y % 2 == 0]
```

Testcase 1:\
Input:

> print(even_tuples([(1, 2), (3, 4), (5, 6), (7, 8), (9, 10)]))

Output:

> [(1, 2), (3, 4), (5, 6), (7, 8), (9, 10)]

Testcase 2:\
Input:

> print(even_tuples([(1, 2), (3, 5), (5, 7), (7, 11), (9, 13)]))

Output:

> [(1, 2)]

# Question 18:

Write a Python function that takes a list of tuples and returns a new list containing only the tuples whose second element is a palindrome.

```python
def palindrome_tuples(lst):
    return [(x, y) for x, y in lst if y == y[::-1]]
```

Testcase 1:\
Input:

> print(palindrome_tuples([(1, "abcd"), (2, "racecar"), (3, "deified"), (4, "madam"), (5, "python")]))

Output:

> [(2, "racecar"), (4, "madam")]

Testcase 2:\
Input:

> print(palindrome_tuples([(1, "abcd"), (2, "level"), (3, "deified"), (4, "civic"), (5, "python")]))

Output:

> [(2, "level"), (4, "civic")]

# Question 19:

Write a Python function that takes a list of tuples and a value as input, and returns a new list containing only the tuples whose second element is greater than the given value.

```python
def greater_tuples(lst, value):
    return [(x, y) for x, y in lst if y > value]
```

Testcase 1:\
Input:

> print(greater_tuples([(1, 2), (3, 4), (5, 6), (7,8), (9, 10)], 5))

Output:

> [(5, 6), (7, 8), (9, 10)]

Testcase 2:\
Input:

> print(greater_tuples([(1, 2), (3, 5), (5, 7), (7, 11), (9, 13)], 7))

Output:

> [(7, 11), (9, 13)]

# Question 20:

Given two sets of integers, write a function to find the intersection of the sets.

```python
#Solution
def intersection(set1, set2):
    return set1.intersection(set2)

```

Test Cases:

```python
# test cases
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(intersection(set1, set2)) # {3, 4}

set3 = {1, 2, 3}
set4 = {4, 5, 6}
print(intersection(set3, set4)) # set()
```

# Question 21:

Given a set of integers, write a function to find the difference of the set and a given integer.

```python
#Solution
def difference(input_set, n):
    return input_set.difference({n})
```

Test Cases:

```python

# test cases
set1 = {1, 2, 3, 4}
n = 3
print(difference(set1, n)) # {1, 2, 4}

set2 = {1, 2, 3}
n = 1
print(difference(set2, n)) # {2, 3}
```

# Question 22:

Given a set of integers, write a function to check if the set is a superset of another set.

```python
#Solution
def is_superset(set1, set2):
    return set1.issuperset(set2)

```

Test Cases:

```python

# test cases
set1 = {1, 2, 3, 4, 5}
set2 = {1, 2, 3}
print(is_superset(set1, set2)) # True

set3 = {1, 2, 3}
set4 = {1, 2, 3, 4, 5}
print(is_superset(set3, set4)) # False
```

# Question 23:

Given a set of integers, write a function to check if the set is a superset of another set.

```python
#Solution
def is_superset(set1, set2):
    return set1.issuperset(set2)

```

Test Cases:

```python

# test cases
set1 = {1, 2, 3, 4, 5}
set2 = {1, 2, 3}
print(is_superset(set1, set2)) # True

set3 = {1, 2, 3}
set4 = {1, 2, 3, 4, 5}
print(is_superset(set3, set4)) # False
```

# Question 24:

Given two vectors represented as lists, write a function to find the cross product of the vectors.

## Solution

```python

def cross_product(vec1, vec2):
    return [vec1[1]*vec2[2] - vec1[2]*vec2[1], vec1[2]*vec2[0] - vec1[0]*vec2[2], vec1[0]*vec2[1] - vec1[1]*vec2[0]]

```

Test Cases:

```python
# test cases
vec1 = [1, 2, 3]
vec2 = [4, 5, 6]
print(cross_product(vec1, vec2)) # [-3, 6, -3]

vec3 = [7, 8, 9]
vec4 = [10, 11, 12]
print(cross_product(vec3, vec4)) # [-3, 6, -3]
```

# Question 25:

Given two vectors represented as lists, write a function to find the angle between the vectors in radians.

## Solution

```python

import math

def angle_between(vec1, vec2):
    dot_product = sum([x*y for x,y in zip(vec1,vec2)])
    mag1 = magnitude(vec1)
    mag2 = magnitude(vec2)
    return math.acos(dot_product/(mag1*mag2))

```

Test Cases:

```python
# test cases
vec1 = [1, 2, 3]
vec2 = [4, 5, 6]
print(angle_between(vec1, vec2)) # 0.9327379053088816

vec3 = [7, 8, 9]
vec4 = [10, 11, 12]
print(angle_between(vec3, vec4)) # 0.9272952180016122
```

### Author By Aditya (Github Profile)[https://github.com/Strarist]
