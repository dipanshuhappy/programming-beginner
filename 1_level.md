# Level 1

## <ins>A Tour of Variables</ins>

Variables in a computer program are analogous to "Buckets" or "Envelopes" where information can be maintained and referenced. On the outside of the bucket is a name. When referring to the bucket, we use the name of the bucket, not the data stored in the bucket.

> a = 3

> name = "Dipanshu Singh"

### Question 1

**What is the output of the code?**

```python
 /= 2
 print(/)
```

<ins>Answer</ins>:
Variables naming has a convention ... you can't name a varible a special character

### Question 2

**What is the naming convention of python programming**

<ins>Answer</ins>:
Variables in python follow snake case variable naming convention.
Eg.

> a_really_long_variable = 2

    Other Conventions include CamelCase ,which languages like Java , C++ use .

> aReallyLongVariable = 2

    Other data types like Classes and Constants will follow a different convention

> class CarModel

    (you will learn about classes soon )
    Examples of constants name convention is

> PI_VALUE = 3.14159265359

---

Now lets look at swapping of variables . You can swap two variables using a temporary variable as place holder .
Try the next question to see if you really understand how to swap variables .

### Question 3

```python
def swap_three_varibles(first,second,thrid):
    ## write the login here
    return first,second,thrid
if __name__=='__main__':
    print(swap_three_varibles(int(input()),int(input()),int(input())))

```

The Solution is gotten by using 2 temporary variables

<ins>Answer</ins>:

```python
    def swap_three_varibles(first,second,thrid):
    temp1 = first
    first = second
    second = thrid
    thrid = temp1
    return first,second,thrid
    if __name__=='__main__':
    print(swap_three_varibles(int(input()),int(input()),int(input())))
```

---

Now using temp variable isn't the only way to swap variables , you can use arithmetic operators to swap variables , see if you can figure it out .In the next question

### Question 3

> Swap 2 variables with numbers using arithmetic operators?

<ins>Answer</ins>:

```python

x = 10
y = 5

# Code to swap 'x' and 'y'

# x now becomes 15
x = x + y

# y becomes 10
y = x - y

# x becomes 5
x = x - y
print("After Swapping: x =", x, " y =", y)
```

---

Now finally lets see a practical application of this swapping of variables.

### Question 4

> You and your coding mate have been assigned to sort a list of library books on the basics of number of pages , your coding mate decided to tackle this problem using the following algorithm  
> 1.Starting from the first index, compare the first and the second elements.  
> 2.If the first element is greater than the second element, they are swapped.  
> 3.Now, compare the second and the third elements. Swap them if they are not in order.  
> 4.The above process goes on until the last element  
> Now your part is to implement the swap feature .

```python
#  sort in Python

def Sort(array):


  for i in range(len(array)):


    for j in range(0, len(array) - i - 1):


      if array[j] > array[j + 1]:

        # swapping elements



data = [-2, 45, 0, 11, -9]

Sort(data)

print('Sorted Array in Ascending Order:')
print(data)

```

<ins>Answer</ins>:

```python
    temp = array[j]
    array[j] = array[j+1]
    array[j+1] = temp
```

---

Now after these questions , we can now move to the next level .Because it will be clear that you have a solid understanding of variables.

<button name="button" onclick="1_level.md">Next Level</button>
