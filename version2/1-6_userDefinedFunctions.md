# Question 1:

Make a function sum() which takes two numbers as input and print the sum inside
the function.

```python
#solution
def sum():
    a=int(input("Enter first number:"))
    b=int(input("Enter second number:"))
    print("Sum:",a+b)
sum()
```

Testcase 1: \
Input:

> Enter first number: 5\
> Enter second number: 3

Output:

> Sum: 8

Testcase 2:\
Input:

> Enter first number: 12\
> Enter second number: 9

Output:

> Sum: 21

Testcase 3:\
Input:

> Enter first number: 10\
> Enter second number: 10

Output:

> Sum: 20

# Question 2:

Make a function avg() which takes four numbers as input and print the average of the numbers
inside the function.

```python
#solution
def avg():
    a=int(input("Enter first number:"))
    b=int(input("Enter second number:"))
    c=int(input("Enter third number:"))
    d=int(input("Enter fourth number:"))
    print("Average:",(a+b+c+d)/4)
avg()
```

Testcase 1: \
Input:

> Enter first number: 5\
> Enter second number: 6\
> Enter third number: 7\
> Enter fourth number: 2

Output:

> Average: 5

Testcase 2:\
Input:

> Enter first number: 8\
> Enter second number: 10\
> Enter third number: 3\
> Enter fourth number: 9

Output:

> Average: 7.5

Testcase 3:\
Input:

> Enter first number: 1\
> Enter second number: 9\
> Enter third number: 21\
> Enter fourth number: 12

Output:

> Average: 10.75

# Question 3:

Make a function reverse() and take a string as input
and print it after reversing it inside the function.

```python
#solution
def reverse():
    a=input("Enter the word: ")
    print(a[::-1])
reverse()
```

Testcase 1:\
Input:

> Enter the word: Arist

Output:

> tsirA

Testcase 2:\
Input:

> Enter the word: Bennett

Output:

> ttenneB

Testcase 3:\
Input:

> Enter the word: Srivalli

Output:

> illavirS

# Question 4:

Make a function maximum() and take three numbers from user
as input and find the maximum number out of the three.

```python
#solution
def maxim():
    a=int(input("Enter first number: "))
    b=int(input("Enter second number: "))
    c=int(input("Enter third number: "))
    print("Maximum number is:",max(a,b,c))
maxim()
```

Testcase 1:\
Input:

> Enter first number: 4\
> Enter second number: 7\
> Enter third number: 32

Output:

> Maximum number is: 32

Testcase 2:\
Input:

> Enter first number: 4\
> Enter second number: 4\
> Enter third number: 4

Output:

> Maximum number is: 4

Testcase 3:\
Input:

> Enter first number: 6\
> Enter second number: 12\
> Enter third number: 26

Output:

> Maximum number is: 26

# Question 5:

Make a function fact() and take a number as input from user
and return factorial of that number and print it outside
the function.(Don't use in-built function).

```python
#solution
def fact():
    n=int(input('Enter the number: '))
    f=1
    for i in range(1,n+1):
        f*=i
    return f
factorial=fact()
print('Factorial:',factorial)
```

Testcase 1:\
Input:

> Enter the number: 5

Output:

> Factorial: 120

Testcase 2:\
Input:

> Enter the number: 6

Output:

> Factorial: 720

Testcase 3:\
Input:

> Enter the number: 3

Output:

> Factorial: 6

# Question 6:

Make a function prime() and take a number as input from
the user and check whether it is prime or not.

```python
#solution
def prime():
    num=int(input("Enter the number: "))
    c=0
    for i in range(2,num):
        if num%i==0:
            c+=1
    if c==0:
        print('Prime')
    else:
        print('Non-prime')
prime()
```

Testcase 1:\
Input:

> Enter the number: 8

Output:

> Non-prime

Testcase 2:\
Input:

> Enter the number: 127

Ouput:

> Prime

Testcase 3:\
Input:

> Enter the number: 19

Output:

> Prime

# Question 7:

Make a function primebtw() and take the starting number and ending number
as input from user and print the prime numbers between them inclusive of the boundary
numbers. Example: a<= primebtw <=b

```python
#solution
def prime():
    num1=int(input("Enter the starting number: "))
    num2=int(input("Enter the ending number: "))
    for k in range(num1,num2+1):
        c=0
        for i in range(2,k):
            if k%i==0:
                c+=1
        if c==0:
            print(k)
prime()
```

Testcase 1:
Input:

> Enter the starting number: 2\
> Enter the ending number: 10

Output:

> 2\
> 3\
> 5\
> 7

Testcase 2:
Input:

> Enter the starting number: 11\
> Enter the ending number: 13

Output:

> 11\
> 13

Testcase 3:
Input:

> Enter the starting number: 7\
> Enter the ending number: 20

Output:

> 7\
> 11\
> 13\
> 17\
> 19

# Question 8:

Make a function countvowel() to take a string as input from user and count the number
of vowels in it and return it and print it outside the function.

```python
#solution
def countvowel():
    word=input('Enter the word: ')
    c=0
    for i in word:
        if i in 'aeiouAEIOU':
            c+=1
    return c
count=countvowel()
print('Vowel count:',count)
```

Testcase 1:\
Input:

> Enter the word: Bennett University

Output:

> Vowel count: 6

Testcase 2:\
Input:

> Enter the word: Greater Noida

Output:

> Vowel count: 6

Testcase 3:\
Input:

> Enter the word: VikramAditya

Output:

> Vowel count: 5

# Question 9:

Make a function replace() and take a string as input and replace all the
vowels with '#' and print the resultant string inside the function.

```python
#solution
def replace():
    s=''
    word=input('Enter the word: ')
    for i in word:
        if i in 'aeiouAEIOU':
            s+='#'
        else:
            s+=i
    print(s)
replace()
```

Testcase 1:\
Input:

> Enter the word: Bennett University

Output:

> B#nn#tt #n#v#rs#ty

Testcase 2:\
Input:

> Enter the word: Narendra Modi

Output:

> N#r#ndr# M#d#

Testcase 3:\
Input:

> Enter the word: Samuel Kharbanda

Output:

> S#m##l Kh#rb#nd#

# Question 10:

Make a function si() and take input from user as principal amount, time and
rate of interest per annum and calculate the simple interest and return it to
and print it outside the function.

```python
#solution
def si():
    p=int(input('Enter principal amount: '))
    t=float(input('Enter time( in years): '))
    r=float(input('Enter rate of interest( per annum): '))
    return (p*r*t)/100
SI=si()
print("Simple interst: ",SI)
```

Testcase 1:\
Input:

> Enter principal amount: 10000\
> Enter time( in years): 5\
> Enter rate of interest( per annum): 2.5

Output:

> Simple interest: 1250.0

Testcase 2:\
Input:

> Enter principal amount: 50000\
> Enter time( in years): 10\
> Enter rate of interest( per annum): 7.5

Output:

> Simple interest: 37500.0

Testcase 3:\
Input:

> Enter principal amount: 152\
> Enter time( in years): 15\
> Enter rate of interest( per annum):15.3652

Output:

> Simple interest: 350.32656000000003

# Question 11:

Make a function ci() and take input from user as principal amount, time in year and
rate of interest calculated yearly and calculate compound interest and print it inside
the function(round off the answer upto 2 decimal points).

```python
#solution
def ci():
    p=int(input('Enter principal amount: '))
    t=float(input('Enter time( in years): '))
    r=float(input('Enter rate of interest( calculated yearly): '))
    a=p*((1+(r/100))**t)
    print('Compound interest: ',"%.2f"%(a-p))
ci()
```

Testcase 1:\
Input:

> Enter principal amount: 50000\
> Enter time( in years): 2\
> Enter rate of interest( calculated yearly): 5

Output:

> Compound interest: 5125.00

Testcase 2:\
Input:

> Enter principal amount: 10000\
> Enter time( in years): 5\
> Enter rate of interest( calculated yearly): 4.5

Output:

> Compound interest: 2461.82

Testcase 3:\
Input:

> Enter principal amount: 500\
> Enter time( in years): 2\
> Enter rate of interest( calculated yearly): 1.5

Output:

> Compound interest: 15.11

# Question 12:

Make a function cap() and take a string as input from user and convert the string to uppercase
and print it inside the function.

```python
#solution
def cap():
    s=input("Enter the string: ")
    s=s.upper()
    print(s)
cap()
```

Testcase 1:\
Input:

> Enter the string: Bennett

Output:

> BENNETT

Testcase 2:\
Input:

> Enter the string: Hacker Rank

Output:

> HACKER RANK

Testcase 3:\
Input:

> Enter the string: Strarist

Output:

> STRARIST

# Question 13:

Make a function that takes a string as input and capitalize only the first letters of every word
and print the resultant string.

```python
#solution
def caps():
    s=input('Enter the string: ')
    s=s.title()
    print(s)
caps()
```

Testcase 1:\
Input:

> Enter the string: a Quick brown fox jumped over the lazy dog.

Output:

> A Quick Brown Fox Jumped Over The Lazy Dog.

Testcase 2:\
Input:

> Enter the string: Bennett university is in tech Zone-2

Output:

> Bennett University Is In Tech Zone-2

Testcase 3:\
Input:

> Enter the string: abra ca dabra

Output:

> Abra Ca Dabra

# Question 14:

Write a program which has a user defined function btw() which takes a starting number and an ending number
and then print pallindrome numbers between the two numbers including them.

```python
#solution
def btw():
    a=int(input('Enter the starting number: '))
    b=int(input('Enter the ending number: '))
    for i in range(a,b+1):
        s=str(i)[::-1]
        if s==str(i):
            print(i)
btw()
```

Testcase 1:\
Input:

> Enter the starting number(greater than 10): 12\
> Enter the ending number: 25

Output:

> 22

Testcase 2:\
Input:

> Enter the starting number(greater than 10): 15\
> Enter the ending number: 90

Output:

> 22\
> 33\
> 44\
> 55\
> 66\
> 77\
> 88

Testcase 3:\
Input:

> Enter the starting number(greater than 10): 500\
> Enter the ending number: 600

Output:

> 505\
> 515\
> 525\
> 535\
> 545\
> 555\
> 565\
> 575\
> 585\
> 595

# Question 15:

Write a program which has a user-defined function which takes a number as input and
print it's binary conversion inside the function.

```python
#solution
def bn():
    num=int(input("Enter the number: "))
    print(bin(num))
bn()
```

Testcase 1:\
Input:

> Enter the number: 5

Output:

> 0b101

Testcase 2:\
Input:

> Enter the number: 14

Output:

> 0b1110

Testcase 3:\
Input:

> Enter the number: 50

Output:

> 0b110010

# Question 16:

Write a program which has a function rem() which removes all the zeroes from the number
taken as input and return it and print the result outside the function.

```python
#solution
def rem():
    num=int(input('Enter the number: '))
    s=''
    for i in str(num):
        if i!='0':
            s+=i
    return int(s)
number=rem()
print(number)
```

Testcase 1:\
Input:

> Enter the number: 1012011023

Output:

> 1121123

Testcase 2:\
Input:

> Enter the number: 20023201200

Output:

> 223212

Testcase 3:\
Input:

> Enter the number: 80056904

Output:

> 85694

# Question 17:

Write a program which has a function find() in which user take a string as input and
then takes another string as input and check whether the later one is present in the
first one or not. Print True/False either ways.

```python
#solution
def find():
    a=input('Enter the string: ')
    b=input('Enter the string to be found: ')
    print(b in a)
find()
```

Testcase 1:\
Input:

> Enter the string: Bennett is ugc certified university\
> Enter the string to be found: ugc

Output:

> True

Testcase 2:\
Input:

> Enter the string: I have to make a ppt\
> Enter the string to be found: presentation

Output:

> False

Testcase 3:\
Input:

> Enter the string: python is high level language\
> Enter the string to be found: high

Output:

> True

# Question 18:

Write a function ptrn() which takes input in n and then print the pattern with n rows.

```python
#solution
def ptrn():
    n=int(input("Enter the number of rows: "))
    for i in range(n,0,-1):
        for j in range(i,0,-1):
            print(j,end='')
        print('')
ptrn()
```

Testcase 1:\
Input:

> Enter the number of rows: 3

Ouput:

> 321\
> 21\
> 1

Testcase 2:\
Input:

> Enter the number of rows: 5

Output:

> 54321\
> 4321\
> 321\
> 21\
> 1

Testcase 3:\
Input:

> Enter the number of rows: 8

Ouput:

> 87654321\
> 7654321\
> 654321\
> 54321\
> 4321\
> 321\
> 21\
> 1

# Question 19:

Write a function odev() and take a number as input and print if the number is odd or even.

```python
#solution
def odev():
    num=int(input('Enter the number: '))
    if num%2==0:
        print('Number is even')
    else:
        print('Number is odd')
odev()
```

Testcase 1:\
Input:

> Enter the number: 29

Output:

> Number is odd

Testcase 2:\
Input:

> Enter the number: 11

Output:

> Number is odd

Testcase 3:\
Input:

> Enter the number: 1620

Output:

> Number is even

# Question 20:

Write a program which has a user defined function spcl() which takes input from the user as a number
and then checks if the number is special or not. A special number is one whose sum of cube of each digits is equal
to the original number.
153=1^3+5^3+3^3 => 1+125+27 = 153

```python
#solution
def spcl():
    num=int(input('Enter the number: '))
    s=0
    for i in str(num):
        s+=int(i)**3
    if s==num:
        print('Number is a special number')
    else:
        print('Number is not a special number')
spcl()
```

Testcase 1:\
Input:

> Enter the number: 121

Output:

> Number is not a special number

# Question 21:

Make a program which has a user defined function perf() which takes input from the user as a number
and then checks if the number is perfect or not. A perfect number is one whose sum of all the factors
including 1 and excluding the number itself.
6= 1+2+3 =>6

```python
#solution
def perf():
    num=int(input('Enter the number: '))
    s=0
    for i in range(1,num):
        if num%i==0:
            s+=i
    if s==num:
        print('Number is a perfect number')
    else:
        print('Number is not a perfect number')
perf()
```

Testcase 1:\
Input:

> Enter the number: 28

Output:

> Number is a perfect number

Testcase 2:\
Input:

> Enter the number: 8

Output:

> Number is not a perfect number

Testcase 3:\
Input:

> Enter the number: 496

Output:

> Number is a perfect number

# Question 22:

Write a program which has a user defined function which takes input from the user as a string
and count the number of uppercase letters, lowercase letters and spaces in the string and print
it insider the string.

```python
#solution
def cls():
    a=input('Enter the string: ')
    c=0;d=0;e=0
    for i in a:
        if i.isupper():
            c+=1
        elif i.islower():
            d+=1
        elif i==' ':
            e+=1
    print('Uppercase characters: ',c)
    print('Lowercase characters: ',d)
    print('Spaces: ',e)
cls()
```

Testcase 1:\
Input:

> Enter the string: This CouLd have Been dOne.

Output:

> Uppercase characters: 5\
> Lowercase characters: 16\
> Spaces: 4

Testcase 2:\
Input:

> Enter the string: Values MUst Be valued more than The valuables .

Output:

> Uppercase characters: 5\
> Lowercase characters: 33\
> Spaces: 8

Testcase 3:\

> Enter the string: VasudhaiV KatumBakam

Output:

> Uppercase characters: 4\
> Lowercase characters: 15\
> Spaces: 1

# Question 23:

Write a program which has a user defined function which accepts a string as input and
find the longest and shortest word in that string.

```python
#solution
def coun():
    s=input('Enter the string: ')
    s=s.split()
    maxs='';mins=s[0];mi=len(s[0]);ma=0
    for i in s:
        x=len(i)
        if x>ma:
            ma=x
            maxs=i
        elif x<mi:
            mi=x
            mins=i
    print('Longest word: ',maxs)
    print('Shortest word: ',mins)
coun()
```

Testcase 1:\
Input:

> Enter the string: Bennett University

Output:

> Longest word: University\
> Shortest word: Bennett

Testcase 2:\
Input:

> Enter the string: All that shines is not Gold

Output:

> Longest word: shines\
> Shortest word: is

Testcase 3:\
Input:

> Enter the string: India has the fastest growing GDP rate.

Output:

> Longest word: fastest\
> Shortest word: has

# Question 24:

Write a program which has a user defined function which take 2 numbers as input and a string
which say (and,or,xor) and accordingly we perform the bitwise operations between the two numbers.
print the result inside the function.

```
#solution
def bit():
    a=int(input('Enter the first number: '))
    b=int(input('Enter the second number: '))
    s=input('Enter the function to be performed: ')
    if s=='and':
        print(f'{a} & {b}: {a&b}')
    elif s=='or':
        print(f'{a} | {b}: {a|b}')
    elif s=='xor':
        print(f'{a} ^ {b}: {a^b}')
bit()
```

Testcase 1:\
Input:

> Enter the first number: 3\
> Enter the second number: 7\
> Enter the function to be performed: and

Output:

> 3 & 7: 3

Testcase 2:\
Input:

> Enter the first number: 6\
> Enter the second number: 3\
> Enter the function to be performed: or

Output:

> 6 | 3: 7

Testcase 3:\
Input:

> Enter the first number: 3\
> Enter the second number: 8\
> Enter the function to be performed: xor

Output:

> 3 ^ 8: 11

# Question 25:

Write a program which has a user defined function which takes a starting number and an ending number
and print all the numbers between them except the multiples of 2,3,5 and 7.

```python
#solution
def remove():
    a=int(input('Enter the starting number: '))
    b=int(input('Enter the ending number: '))
    for i in range(a,b+1):
        if i%2==0:
            pass
        elif i%3==0:
            pass
        elif i%5==0:
            pass
        elif i%7==0:
            pass
        else:
            print(i)
remove()
```

Testcase 1:\
Input:

> Enter the starting number: 10\
> Enter the ending number: 35

Output:

> 11\
> 13\
> 17\
> 19\
> 23\
> 29\
> 31

Testcase 2:\
Input:

> Enter the starting number: 25\
> Enter the ending number: 50

Output:

> 29\
> 31\
> 37\
> 41\
> 43\
> 47

Testcase 3:\
Input:

> Enter the starting number: 50\
> Enter the ending number: 75

Output:

> 53\
> 59\
> 61\
> 67\
> 71\
> 73

# Question 26:

Make a function which takes input as a list of numbers separated by commas(',') and then remove the repeating elements
and then sort it. Print the resultant list inside the list.

```python
#solution
def rep():
    a=input('Enter list of numbers separated by commas(,): ')
    a=a.split(',')
    s=[]
    for i in a:
        if int(i) not in s:
            s.append(int(i))
    s.sort()
    print(s)
rep()
```

Testcase 1:\
Input:

> Enter list of numbers separated by commas(,): 5,6,2,35,2,4,5,2,6,4,7

Output:

> [2, 4, 5, 6, 7, 35]

Testcase 2:\
Input:

> Enter list of numbers separated by commas(,): 5,6,2,35,2,4,5,2,6,4,7

Output:

> [2, 4, 5, 6, 7, 35]

Testcase 3:\
Input:

> Enter list of numbers separated by commas(,): 5,6,2,35,2,4,5,2,6,4,7

Output:

> [2, 4, 5, 6, 7, 35]

# Question 27:

Write a program which has a user defined function which takes n as input form user
and then print n terms of fibonacci series.
Fibonacci series => 0 1 1 2 3 5 8 13 21...

```python
#solution
def fib():
    n=int(input('Enter the number of terms: '))
    s=0;d=1;c=1
    if n==1:
        print(s)
    elif n==2:
        print(s,d)
    else:
        print(0,1,end=' ')
        for i in range(n-2):
            c=s+d
            s=d
            d=c
            print(c,end=' ')
fib()
```

Testcase 1:\
Input:

> Enter the number of terms: 2

Output:

> 0 1

Testcase 2:\
Input:

> Enter the number of terms: 5

Output:

> 0 1 1 2 3

Testcase 3:\
Input:

> Enter the number of terms: 5

Output:

> 0 1 1 2 3

# Question 28:

Write a program which has a user_defined functions for calculating area of square, circle and rectangle by
taking input as side, radius, length and breadth and print the areas respectively.

```python
#solution
def square():
    side=int(input('Enter side of square: '))
    return side*side
def circle():
    radius=int(input('Enter radius of circle: '))
    return 3.14*radius*radius
def rectangle():
    length=int(input('Enter length of rectangle: '))
    breadth=int(input('Enter breadth of rectangle: '))
    return length*breadth
s=square()
c=circle()
r=rectangle()
print('Area of square is: ',s)
print('Area of circle is: ',c)
print('Area of rectangle is: ',r)

```

Testcase 1:\
Input:

> Enter side of square: 4\
> Enter radius of circle: 3\
> Enter length of rectangle: 6\
> Enter breadth of rectangle: 8

Output:

> Area of square is: 16\
> Area of circle is: 28.259999999999998\
> Area of rectangle is: 48

Testcase 2:\
Input:

> Enter side of square: 4\
> Enter radius of circle: 3\
> Enter length of rectangle: 6\
> Enter breadth of rectangle: 8

Output:

> Area of square is: 16\
> Area of circle is: 28.259999999999998\
> Area of rectangle is: 48

Testcase 3:\
Input:

> Enter side of square: 4\
> Enter radius of circle: 3\
> Enter length of rectangle: 6\
> Enter breadth of rectangle: 8

Output:

> Area of square is: 16\
> Area of circle is: 28.259999999999998\
> Area of rectangle is: 48

# Question 29:

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

# Question 30:

Write a program which has a user-defined function which takes input from user as numerator and denominator
and write them in simplest form. For example: 40/58=> 20/27

```
#solution
def sim():
    a=int(input('Enter numerator: '))
    b=int(input('Enter denominator: '))
    c=min(a,b)
    hcf=0
    for i in range(1,c+1):
        if a%i==0 and b%i==0:
            hcf=i
    a1=a//hcf
    b1=b//hcf
    print('{}/{}'.format(a1,b1))
sim()
```

Testcase 1:\
Input:

> Enter numerator: 4\
> Enter denominator: 32

Output:

> 1/8

Testcase 2:\
Input:

> Enter numerator: 4/
> Enter denominator: 32

Output:

> 1/8

Testcase 3:\
Input:

> Enter numerator: 81/
> Enter denominator: 126

Ouput:

> 9/14

### Author By Aditya (Github Profile)[https://github.com/Strarist]
