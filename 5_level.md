# Level 5

## <ins>While True , Understand Loop</ins>

Most programming languages have 2 types of loops called , for loops and while loops .(Some have another called do while loops).  
The for loop is distinguished from other looping statements through an explicit loop counter or loop variable which allows the body of the loop to know the exact sequencing of each iteration.  
The while loop is used to repeat a section of code an unknown number of times until a specific condition is met. For example, say we want to know how many times a given number can be divided by 2 before it is less than or equal to 1.

### Question 1

> Generate a butterfly pattern using stars

> Input:  
> 12

> Output:

```
*                     *
* *                 * *
* * *             * * *
* * * *         * * * *
* * * * *     * * * * *
* * * * * * * * * * * *
* * * * * * * * * * * *
* * * * *     * * * * *
* * * *         * * * *
* * *             * * *
* *                 * *
*                     *
```

<ins>Answer:</ins>

```python
row = int(input("Enter number of rows (even): "))

n = row//2

print("Generated butterfly pattern is:\n")
# Upper part
for i in range(1,n+1):
    for j in range(1, 2*n+1):
        if j>i and j< 2*n+1-i:
            print("  ", end="")
        else:
            print("* ", end="")
    print()

# Lower part
for i in range(n,0,-1):
    for j in range(2*n,0,-1):
        if j>i and j< 2*n+1-i:
            print("  ", end="")
        else:
            print("* ", end="")
    print()
```

### Question 2

> WAP to find the NUMEROLOGY number for a person. NUMEROLOGY number is calculated by adding all the digits in his/her date of birth. As in 02-09-2005, all digits add upto 18 (2+9+2+5) and further to 9 (1+8) till it becomes a single digit number. This is the NUMEROLOGY number of a person.

```
Input:
10-01-2004
Output:
Numerology number is: 8
```

<ins>Answer:</ins>

```python
a=input().split('-')
s=0;c=0
for i in a:
    for j in i:
        s+=int(j)
while s>9:
    for i in str(s):
        c+=int(i)
    if c<10:
        s=c
        break
    else:
        s=c
        c=0
print('Numerology number is:',s)
```

Now after these questions , we can now move to the next level .Because we have covered an overall concept of loop statements.

<button name="button" onclick="1_level.md">Next Level</button>
