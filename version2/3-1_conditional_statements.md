
# Question 1:

Write a program to check whether a number entered by the user is even or odd.

## Solution

```python
# Solution
num = int(input("Enter a number: "))
print("even") if num%2==0 else print("odd")

```

Test case 1:

Input:

>1

Output:

>odd

Test case 2:

Input:

>2

Output:

>even

Test case 3:

Input:

>3

Output:

>odd
# Question 2:

Write a program to check is a person is eligible to vote(voting age is 18)

## Solution

```python
# Solution
age = int(input("Enter age: "))
print("eligible") if age >=18 else print("not eligible")

```

Test case 1:

Input:

>16

Output:

>not eligible

Test case 2:

Input:

>18

Output:

>eligible

Test case 3:

Input:

>22

Output:

>eligible
# Question 3:

write a program to check is a number is divisible by 7 or not

## Solution

```python
# Solution
num = int(input("Enter a number: "))
print("divisible") if num%7==0 else print("not divisible")

```

Test case 1:

Input:

>1

Output:

>not divisible

Test case 2:

Input:

>7

Output:

>divisible

Test case 3:

Input:

>14

Output:

>divisible
# Question 4:

write a program display "Hello" if a number is a multiple of 5 otherwise disply "Bye"

## Solution

```python
# Solution
num = int(input("Enter a number: "))
print("Hello") if num%5==0 else print("Bye")

```

Test case 1:

Input:

>1

Output:

>Bye

Test case 2:

Input:

>5

Output:

>Hello

Test case 3:

Input:

>10

Output:

>Hello
# Question 5:

Write a program to calculate the electricity bill (accept number of unit from user) according to
the following criteria :
Unit                     Price

First 100 units          no charge
Next 100 units           Rs 5 per unit
After 200 units          Rs 10 per unit

## Solution

```python
# Solution
amt=0
nu=int(input("Enter number of electric unit"))
if nu <= 100:
    amt=0
if nu> 100 and nu<= 200:
    amt = (nu-100)*5
if nu>200:
    amt = 500+(nu-200)*10
print("Amount to pay :",amt)

```

Test case 1:

Input:

>350

Output:

>2000

Test case 2:

Input:

>100

Output:

>0

Test case 3:

Input:

>200

Output:

>500
# Question 6:

write a program to check if the given number is positive or negative or zero

## Solution

```python
# Solution
n = int(input("Enter any number:"))
if n>0:
    print("No is positive")
elif n<0:
    print("No is negative")
else:
    print("Zero")

```

Test case 1:

Input:

>1

Output:

>No is positive

Test case 2:

Input:

>0

Output:

>Zero

Test case 3:

Input:

>-1

Output:

>No is negative
# Question 7:

write a program to check if the given number is of one digited or two digited or three digited or more than three digited.

## Solution

```python
# Solution
n = int(input("Enter any number:"))
if n>0 and n<10:
    print("One digit number")
elif n>10 and n<100:
    print("Two digit number")
elif n>100 and n<1000:
    print("Three digit number")
else:
    print("More than three digit number")

```

Test case 1:

Input:

>5

Output:

>One digit number

Test case 2:

Input:

>55

Output:

>Two digit number

Test case 3:

Input:

>555

Output:

>Three digit number

Test case 4:

Input:

>5555

Output:

>More than three digit number
# Question 8:

write a program to check if the entered number is smallest 4 digit number or not.

## Solution

```python
# Solution
n = int(input("Enter any number:"))
if n==1000:
    print("n is smallest 4 digit no")
else:
    print("n is not a smallest 4 digit no")

```

Test case 1:

Input:

>1000

Output:

>n is smallest 4 digit no

Test case 2:

Input:

>1111

Output:

>n is not a smallest 4 digit no

Test case 3:

Input:

>999

Output:

>n is not a smallest 4 digit no
# Question 9:

write a program to check if the given character is an uppercase letter or lowercase letter or a digit or a special character.

## Solution

```python
# Solution
ch = input("Enter a character to check:")
if ord(ch)>=65 and ord(ch)<=90:
    print("The character", ch, "is an uppercase letter")
elif ord(ch)>=97 and ord(ch)<=122:
   print("The character", ch, "is a lowercase letter")
elif ord(ch)>=48 and ord(ch)<=57:
    print("The character", ch, "is a digit")
else:
    print("The character", ch, "is a special character")

```

Test case 1:

Input:

>A

Output:

>The character A is an uppercase letter

Test case 2:

Input:

>a

Output:

>The character a is a lowercase letter

Test case 3:

Input:

>#

Output:

>The character # is a special character

Test case 4:

Input:

>4

Output:

>The character 4 is a digit
# Question 10:

write a program to check if the given year is a leap year or not.

## Solution

```python
# Solution
year = int(input("Enter a year to check:"))
if (year%4==0 and year%100!=0) or (year%400==0):
    print("Year is a leap year")
else:
    print("Year is not a leap year")

```

Test case 1:

Input:

>2000

Output:

>Year is a leap year

Test case 2:

Input:

>2001

Output:

>Year is not a leap year

Test case 3:

Input:

>2020

Output:

>Year is a leap year
# Question 11:

write a program to find maximum number out of given three numbers.

## Solution

```python
# Solution
n1,n2,n3 = int(input("Enter no1:")),int(input("Enter no2:")),int(input("Enter no3:"))
if n1>n2 and n1>n3:
    print("No1 is maximum")
elif n2>n1 and n2>n3:
    print("No2 is maximum")
elif n3>n1 and n3>n2:
    print("No3 is maximum")
else:
    print("All are equal")

```

Test case 1:

Input:

>1
>2
>3

Output:

>No3 is maximum

Test case 2:

Input:

>2
>1
>0

Output:

>No1 is maximum

Test case 3:

Input:

>3
>9
>6

Output:

>No2 is maximum
# Question 12:

Write a program that reads three positive numbers a, b, c and determines whether they can form the three sides of a triangle.

## Solution

```python
# Solution
a=int(input("Enter no1:")) 
b=int(input("Enter no2:")) 
c=int(input("Enter no3:"))
if(((a+b)<=c)or((b+c)<=a)or((c+a)<=b)):
    print("It can not form the triangle")
else:
    print("It can form the triangle")

```

Test case 1:

Input:

>1
>2
>3

Output:

>It can not form the triangle

Test case 2:

Input:

>3
>3
>3

Output:

>It can form the triangle

Test case 3:

Input:

>3
>4
>5

Output:

>It can form the triangle
# Question 13:

write a program to check if a given triangle is right-angled 

## Solution

```python
# Solution
a=int(input("Enter no1:")) 
b=int(input("Enter no2:")) 
c=int(input("Enter no3:"))
square_a = a**2
square_b = b**2
square_c = c**2
if square_a == square_a + square_b or square_b == square_a + square_c or square_c == square_a + square_b:
    print("Right-angled Triangle")
else:
    print("Not a right-angled triangle")

```

Test case 1:

Input:

>1
>2
>3

Output:

>Not a right-angled triangle

Test case 2:

Input:

>3
>4
>4

Output:

>Not a right-angled triangle

Test case 3:

Input:

>3
>4
>5

Output:

>Right-angled Triangle
# Question 14:

write a program to determine if a given triangle is isosceles.

## Solution

```python
# Solution
a=int(input("Enter no1:")) 
b=int(input("Enter no2:")) 
c=int(input("Enter no3:"))
if (a==b or b==c or c==a) and not (a==b==c):
    print("isosceles triangle")
else:
    print("not an isosceles triangle")

```

Test case 1:

Input:

>1
>1
>1

Output:

>not an isosceles triangle

Test case 2:

Input:

>2
>2
>3

Output:

>isosceles triangle

Test case 3:

Input:

>5
>6
>9

Output:

>not an isosceles triangle
# Question 15:

A toy vendor supplies three types of toys: Battery Based Toys, Key-based Toys, and Electrical Charging Based Toys. The vendor gives a discount of 10% on orders for battery-based toys if the order is for more than Rs. 1000. On orders of more than Rs. 100 for key-based toys, a discount of 5% is given, and a discount of 10% is given on orders for electrical charging based toys of value more than Rs. 500. Assume that the numeric codes 1,2 and 3 are used for battery based toys, key-based toys, and electrical charging based toys respectively. Write a program that reads the product code and the order amount and prints out the net amount that the customer is required to pay after the discount

## Example

1.For Battery based Toys\
2.For Key based Toys\
3.Electric chargin based Toys\
Enter the product code (1,2 or 3)?: 2\
Enter the amount: 2000\
Customer has to pay: 1900.0

## Solution

```python
# Solution
print("1.For Battery based Toys")
print("2.For Key based Toys")
print("3.Electric chargin based Toys")
opt = int(input("Enter the product code (1,2 or 3)?: "))
amt = int(input("Enter the amount: "))
if opt==1:
    if amt>1000:
        dis = amt * 0.1
    else:
        dis = 0
elif opt==2:
    if amt>100:
        dis = amt * 0.05
    else:
        dis=0
elif opt==3:
    if amt>500:
        dis = amt*0.1
    else:
        dis = 0
else:
    print("Product is not available")
bill_amt= amt - dis
print("Customer has to pay:",bill_amt)

```

Test case 1:

Input:

>2
>2000

Output:

>1900.0

Test case 2:

Input:

>1
>300

Output:

>300

Test case 3:

Input:

>3
>7

Output:

>630.0
# Question 16:

Write a python program that will check for the following conditions:

If the light is green – Car is allowed to go\
If the light is yellow – Car has to wait\
If the light is red – Car has to stop\
Other signal – unrecognized signal. Example black, blue, etc…


## Solution

```python
# Solution
signal = input("What is a traffic signal? :").title()
if signal == "Red":
    print("Stop your car!")
elif signal == "Yellow":
    print("Wait your car!")
elif signal == "Green":
    print("You are allowed to go!")
else:
    print("Unrecgonized signal!")

```

Test case 1:

Input:

>Red

Output:

>Stop your car!

Test case 2:

Input:

>Yellow

Output:

>Wait your car!

Test case 3:

Input:

>Green

Output:

>You are allowed to go!
# Question 17:

Write a program to check students’ grades.  Your program should fulfill the following conditions:

Grade A – Outstanding\
Grade B – Excellent\
Grade C – Very Good\
Grade D – Good\
Grade E – Satisfactory\
others – Unrecognized\
A program should also ask to enter the student’s name, class, and section. The expected output is attached below.

## Example:
Enter student name:Sonam\
Enter class:11\
Enter section:D\
Enter students grade:B\
Name: Sonam\
Class: 11\
Section: D\
Grade: Excellent!

## Solution

```python
# Solution
name = input("Enter student name:")
clas = input("Enter class:")
section = input("Enter section:")
grade = input("Enter students grade:").upper()
print("Name:", name)
print("Class:", clas)
print("Section:", section)
if grade == "A":
    print("Grade: Outstanding!")
elif grade == "B":
    print("Grade: Excellent!")
elif grade == "C":
    print("Grade: Very Good!")
elif grade == "D":
    print("Grade: Good!")
elif grade == "E":
    print("Grade: Satisfactory!")
else:
    print("Unrecognized Grade!")

```

Test case 1:

Input:

>Sonam\
>11\
>D\
>B

Output:

>Name: Sonam\
>Class: 11\
>Section: D\
>Grade: Excellent!

Test case 2:

Input:

>Rahul\
>11\
>A\
>f

Output:

>Name: Rahul\
>Class: 11\
>Section: A\
>Grade: Good!

Test case 3:

Input:

>Raja\
>12\
>C\
>E

Output:

>Name: Raja\
>Class: 12\
>Section: C\
>Grade: Satisfactory!
# Question 18:

write a program to find the if the number is divisible by 9

## Solution

```python
# Solution
num = int(input("Enter a number: "))
if num %9 == 0:
    print("divisible")
else:
    print("not divisible")

```

Test case 1:

Input:

>9

Output:

>divisible

Test case 2:

Input:

>18

Output:

>divisible

Test case 3:

Input:

>20

Output:

>not divisible
# Question 19:

write a program to find if the given number is in list of numbers

list:[1,2,3,4,5,23,45]

## Solution

```python
# Solution
num = int(input("Enter number: "))
l=[1,2,3,4,5,23,45]
if num in l:
    print("True")
else:
    print("False")

```

Test case 1:

Input:

>1

Output:

>True

Test case 2:

Input:

>22

Output:

>False

Test case 3:

Input:

>234

Output:

>False
# Question 20:

You have written an exam for a total score of 100 and if your score is above or equal to 60 then you will be considered as PASS in the exam.\
write a program to check if you have passed the exam.

## Solution

```python
# Solution
num = int(input("Enter the score: "))
if num>=60:
    print("Pass")
else:
    print("Fail")

```

Test case 1:

Input:

>67

Output:

>Pass

Test case 2:

Input:

>60

Output:

>Pass

Test case 3:

Input:

>23

Output:

>Fail
# Question 21:

write a program to find out the highest 3 digit number.

## Solution

```python
# Solution
num = int(input("Enter the number: "))
if num == 999:
    print("It is the highest 3 digit number.")
else:
    print("It is not a highest 3 digit number.")

```

Test case 1:

Input:

>999

Output:

>It is the highest 3 digit number.

Test case 2:

Input:

>0

Output:

>It is not a highest 3 digit number.

Test case 3:

Input:

>111

Output:

>It is not a highest 3 digit number.
# Question 22:

write a program to check if a given triangle is equilateral triangle or not

## Solution

```python
# Solution
a=int(input("Enter no1:")) 
b=int(input("Enter no2:")) 
c=int(input("Enter no3:"))
if (a==b==c):
    print("equilateral triangle")
else:
    print("not an equilateral triangle")

```

Test case 1:

Input:

>1
>1
>1

Output:

>equilateral triangle

Test case 2:

Input:

>1
>2
>3

Output:

>not an equilateral triangle

Test case 3:

Input:

>1
>2
>1

Output:

>not an equilateral triangle
# Question 23:

You are feeling under the weather lately and want to check for a fever.
write a program to check if you have a fever or not.
(let the fever temperature be 98.7 F)

## Solution

```python
# Solution
temp = int(input("Enter your temperature: "))
if temp >= 98.7:
    print("You have a fever")
else:
    print("You do not have a fever")

```

Test case 1:

Input:

>98.7

Output:

>You have a fever

Test case 2:

Input:

>100.4

Output:

>You have a fever

Test case 3:

Input:

>98

Output:

>You do not have a fever
# Question 24:

write a program to display "General Kenobi" if the input is "Hello there" otherwise display "Welcome to the program"

## Solution

```python
# Solution
s= input("Enter input: ")
if s.lower()=="hello there":
    print("General Kenobi")
else:
    print("Welcome to the program")

```

Test case 1:

Input:

>

Output:

>Welcome to the program

Test case 2:

Input:

>Hello there

Output:

>General Kenobi

Test case 3:

Input:

>hello there

Output:

>General Kenobi
# Question 25:

write a program to check if a given word is a palindrome or not

## Solution

```python
# Solution
s = input("Enter a word: ")
if s[::-1]==s:
    print("palindrome")
else:
    print("Not a palindrome")

```

Test case 1:

Input:

>racecar

Output:

>palindrome

Test case 2:

Input:

>bob

Output:

>palindrome

Test case 3:

Input:

>human

Output:

>Not a palindrome
# Question 26:

write a program to check if the given 3 digit number is an armstrong number or not.\
(do not use loops)

## Solution

```python
# Solution
num = int(input("Enter a number: "))
n = ((num%10)**3) + ((num//10)%10)**3 + ((num//100)%10)**3

if n == num:
    print("Armstrong number")
else:
    print("Not an Armstrong number")

```

Test case 1:

Input:

>153

Output:

>Armstrong number

Test case 2:

Input:

>370

Output:

>Armstrong number

Test case 3:

Input:

>123

Output:

>Not an Armstrong number
# Question 27:

write a program to display "lower" if the given word is lowercase else display "upper"

## Solution

```python
# Solution
s = input("Enter a word: ")
if s==s.lower():
    print("lower")
else:
    print("upper")
```

Test case 1:

Input:

>hello

Output:

>lower

Test case 2:

Input:

>Aztec

Output:

>upper

Test case 3:

Input:

>plaNt

Output:

>upper
# Question 28:

You are the guard of an private club and the password to enter is "Monkeybox".\
write a program to automate this process.

## Solution

```python
# Solution
p = input("Enter the password: ")
if password == "Monkeybox":
    print("Welcome to the club")
else:
    print("Access denied")

```

Test case 1:

Input:

>Monkeybox

Output:

>Welcome to the club

Test case 2:

Input:

>nonkeybox

Output:

>Access denied

Test case 3:

Input:

>shark

Output:

>Access denied
# Question 29:

write a program to suggest what kind of clothesyou should wear according to the weather.\
Summer - Cotton\
Winter - Woolen

## Solution

```python
# Solution
s = input("Enter season: ")
if s == "Summer":
    print("You should wear cotton clothes")
elif s == "Winter":
    print("You should wear woolen clothes")
else:
    print("Invalid input")

```

Test case 1:

Input:

>Summer

Output:

>You should wear cotton clothes

Test case 2:

Input:

>Winter

Output:

>You should wear woolen clothes

Test case 3:

Input:

>hello

Output:

>Invalid input
# Question 30:

you and your friend are tossing a coin to decide who will buy lunch.\
heads - you buy lunch\
tails - your friend buys lunch

## Solution

```python
# Solution
r = input("Enter the result: ")
if r == "heads"
    print("You buy the lunch")
else:
    print("Your friend buys lunch")

```

Test case 1:

Input:

>heads

Output:

>You buy the lunch

Test case 2:

Input:

>tails

Output:

>Your friend buys lunch
