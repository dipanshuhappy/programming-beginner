# Question 1:

Write a program in Python to display the Factorial of a number.

```python
#solution
n = int(input("Enter number: ")) # 5
if(n == 0 or n < 0):
    print("Value of n should be greater than 1")
else:
    fact = 1
    while(n):
        fact *= n
        n = n-1
    print(fact)
```

Testcase 1: \
Input:

> Enter first number: 5

Output:

> 120

Testcase 2:\
Input:

> Enter first number: 3

Output:

> 6

Testcase 3:\
Input:

> Enter first number: 7

Output:

> Sum: 720

# Question 2:

Write a program in Python to reverse a word.

```python
#solution# WAP to reverse a string
str = input("Input a word to reverse: ")

for i in range(len(str) - 1, -1, -1):
  print(str[i], end="")
print("\n")

```

Testcase 1: \
Input:

> Input a word to reverse: hello

Output:

> olleh

Testcase 2:\
Input:

> python

Output:

> nohtyp

Testcase 3:\
Input:

> world

Output:

> dlrow

# Question 3:

Write a Python program to reverse a number.

```python
#solution
n = int(input("Enter number : "))
rev = 0

while(n != 0):
   rem = n % 10
   rev = rev * 10 + rem
   n = n // 10

print(rev)
```

Testcase 1:\
Input:

> Enter the number : 1212

Output:

> 2121

Testcase 2:\
Input:

> Enter the number : 1234

Output:

> 4321

Testcase 3:\
Input:

> Enter the number : 0181

Output:

> 181

# Question 4:

Write a program to print n natural number in descending order using a while loop.

```python
#solution
n = int(input("Enter range: "))
while(n!=0):
    print(n, end=" ")
    n = n - 1
```

Testcase 1:\
Input:

> Enter range: 5

Output:

> 5 4 3 2 1

Testcase 2:\
Input:

> Enter range: 3

Output:

> 3 2 1

Testcase 3:\
Input:

> Enter range: 0

Output:

> 0

# Question 5:

Write a program to display the first 7 multiples of n.

```python
#solution
n=int(input())
count = 0
for i in range(200):
    if i%n == 0 and i!=0:
        print(i,end=" ")
        count = count+1
        if count == 7:
            break
```

Testcase 1:\
Input:

> 5

Output:

> 5 10 15 20 25 30 35

Testcase 2:\
Input:

> 6

Output:

> 6 12 18 24 30 36 42

Testcase 3:\
Input:

> 3

Output:

> 3 6 9 12 15 18 21

# Question 6:

Write a program that appends the square of each number to a new list.

```python
#solution
x =[int(i) for i in input().split()]
z = []
for i in range(len(x)):
    z.append(x[i]**2)
print(z)
```

Testcase 1:\
Input:

> 1 2 3

Output:

> [1 4 9]

Testcase 2:\
Input:

> 1

Ouput:

> [1]

Testcase 3:\
Input:

> 3 6 8 1 0

Output:

> [9 36 64 1 0]

# Question 7:

Write a program to use for loop to print the following reverse number pattern for general n.

```python
# for n=5
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
```

```python
#solution
n = int(input())
k = n
for i in range(0,n+1):
    for j in range(k-i,0,-1):
        print(j,end=' ')
    print()

```

Testcase 1:\
Input:

> 4

Output:

> 4 3 2 1\
> 3 2 1\
> 2 1\
> 1

Testcase 2:\
Input:

> 3

Output:

> 3 2 1\
> 2 1\
> 1

Testcase 3:\
Input:

> 1

Output:

> 1

# Question 8:

Write a program to input an integer N and print the sum of all its even digits and sum of all its odd digits separately.

```python
#solution
n=int(input())
odd=0
even=0
while n>0:
    l=n%10
    if l%2==0:
        even+=l
    else:
        odd+=l
    n=n//10
print(even," ",odd)
```

Testcase 1:\
Input:

> 1234567

Output:

> 12 16

Testcase 2:\
Input:

> 1

Output:

> 0 1

Testcase 3:\
Input:

> 454

Output:

> 8 5

# Question 9:

Nth term of Fibonacci series F(n), where F(n) is a function, is calculated using the following formula -
F(n) = F(n-1) + F(n-2),
Where, F(1) = 1,
F(2) = 1
Provided N you have to find out the Nth Fibonacci Number.

```python
#solution
n=int(input())
a=0
b=1
c=-1
for i in range(n):
    c=a+b
    a=b
    b=c
print(a)

```

Testcase 1:\
Input:

> 5

Output:

> 5

Testcase 2:\
Input:

> 1

Output:

> 1

Testcase 3:\
Input:

> 9

Output:

> 34

# Question 10:

Write a program to determine if given number is palindrome or not. Print true if it is palindrome, false otherwise.

```python
#solution
n=int(input())
m=n
p_no=0
while n>0:
    p_no=(p_no*10)+(n%10)
    n=n//10
if m==p_no:
    print("true")
else:
    print("false")

```

Testcase 1:

Input:

> 1111

Output:

> true

Testcase 2:

Input:

> 122

Output:

> false

Testcase 3:

Input

> 12121

Output:

> true

# Question 11:

Given an integer n, find and print the sum of numbers from 1 to n

```python
#solution
n=int(input())
sum=0
for i in range(n+1):
    sum+=i
print(sum)
```

Testcase 1:\
Input:

> 0

Output:

> 0

Testcase 2:\
Input:

> 4

Output:

> 10

Testcase 3:\
Input:

> 5

Output:

> 15

# Question 12:

Given an integer n, find if n is prime or not?

```python
#solution
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
n=int(input())
print(is_prime(n))

```

Testcase 1:\
Input:

> 17

Output:

> True

Testcase 2:\
Input:

> 1

Output:

> False

Testcase 3:\
Input:

> 12

Output:

> False

# Question 13:

Write a Python program to construct the following pattern, using a nested for loop for general value of n.

```python
#N=5
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
```

```python
#solution
n=int(input())
for i in range(n):
    for j in range(i):
        print ('* ', end="")
    print('')

for i in range(n,0,-1):
    for j in range(i):
        print('* ', end="")
    print('')
```

Testcase 1:\
Input:

> 3

Output:

```python
*
* *
* * *
* *
*
```

Testcase 2:\
Input:

> 6

Output:

```python
*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * *
* * * *
* * *
* *
*
```

Testcase 3:\
Input:

> 2

Output:

```python
*
* *
*
```

# Question 14:

Write a Python program that prints all the numbers from 0 to n(not including n)except 3 and 6 using loops.

```python
#solution
n=int(input())
for x in range(n):
    if (x == 3 or x==6):
        continue
    print(x,end=' ')
print("\n")
```

Testcase 1:\
Input:

> 5

Output:

> 0 1 2 4

Testcase 2:

Input:

> 6

Output:

> 0 1 2 4 5

Testcase 3:

Input:

> 7

Output:

> 0 1 2 4 5

# Question 15:

Write a Python program which iterates the integers from 1 to n. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz

```python
#solution
for fizzbuzz in range(n):
    if fizzbuzz % 3 == 0 and fizzbuzz % 5 == 0:
        print("fizzbuzz")
        continue
    elif fizzbuzz % 3 == 0:
        print("fizz")
        continue
    elif fizzbuzz % 5 == 0:
        print("buzz")
        continue
    print(fizzbuzz)

```

Testcase 1:\
Input:

> 1

Output:

> fizzbuzz

Testcase 2:\
Input:

> 2

Output:

> fizzbuzz\
> 1

Testcase 3:\
Input:

> 3

Output:

> fizzbuzz\
> 1\
> 2

# Question 16:

Write a Python program to calculate a dog's age in dog's years.
Note: For the first two years, a dog year is equal to 10.5 human years. After that, each dog year equals 4 human years.

```python
#solution
h_age = int(input("Input a dog's age in human years: "))

if h_age < 0:
	print("Age must be positive number.")
	exit()
elif h_age <= 2:
	d_age = h_age * 10.5
else:
	d_age = 21 + (h_age - 2)*4

print(d_age)
```

Testcase 1:\
Input:

> Input a dog's age in human years: 0

Output:

> 0.0

Testcase 2:\
Input:

> Input a dog's age in human years: 6

Output:

> 37

Testcase 3:\
Input:

> Input a dog's age in human years: -3

Output:

> Age must be positive number.

# Question 17:

Print the following pattern for any n.

```python
#Pattern for N = 4
*000*000*
0*00*00*0
00*0*0*00
000***000
```

```python
#solution
n=int(input())
for i in range(1, n+1):
    for j in range(1,(2*(n+1)) ):
        if(i == j or j == n+1 or i == ((2*(n+1))-j)):
           print("*", end="")
        else:
           print( "0", end="")
    print()
```

Testcase 1:\
Input:

> 3

Output:

```python
*00*00*
0*0*0*0
00***00
```

Testcase 2:\
Input:

> 2

Output:

```python
*0*0*
0***0
```

Testcase 3:\
Input:

> 5

Output:

```python
*0000*0000*
0*000*000*0
00*00*00*00
000*0*0*000
0000***0000
```

# Question 18:

WAP to replace vowels with "#" in any given string.

```python
#solution
s=input()
l=["a","e","i","o","u","A","E","I","U","O"]
for i in s:
    if i in l:
        s=s.replace(i,"#")
print(s)
```

Testcase 1:\
Input:

> abcdefghiABCD

Ouput:

> #bcd#fgh##BCD

Testcase 2:\
Input:

> AAA11

Output:

> ####11

Testcase 3:\
Input:

> 121A

Ouput:

> 121#

# Question 19:

WAP to count the no of negative numbers in a given list.

```python
#solution
x=[int(i) for i in input().split()]
c=0
for i in x:
    if i<0:
        c+=1
print(c)
```

Testcase 1:\
Input:

> 1 2 -1 0 -1 -34

Output:

> 3

Testcase 2:\
Input:

> 1 2 -3 0 8 -1

Output:

> 2

Testcase 3:\
Input:

> 0 90 9 1

Output:

> 0

# Question 20:

WAP to check if a given no is Armstrong or not.
An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself

```python
#solution
n=int(input())
l=len(str(n))
c=0
for i in str(n):
    c+=(int(i))**l
if c==n:
    print("True")
else:
    print("False")
```

Testcase 1:\
Input:

> 111

Output:

> False

Testcase 2:\
Input:

> 153

Output:

> True

Testcase 1:\
Input:

> 371

Output:

> True

# Question 21:

WAP to print the sum of all the numbers given in a list.

```python
#solution
x=[int(i) for i in input().split()]
s=0
for i in x:
    s+=i
print(s)
```

Testcase 1:\
Input:

> 1 2 3 4 5

Output:

> 15

Testcase 2:\
Input:

> 1 3 9 0

Output:

> 13

Testcase 3:\
Input:

> 0 0 -45 9

Output:

> -36

# Question 22:

Write a Python Program for Check if all digits of a number divide it

```python
#solution
n=int(input())
c=0
for i in str(n):
    if n%(int(i))==0:
        c+=1
    else:
        print("No")
        break
if c==len(str(n)):
    print("Yes")
```

Testcase 1:\
Input:

> 54

Output:

> No

Testcase 2:\
Input:

> 122

Output:

> Yes

Testcase 3:\

> 5

Output:

> Yes

# Question 23:

Write a program which has a user defined function which accepts a string as input and
find the no of vowels and numbers in that string.

```python
#solution
s=input()
vl=["a","e","i","o","u","A","E","I","U","O"]
nl=["1","2","3","4","5","6","7","8","9","0"]
v=0
n=0
for i in s:
    if i in vl:
        v+=1
    elif i in nl:
        n+=1
print(v,n,sep=" ")

```

Testcase 1:\
Input:

> bshb46f8dg78g5yg6d

Output:

> 0 7

Testcase 2:\
Input:

> hello world 124

Output:

> 3 3

Testcase 3:\
Input:

> lo101

Output:

> 1 3

# Question 24:

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

# Question 25:

WAP to find the no of digits of a given no that are even.

```python
#solution
n=int(input())
c=0
for i in str(n):
    if int(i)%2==0:
        c+=1
print(c)
```

Testcase 1:

Input:

> 10

Output:

> 1

Testcase 2:

Input:

> 1211345

Output:

> 2

Testcase 3:

Input:

> 9998888777

Output:

> 4

# Question 26:

Wap to print the table of a given no.

```python
#solution
n=int(input())
for i in range(1,11):
    print(n,"X",i,"=",i*n)
```

Testcase 1:\
Input:

> 5

Output:

> 5 X 1 = 5\
> 5 X 2 = 10\
> 5 X 3 = 15\
> 5 X 4 = 20\
> 5 X 5 = 25\
> 5 X 6 = 30\
> 5 X 7 = 35\
> 5 X 8 = 40\
> 5 X 9 = 45\
> 5 X 10 = 50

Testcase 2:\
Input:

> 2

Output:

> 2 X 1 = 2
> 2 X 2 = 4\
> 2 X 3 = 6\
> 2 X 4 = 8\
> 2 X 5 = 10\
> 2 X 6 = 12\
> 2 X 7 = 14\
> 2 X 8 = 16\
> 2 X 9 = 18\
> 2 X 10 = 20

# Question 27:

given a list of numbers count which are multiples of 3 but not divisible by 2.

```python
#solution
x=[int(i) for i in input().split()]
c=0
for i in x:
    if i%3==0 and i%2!=0:
        c+=1
print(c)
```

Testcase 1:\
Input:

> 1 3 45 76

Output:

> 2

Testcase 2:\
Input:

> 12 9 36 24

Output:

> 1

Testcase 3:\
Input:

> 0 1 99 30 27 67

Output:

> 2

# Question 28:

WAP to print the following pattern.
N will only be odd.

```python
#for n=5
  *
 ***
*****
 ***
  *
```

```python
n=int(input())
for i in range(((n+1)//2), 0, -1):
    for j in range(i, 1, -1):
        print(" ",end="")
    for k in range(i, ((n+1)//2)+1):
        print("*",end="")
    for m in range(i, ((n+1)//2), 1):
        print("*",end="")
    print()

for i in range(((n-1)//2), 0, -1):
    for j in range(i, ((n+1)//2), 1):
        print(" ",end="")
    for k in range(0, i):
        print("*",end="")
    for m in range(1, i):
        print("*",end="")
    print()
```

Testcase 1:\
Input:

> 3

Output:

```python
 *
***
 *
```

Testcase 2:\
Input:

> 1

Output:

```python
*
```

Testcase 3:\
Input:

> 7

Output:

```python
   *
  ***
 *****
*******
 *****
  ***
   *
```

# Question 29:

Given a list of numbers replace each number with the product of its digits and find the maximum of the new list formed.

```python
def product(n):
    p=1
    for i in str(n):
        p*=int(i)
    return p

l=[int(i) for i in input().split()]
new=[]
for i in l:
    new.append(product(i))
print(max(new))
```

Testcase 1:\
Input:

> 1 234 23 65

Output:

> 30

Testcase 2:\
Input:

> 1111 550 98 4

Output:

> 72

Testcase 3:\
Input:

> 0 857 30222

Output:

> 280

# Question 30:

WAP to print the following pattern for any general n.

```python
#For n=4 this is the pattern.
1111
000
11
0
```

```python
#solution
n=int(input())
for i in range(1,n+1):
    for j in range(1,n-i+2):
        if i%2==1:
            print(1,end="")
        else:
            print(0,end="")
    print()
```

Testcase 1:\
Input:

> 1

Output:

> 1

Testcase 2:\
Input:

> 2

Output:

```python
11
0
```

Testcase 3:\
Input:

> 5

Output:

```python
11111
0000
111
00
1
```
