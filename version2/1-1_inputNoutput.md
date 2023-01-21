# Question 1:

Write a Python program that prompts the user to enter their name, and then prints a greeting using their name.

## Solution

```python
# Solution
name = input("What is your name? ")
print("Hello, " + name)

```

Test case 1:

Input:

> John

Output:

> Hello, John

Test case 2:

Input:

> What is your name? Sarah

Output:

> Hello, Sarah

# Question 2:

Write a Python program that prompts the user to enter two numbers, and then prints the sum of the numbers.

## Solution

```python
# Solution
x = int(input("Enter a number: "))
y = int(input("Enter another number: "))
print(x + y)


```

Test case 1:

Input:

> 10
> 20

Output:

> 30

Test case 2:

Input:

> 5
> 15

Output:

> 20

# Question 3:

Write a Python program that prompts the user to enter a sentence, and then prints the sentence in all uppercase letters.

## Solution

```python
# Solution
sentence = input("Enter a sentence: ")
print(sentence.upper())



```

Test case 1:

Input:

> Hello, world!

Output:

> HELLO, WORLD!

Test case 2:

Input:

> The quick brown fox jumps over the lazy dog.

Output:

> THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

# Question 4:

Write a Python program that prompts the user to enter a number, and then prints the square of the number.

## Solution

```python
# Solution
x = int(input("Enter a number: "))
print(x ** 2)




```

Test case 1:

Input:

> 5

Output:

> 25

Test case 2:

Input:

> 10

Output:

> 100

# Question 5:

Write a Python program that prompts the user to enter a list of numbers, separated by commas, and then prints the sum of the numbers.

## Solution

```python
# Solution
numbers = input("Enter a list of numbers, separated by commas: ")
numbers = numbers.split(',')
total = 0
for number in numbers:
    total += int(number)
print(total)





```

Test case 1:

Input:

> 1,2,3,4,5

Output:

> 15

Test case 2:

Input:

> 10,20,30,40,50

Output:

> 150

# Question 6:

Write a Python program that prompts the user to enter a word, and then prints the word with each letter reversed.

## Solution

```python
# Solution
# Solution
word = input("Enter a word: ")
print(word[::-1])






```

Test case 1:

Input:

> hello

Output:

> olleh

Test case 2:

Input:

> racecar

Output:

> racecar

# Question 7:

Write a Python program that prompts the user to enter a number, and then prints the binary of that number.

## Solution

```python
# Solution

x = int(input("Enter a number: "))
print(bin(x))







```

Test case 1:

Input:

> 2

Output:

> 10

# Question 8:

Write a Python program that prompts the user to enter a list of integers separated by commas , and then prints sorted list.

## Solution

```python
# Solution
numbers = input("Enter a list of integers, separated by commas: ")
numbers = numbers.split(',')
numbers = [int(x) for x in numbers]
numbers.sort()
print(numbers)
```

```python
# Test cases
print(input("Enter a list of integers, separated by commas: ") == "4,2,3,1,5") # Output: [1, 2, 3, 4, 5]
print(input("Enter a list of integers, separated by commas: ") == "10,20,5,15,30") # Output: [5, 10, 15, 20, 30]

```

# Question 9:

Write a Python program that prompts the user to enter a list of integers separated by commas, and then prints the product of each integers.

```python
# Solution
numbers = input("Enter a list of numbers, separated by commas: ")
numbers = numbers.split(',')
product = 1
for number in numbers:
    product *= int(number)
print(product)




```

```python
# Test cases
print(input("Enter a list of numbers, separated by commas: ") == "1,2,3,4,5") # Output: 120
print(input("Enter a list of numbers, separated by commas: ") == "10,20,30,40,50") # Output: 12000000
```

# Question 10:

Write a Python program that prompts the user to enter a list of numbers, separated by commas, and then prints the list with all duplicates removed

```python
numbers = input("Enter a list of numbers, separated by commas: ")
numbers = numbers.split(',')
result = []
for number in numbers:
    if number not in result:
        result.append(number)
print(result)
```

```python
print(input("Enter a list of numbers, separated by commas: ") == "1,2,2,3,3,3,4,4,4,4,5,5,5,5,5") # Output: ['1', '2', '3', '4', '5']
print(input("Enter a list of numbers, separated by commas: ") == "10,20,30,40,50,50,40,30,20,10") # Output: ['10', '20', '30', '40', '50']
```

# Question 9:

Write a Python program that prompts the user to enter a list of numbers separated by commas and then prints the sum of the integers.

```python
# Solution
numbers = input("Enter a list of numbers, separated by commas: ")
numbers = numbers.split(',')
product = 1
for number in numbers:
    product *= int(number)
print(product)




```

```python
# Test cases
print(input("Enter a list of numbers, separated by commas: ") == "1,2,3,4,5") # Output: 15
print(input("Enter a list of numbers, separated by commas: ") == "1,2,3,4,5,6") # Output: 16
```

# Question 10:

Write a Python program that prompts the user to enter a list of integers, separated by spaces, and then prints the list with all even numbers replaced with the string "EVEN" and all odd numbers replaced with the string "ODD".

```python
numbers = input("Enter a list of integers, separated by spaces: ")
numbers = numbers.split()
result = []
for number in numbers:
    if int(number) % 2 == 0:
        result.append("EVEN")
    else:
        result.append("ODD")
print(result)
```

```python
# Test cases
print(input("Enter a list of integers, separated by spaces: ") == "1 2 3 4 5") # Output: ['ODD', 'EVEN', 'ODD', 'EVEN', 'ODD']
print(input("Enter a list of integers, separated by spaces: ") == "10 20 30 40 50") # Output: ['EVEN', 'EVEN', 'ODD', 'EVEN', 'EVEN']
print(input("Enter a list of integers, separated by spaces: ") == "100 200 300 400 500") # Output: ['EVEN', 'EVEN', 'ODD', 'EVEN', 'EVEN']
```

# Question 11:

Write a Python program that prompts the user to enter a list of integers, separated by spaces, and then prints the list with all even numbers replaced with the string "EVEN" and all odd numbers replaced with the string "ODD".

```python
import string

s = input("Enter a string: ")
result = ''
for c in s:
    if c not in string.punctuation:
        result += c
print(result)
```

```python
# Test cases
print(input("Enter a string: ") == "Hello, world!") # Output: True
print(input("Enter a string: ") == "The quick brown fox jumps over the lazy dog.") # Output: True
print(input("Enter a string: ") == "Good morning!") # Output: True
```

# Question 12:

Write a Python program that prompts the user to enter a number, and then prints the number in Roman numerals.

```python
# Solution
def to_roman(n):
    numerals = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    result = ''
    for value in sorted(numerals.keys(), reverse=True):
        while n >= value:
            result += numerals[value]
            n -= value
    return result

x = int(input("Enter a number: "))
print(to_roman(x))
```

```python
# Test cases
print(input("Enter a number: ") == "1") # Output: I
print(input("Enter a number: ") == "4") # Output: IV
print(input("Enter a number: ") == "5") # Output: V
print(input("Enter a number: ") == "9") # Output: IX
print(input("Enter a number: ") == "10") # Output: X
```

# Question 13:

Write a Python program that prompts the user to enter a list of numbers, separated by spaces, and then prints the average of the numbers.

```python
# Solution
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = numbers.split()
total = 0
for number in numbers:
    total += int(number)
average = total / len(numbers)
print(average)
```

```python
# Test cases
print(input("Enter a list of numbers, separated by spaces: ") == "1 2 3 4 5") # Output: 3.0
print(input("Enter a list of numbers, separated by spaces: ") == "10 20 30 40 50") # Output: 30.0
print(input("Enter a list of numbers, separated by spaces: ") == "100 200 300 400 500") # Output: 300.0
print(input("Enter a list of numbers, separated by spaces: ") == "2 4 6 8 10") # Output: 6.0
print(input("Enter a list of numbers, separated by spaces: ") == "1 3 5 7 9") # Output: 5.0
```

# Question 14:

Write a Python program that prompts the user to enter a list of integers, separated by spaces, and then prints the list with all negative numbers replaced with 0.

```python
numbers = input("Enter a list of integers, separated by spaces: ")
numbers = numbers.split()
result = []
for number in numbers:
    if int(number) < 0:
        result.append(0)
    else:
        result.append(int(number))
print(result)

```

```python
# Test cases
print(input("Enter a list of integers, separated by spaces: ") == "1 2 3 -4 5") # Output: [1, 2, 3, 0, 5]
print(input("Enter a list of integers, separated by spaces: ") == "-10 20 30 -40 50") # Output: [0, 20, 30, 0, 50]
print(input("Enter a list of integers, separated by spaces: ") == "100 -200 300 -400 500") # Output: [100, 0, 300, 0, 500]
print(input("Enter a list of integers, separated by spaces: ") == "-2 -4 -6 -8 -10") # Output: [0, 0, 0, 0, 0]
print(input("Enter a list of integers, separated by spaces: ") == "1 -3 5 -7 9") # Output: [1, 0, 5, 0, 9]
```

# Question 15:

Write a Python program that prompts the user to enter a list of integers, separated by spaces, and then prints the list with all negative numbers replaced with 0.

```python
def replace_vowels(s):
    result = ''
    for c in s:
        if c in 'aeiouAEIOU':
            result += '_'
        else:
            result += c
    return result

s = input("Enter a string: ")
print(replace_vowels(s))

```

```python
# Test cases
print(input("Enter a string: ") == "Hello, world!") # Output: "H_ll_, w_rld!"
print(input("Enter a string: ") == "The quick brown fox jumps over the lazy dog.") # Output: "Th_ q_ick br_wn f_x jmps _v_r th_ lzy dg."
print(input("Enter a string: ") == "GOOD MORNING!") # Output: "G__D M__RNING!"
print(input("Enter a string: ") == "hELLO, wORLD!") # Output: "h_LL_, w_RLD!"
print(input("Enter a string: ") == "tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG.") # Output: "tH_ q_ICK bR_WN f_X jMPS _V_R tH_ lZY d_G."
```

# Question 15:

Write a Python program that prompts the user to enter a list of numbers, separated by spaces, and then prints the list with all numbers squared.

```python
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = numbers.split()
result = []
for number in numbers:
    result.append(int(number) ** 2)
print(result)

```

```python
# Test cases
print(input("Enter a list of numbers, separated by spaces: ") == "1 2 3 4 5") # Output: [1, 4, 9, 16, 25]
print(input("Enter a list of numbers, separated by spaces: ") == "10 20 30 40 50") # Output: [100, 400, 900, 1600, 2500]
print(input("Enter a list of numbers, separated by spaces: ") == "100 200 300 400 500") # Output: [10000, 40000, 90000, 160000, 250000]
print(input("Enter a list of numbers, separated by spaces: ") == "2 4 6 8 10") # Output: [4, 16, 36, 64, 100]
print(input("Enter a list of numbers, separated by spaces: ") == "1 3 5 7 9") # Output: [1, 9, 25, 49, 81]
```

# Question 16:

Write a Python program that prompts the user to enter a list of numbers, separated by spaces, and then prints the list with each number right-aligned to a width of 5 characters.

```python
# Solution
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = numbers.split()
for number in numbers:
    print(f"{number:>5}")
```

```python
# Test Cases
# Test cases
print(input("Enter a list of numbers, separated by spaces: ") == "1 2 3 4 5") # Output:
#     1
#     2
#     3
#     4
#     5
print(input("Enter a list of numbers, separated by spaces: ") == "10 20 30 40 50") # Output:
#    10
#    20
#    30
#    40
#    50
print(input("Enter a list of numbers, separated by spaces: ") == "100 200 300 400 500") # Output:
#   100
#   200
#   300
#   400
#   500
print(input("Enter a list of numbers, separated by spaces: ") == "2 4 6 8 10") # Output:
#     2
#     4
#     6
#     8
#    10
print(input("Enter a list of numbers, separated by spaces: ") == "1 3 5 7 9") # Output:
#     1
#     3
#     5
#     7
#     9


```

# Question 17:

Write a Python program that prompts the user to enter a list of strings, separated by commas, and then prints the list with each string left-aligned to a width of 20 characters.

```python
# Solution
words = input("Enter a list of strings, separated by commas: ")
words = words.split(',')
for word in words:
    print(f"{word:<20}")

# Test cases
print(input("Enter a list of strings, separated by commas: ") == "apple,banana,cherry,durian") # Output:
# apple
# banana
# cherry
# durian
print(input("Enter a list of strings, separated by commas: ") == "hello,world,goodbye,universe") # Output:
# hello
# world
# goodbye
# universe
print(input("Enter a list of strings, separated by commas: ") == "python,java,c++,ruby") # Output:
# python
# java
# c++
# ruby
print(input("Enter a list of strings, separated by commas: ") == "dog,cat,bird,fish") # Output:
# dog
# cat
# bird
# fish
print(input("Enter a list of strings, separated by commas: ") == "apple,banana,cherry,durian,apple,banana") # Output:
# apple
# banana
# cherry
# durian
# apple
# banana

```

# Question 18:

Write a Python program that prompts the user to enter a list of strings, separated by commas, and then prints the list with each string center-aligned to a width of 30 characters.

```python
# Solution
words = input("Enter a list of strings, separated by commas: ")
words = words.split(',')
for word in words:
    print(f"{word:^30}")

# Test cases
print(input("Enter a list of strings, separated by commas: ") == "apple,banana,cherry,durian") # Output:
#          apple
#          banana
#          cherry
#          durian
print(input("Enter a list of strings, separated by commas: ") == "hello,world,goodbye,universe") # Output:
#          hello
#          world
#          goodbye
#          universe
print(input("Enter a list of strings, separated by commas: ") == "python,java,c++,ruby") # Output:
#          python
#          java
#          c++
#          ruby
print(input("Enter a list of strings, separated by commas: ") == "dog,cat,bird,fish") # Output:
#          dog
#          cat
#          bird
#          fish
print(input("Enter a list of strings, separated by commas: ") == "apple,banana,cherry,durian,apple,banana") # Output:
#          apple
#          banana
#          cherry
#          durian
#          apple
#          banana

```

# Question 19:

Write a Python program that prompts the user to enter a list of numbers, separated by spaces, and then prints the list with each number formatted as a currency value with 2 decimal places.

```python
# Solution
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = numbers.split()
for number in numbers:
    print(f"${number:.2f}")

```

```python
# Test cases
print(input("Enter a list of numbers, separated by spaces: ") == "1 2 3 4 5") # Output:
# $1.00
# $2.00
# $3.00
# $4.00
# $5.00
print(input("Enter a list of numbers, separated by spaces: ") == "10 20 30 40 50") # Output:
# $10.00
# $20.00
# $30.00
# $40.00
# $50.00
print(input("Enter a list of numbers, separated by spaces: ") == "100 200 300 400 500") # Output:
# $100.00
# $200.00
# $300.00
# $400.00
# $500.00
print(input("Enter a list of numbers, separated by spaces: ") == "2.5 4.5 6.5 8.5 10.5") # Output:
# $2.50
# $4.50
# $6.50
# $8.50
# $10.50
```

# Question 20:

Write a Python program that prompts the user to enter a list of numbers, separated by spaces, and then prints the list with each number formatted as a floating point value with 2 decimal places.

```python
# Solution
numbers = input("Enter a list of numbers, separated by spaces: ")
numbers = numbers.split()
for number in numbers:
    print(f"{number:.2f}")
```

```python
# Test cases
print(input("Enter a list of numbers, separated by spaces: ") == "1 2 3 4 5") # Output:
# 1.00
# 2.00
# 3.00
# 4.00
# 5.00
print(input("Enter a list of numbers, separated by spaces: ") == "10 20 30 40 50") # Output:
# 10.00
# 20.00
# 30.00
# 40.00
# 50.00
print(input("Enter a list of numbers, separated by spaces: ") == "100 200 300 400 500") # Output:
# 100.00
# 200.00
# 300.00
# 400.00
# 500.00
print(input("Enter a list of numbers, separated by spaces: ") == "2.5 4.5 6.5 8.5 10.5") # Output:
# 2.50
# 4.50
# 6.50
# 8.50
# 10.50
print(input("Enter a list of numbers, separated by spaces: ") == "1.11 2.22 3.33 4.44 5.55") # Output:
# 1.11
# 2.22
# 3.33
# 4.44
# 5.55
```

# Question 21:

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

# Question 22:

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

# Question 23:

Write a Python program that prompts the user to enter a list of dictionaries, where each dictionary represents a student with the following keys: "name", "age", "grade". The program should then print a table with the following columns: "name", "age", "grade", "grade level". The "grade level" column should be determined as follows: if the "grade" is between 90 and 100, the "grade level" should be "A"; if the "grade" is between 80 and 89, the "grade level" should be "B"; if the "grade" is between 70 and 79, the "grade level" should be "C"; if the "grade" is between 60 and 69, the "grade level" should be "D"; and if the "grade" is below 60, the "grade level" should be "F". The table should be right-aligned and formatted to display 2 decimal places for all floating point values.

```python
import math

def pretty_print_students(students):
    # Print table header
    print(f"{'name':>20} {'age':>10} {'grade':>10} {'grade level':>15}")

    # Print table rows
    for student in students:
        grade_level = "F"
        if student['grade'] >= 90:
            grade_level = "A"
        elif student['grade'] >= 80:
            grade_level = "B"
        elif student['grade'] >= 70:
            grade_level = "C"
        elif student['grade'] >= 60:
            grade_level = "D"
        print(f"{student['name']:>20} {student['age']:>10} {student['grade']:>10.2f} {grade_level:>15}")

```

```python
students1 = [{'name': 'Alice', 'age': 20, 'grade': 95.0}, {'name': 'Bob', 'age': 21, 'grade': 85.0}, {'name': 'Charlie', 'age': 22, 'grade': 75.0}]
print(pretty_print_students(students1)) # Output:
#                 name         age     grade     grade level
#                 Alice         20     95.00          A
#                 Bob           21     85.00          B
#                 Charlie       22     75.00          C

students2 = [{'name': 'Alice', 'age': 20, 'grade': 59.9}, {'name': 'Bob', 'age': 21, 'grade': 69.9}, {'name': 'Charlie', 'age': 22, 'grade': 79.9}]
print(pretty_print_students(students2)) # Output:
#                 name         age     grade     grade level
#                 Alice         20     59.90          F
#                 Bob           21     69.90          D
#                 Charlie       22     79.90          C
```

# Question 24:

Write a Python function that takes a list of integers and returns a new list where all negative numbers are replaced with the string "negative", all positive numbers are replaced with the string "positive", and all zero are replaced with the string "zero".

```python
def classify_numbers(numbers):
    classified_numbers = []
    for number in numbers:
        if number < 0:
            classified_numbers.append('negative')
        elif number > 0:
            classified_numbers.append('positive')
        else:
            classified_numbers.append('zero')
    return classified_numbers
```

```python
# Test cases
print(classify_numbers([1, -2, 3, -4, 0, 5, -6])) # Output: ['positive', 'negative', 'positive', 'negative', 'zero', 'positive', 'negative']
print(classify_numbers([-1, -2, -3])) # Output: ['negative', 'negative', 'negative']
print(classify_numbers([1, 2, 3])) # Output: ['positive', 'positive', 'positive']
print(classify_numbers([0, 0, 0])) # Output: ['zero', 'zero', 'zero']
print(classify_numbers([-1, 2, -3, 4, -5, 6])) # Output: ['negative', 'positive', 'negative', 'positive', 'negative', 'positive']
```

# Question 25

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

# Question 26

Write a Python function that takes in a floating point number and returns a string representation of the number with two decimal places and a leading dollar sign.

Test cases:
Input:
print(format_price(123.456789))
Input:
print(format_price(987.654321))
Output:
$123.46
Output:
$987.65

```pyton
def format_price(price: float) -> str:
    return "${:,.2f}".format(price)
```

# Question 27

Write a Python function that takes in a list of strings and returns a new string that contains all of the strings in the list, separated by commas and spaces, with the last two strings being separated by an "and".

Test Cases:
Input :

> print(format_list(["apple", "banana", "cherry"]))
> Input :
> print(format_list(["dog", "cat", "bird"]))
> Output:
> apple, banana, and cherry
> Output:
> dog, cat, and bird

# Question 28

WAP to print the given pattern:
with 5 rows ,pattern will be like,

```
*****
*   *
*   *
*   *
*****
```

Test Cases:
Enter number of rows:5

```
*****
*   *
*   *
*   *
*****
```

Enter number of rows:3

```
***
* *
***
```

Enter number of rows:8

```
********
*      *
*      *
*      *
*      *
*      *
*      *
********
```

Enter number of rows:2

```
**
**
```

Solutions:

```python
n=int(input('Enter number of rows:'))
for i in range(n):
    for j in range(n):
        if i==0 or i==n-1 or j==0 or j==n-1:
            print('\*',end='')
        else:
            print(end=' ')
    print(' ')
```

# Question 29

Write a Python function that takes in an integer n and prints out a triangle of asterisks (\*) with n rows

Test cases:

Input:
5
Output

```
*
**
***
****
*****

```

Input:
3
Output

```
*
**
***

```

```python
def print_triangle(n: int):
    for i in range(1, n+1):
        print("*" * i)
```

# Question 30

Easy and quirky question, print hello world without using hello world . Simple

Solution:

```python
import sys
sys.stdout.write("Hello world!\n")
```
