# Level 2

## <ins>Welcome to the land of datatypes</ins>

In computer science and computer programming, a data type (or simply type) is a set of possible values and a set of allowed operations on it.
Now usually most programming languages , name these common data types

1. String : A string is any series of characters that are interpreted literally by a script
2. Integer (int): The INTEGER data type stores whole numbers that range from -2,147,483,647 to 2,147,483,647 for 9 or 10 digits of precision.
3. Floating Point Number : A number without a fixed number of digits before and after the decimal point
4. Character (char): Characters are simple alphabets like a, b, c, d...., A, B, C, D,....., but with an exception. In computer programming, any single digit number like 0, 1, 2,....and special characters like $, %, +, -.... etc., are also treated as characters and to assign them in a character type variable, you simply need to put them inside single quotes.

---

So now with this knowledges , see if you can tackle these questions.

### Question 1

> You are given a task to make a simple script in a python backend framework that sends a email to a particular person , with a message that depends on the user inputs . You are given the function , and now you simply need to return a string that represents the final email .
> NOTE:
> firstName should be title case, lastName should be title case , price should be to two decimal place , subscription should be uppercase ,and the user id should be in double quotes.

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
    return f"""
    Dear {firstName.title()} {lastName.title()} , You have just confirmed an order (Order Id of {orderId}) under the
    UserId of \"{userId}\" , your {subscription.upper()} package gives you a final price of

    $ {price:.2f}

    this is valid till {validTill}

    and the items brought are {" ,".join(itemsBrought)}

    Regards,
    Dipanshu Singh
    """
if __name__=='__main__':
    print(get_email_string("Rohan","Ali",8283213,232132,"Gold",102.390,"Tuesday",["water","life"]))

```

---

### Question 2

> Given two strings, the task is to find if a string can be obtained by rotating another string two places.

> Input: string1 = “amazon”, string2 = “azonam”
> Output: Yes
> Explanation: Rotating string1 by 2 places in anti-clockwise gives the string2.

> Input: string1 = “amazon”, string2 = “onamaz”
> Output: Yes
> Explanation: Rotating string1 by 2 places in clockwise gives the string2.
> <ins>Answer:</ins>

```python
# Python 3 program to check if a string
# is two time rotation of another string.

# Function to check if string2 is
# obtained by string 1
def isRotated(str1, str2):

	if (len(str1) != len(str2)):
		return False

	if(len(str1) < 2):
		return str1 == str2
	clock_rot = ""
	anticlock_rot = ""
	l = len(str2)

	# Initialize string as anti-clockwise rotation
	anticlock_rot = (anticlock_rot + str2[l - 2:] +
									str2[0: l - 2])

	# Initialize string as clock wise rotation
	clock_rot = clock_rot + str2[2:] + str2[0:2]

	# check if any of them is equal to string1
	return (str1 == clock_rot or
			str1 == anticlock_rot)

# Driver code
if __name__ == "__main__":

	str1 = "geeks"
	str2 = "eksge"
if isRotated(str1, str2):
	print("Yes")
else:
	print("No")

# This code is contributed by ita_c

```

Integers in Python can be as big as the bytes in your machine's memory. There is no limit in size as there is: 2<sup>31</sup>-1 (c++ int) or 2<sup>63</sup>-1 (C++ long long int).

As we know, the result of _a<sup>b</sup>_ grows really fast with increasing _b_.

Let's do some calculations on very large integers.

### Question 3

> Read four numbers, _a_,_b_ ,_c_ , and _d_, and print the result of _a<sup>b</sup> + c<sup>d</sup>_.

> Sample Input  
> 9
> 29
> 7
> 27  
> Sample Output  
> 4710194409608608369201743232

<ins>Answer</ins>:

```python
import math
a=int(input())
b=int(input())
c=int(input())
d=int(input())
e=(a**b)+(c**d)
print(e)
```

---

### Question 4

> 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
> Find the sum of all numbers which are equal to the sum of the factorial of their digits given a range N. Try solving without lists

<ins>Answer:</ins>

```python
import math

def check_sum(number):
    list_digits = list(str(number))
    check_sum = sum([math.factorial(int(digit)) for digit in list_digits])
    return check_sum == number

def final_sum(counter_min=3, counter_max=99999000):
    """Find the sum of all the numbers."""
    final_sum = 0
    for counter in range(counter_min, counter_max):
        if check_sum(counter):
             final_sum += counter
    return final_sum

if __name__ == '__main__':
    print(final_sum())

```

---

---

Now after these questions , we can now move to the next level .Because it will be clear that you have a solid understanding of basic datatypes like strings and integers.

<button name="button" onclick="1_level.md">Next Level</button>
