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

### Author By Aditya (Github Profile)[https://github.com/Strarist]
