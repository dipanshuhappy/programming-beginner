# Question 1:

Use the filter() function to remove all even numbers from a list of integers?

```python
#solution
no = map(int,input().split())
new_no = list(filter(lambda x: x % 2 != 0, no))
print(new_no)
```

Testcase 1: \
Input:

> 1 2 3 4 5 6

Output:

> [1, 3, 5]

Testcase 2:\
Input:

> 12 32 33 7 91

Output:

> [33, 7, 91]

Testcase 3:\
Input:

> 0 11 7 52 7

Output:

> [11, 7, 7]

# Question 2:

WAP to remove all duplicates from a list in Python using the collections library?

```python
#solution
from collections import OrderedDict

def remove_duplicates(lst):
    return list(OrderedDict.fromkeys(lst))

original_list = [int(i) for i in input().split()]
print(remove_duplicates(original_list))

```

Testcase 1: \
Input:

> 1 2 3 4 5 12 3 1 1 1 1

Output:

> [1, 2, 3, 4, 5, 12]

Testcase 2:\
Input:

> 1 4 1 3 2 1 4 2 1

Output:

> [1, 4, 3, 2]

Testcase 3:\
Input:

> 1 2 3 4 5

Output:

> [1, 2, 3, 4, 5]

# Question 3:

Use the reduce() function to find the product of all elements in a list?

```python
#solution
from functools import reduce

my_list = [int(i) for i in input().split()]
result = reduce(lambda x, y: x * y, my_list)
print(result)

```

Testcase 1:\
Input:

> 1 2 3 4 5

Output:

> 120

Testcase 2:\
Input:

> 1 2 1 12 1 2

Output:

> 48

Testcase 3:\
Input:

> 100 200 300 0

Output:

> 0

# Question 4:

Use the map function to square all elements in a list?

```python
#solution
numbers = [int(i) for i in input().split()]
squared_numbers = map(lambda x: x**2, numbers)
print(list(squared_numbers))

```

Testcase 1:\
Input:

> 1 2 3 4 5

Output:

> [1, 4, 9, 16, 25]

Testcase 2:\
Input:

> 1 2 1 2 1

Output:

> [1,4,1,4,1]

Testcase 3:\
Input:

> 0 0 0 0

Output:

> [0,0,0,0]

# Question 5:

use the filter() function to extract all words from a list of strings that have a specific length?

```python
#solution
l=int(input())
words=[i for i in input().split()]
f_words = list(filter(lambda x: len(x) == l, words))
print(f_words)
```

Testcase 1:\
Input:

> 3\
> hel brad oj morten lul pk

Output:

> ['hel', 'lul']

Testcase 2:\
Input:

> 4\
> hell brad maxx bow pekka

Output:

> ['hell', 'brad', 'maxx']

Testcase 3:\
Input:

> 5\
> hello nice magic coffee new bennett

Output:

> ['hello', 'magic']

# Question 6:

WAP to count the occurrences of each element in a list in Python using the collections library?

```python
#solution
from collections import Counter

def count_occurrences(lst):
    return Counter(lst)

original_list = [int(i) for i in input().split()]
print(count_occurrences(original_list))

```

Testcase 1:\
Input:

> 1 2 3 4 1 2 3 4 1 2 2 5

Output:

> Counter({2: 4, 1: 3, 3: 2, 4: 2, 5: 1})

Testcase 2:\
Input:

> 1 2 3 1 2 1 1 2 1 2

Ouput:

> Counter({1: 5, 2: 4, 3: 1})

Testcase 3:\
Input:

> 1 2 3 4 5

Output:

> Counter({1: 1, 2: 1, 3: 1, 4: 1, 5: 1})

# Question 7:

Use the map function to convert a list of strings to uppercase?

```python
#solution
words = [str(i) for i in input().split()]
uppercase_words = map(lambda x: x.upper(), words)
print(list(uppercase_words))

```

Testcase 1:\
Input:

> hello world Hello

Output:

> ['HELLO', 'WORLD', 'HELLO']

Testcase 2:\
Input:

> 1 hello jjj

Output:

> ['1', 'HELLO', 'JJJ']

Testcase 3:\
Input:

> 1 2 3 4 out wide bolt

Output:

> ['1', '2', '3', '4', 'OUT', 'WIDE', 'BOLT']

# Question 8:

Use the reduce() function to find the sum of all even numbers in a list?

```python
#solution
from functools import reduce

my_list = [int(i) for i in input().split()]
result = reduce(lambda x, y: x + y, filter(lambda x: x % 2 == 0, my_list))
print(result)

```

Testcase 1:\
Input:

> 1 2 3 4 5

Output:

> 6

Testcase 2:\
Input:

> 2 4 6 8 10

Output:

> 30

Testcase 3:\
Input:

> 1 3 5 7 0

Output:

> 0

# Question 9:

WAP to find the common elements between two lists in Python using the collections library?

```python
#solution
from collections import Counter
def common_elements(lst1, lst2):
    c1 = Counter(lst1)
    c2 = Counter(lst2)
    return list((c1 & c2).elements())
list1 = [int(i) for i in input().split()]
list2 = [int(x) for x in input().split()]
print(common_elements(list1, list2))

```

Testcase 1:\
Input:

> 1 2 3 4\
> 3 4 5 6 7 8

Output:

> [3,4]

Testcase 2:\
Input:

> 1 2 1 12 1 1  
> 1 4 2 3 1

Output:

> [1, 1, 2]

Testcase 3:\
Input:

> 1 2 3 4 \
> 5 6 7 8

Output:

> []

# Question 10:

Use the map function to find the length of each string in a list?

```python
#solution
sentences = [i for i in input().split()]
lengths = map(lambda x: len(x), sentences)
print(list(lengths))

```

Testcase 1:

Input:

> hello world hi

Output:

> 5 5 2

Testcase 2:

Input:

> nice brad oj morten

Output:

> 4 4 2 6

Testcase 3:

Input

> 1234 123 121 1@

Output:

> [4, 3, 3, 2]

# Question 11:

use the map function to multiply each element in a list by a number?

```python
#solution
print("Enter the list:")
numbers = [int(i) for i in input().split()]
no=int(input("Enter the no: "))
multiplied_numbers = map(lambda x: x*no, numbers)
print(list(multiplied_numbers))

```

Testcase 1:\
Input:

> Enter the list:\
> 12 3 4 3\
> Enter the no: 3

Output:

> [36, 9, 12, 9]

Testcase 2:\
Input:

> Enter the list:\
> 1 2 3 4 5\
> Enter the no: 2

Output:

> [2, 4, 6, 8, 10]

Testcase 3:\
Input:

> Enter the list:\
> 5 4 6 12\
> Enter the no: 0

Output:

> [0, 0, 0, 0]

# Question 12:

Find all occurrences of a specific word in a string using the re library in Python?

```python
#solution
import re

def find_word(string, word):
    return re.findall(r"\b{}\b".format(word), string)
word=input("Enter the word you want to find: ")
example_string =input("Enter the string: ")
print(find_word(example_string, "example"))
```

Testcase 1:\
Input:

> Enter the word you want to find: hello\
> Enter the string: hello world hello world helloworld

Output:

> ['hello', 'hello']

Testcase 2:\
Input:

> Enter the word you want to find: bro\
> Enter the string: bro what bro whata are you doing bro

Output:

> ['bro', 'bro', 'bro']

Testcase 3:\
Input:

> Enter the word you want to find: false\
> Enter the string: print true in and not bool

Output:

> []

# Question 13:

Use the map function to find the absolute value of each element in a list of integers?

```python
#solution
numbers = [int(i) for i in input().split()]
absolute_numbers = map(abs, numbers)
print(list(absolute_numbers))

```

Testcase 1:\
Input:

> 1 -1 2 -4 0 1

Output:

> [1, 1, 2, 4, 0, 1]

Testcase 2:\
Input:

> -1 -1 -1 -1 -1

Output:

> [1, 1, 1, 1, 1]

Testcase 3:\
Input:

> 1 2 3 4 5

Output:

> [1, 2, 3, 4, 5]

# Question 14:

WAP to find the elements that are in list1 but not in list 2 in Python using the collections library?

```python
#solution
from collections import Counter

def not_common_elements(lst1, lst2):
    c1 = Counter(lst1)
    c2 = Counter(lst2)
    return list((c1 - c2).elements())

list1 = [int(i) for i in input().split()]
list2 = [int(x) for x in input().split()]
print(not_common_elements(list1, list2))
```

Testcase 1:\
Input:

> 1 2 3 4  
> 4 3 5 6

Output:

> [1, 2]

Testcase 2:

Input:

> 1 2 1 2 1 2\
> 1 3 4 3 2 1

Output:

> [1, 2, 2]

Testcase 3:

Input:

> 1 2 1 1 3\
> 1 2 1 1 3

Output:

> []

# Question 15:

Use the reduce() function to concatenate all elements in a list of strings?

```python
#solution
from functools import reduce

my_list =[i for i in input().split()]

result = reduce(lambda x, y: x + y, my_list)
print(result)

```

Testcase 1:\
Input:

> 1 45 hello wold

Output:

> 145hellowold

Testcase 2:\
Input:

> this is a hello world

Output:

> thisisahelloworld

Testcase 3:\
Input:

> fizzbuzz 1 1 1

Output:

> fizzbuzz111

# Question 16:

Use the filter() function to extract all elements from a list of floats that are within a certain range?

```python
#solution
floats=[float(i) for i in input().split(",")]
a=int(input("lower limit: "))
b=int(input("upper limit: "))
filtered_floats = list(filter(lambda x: a <= x <= b, floats))
print(filtered_floats)

```

Testcase 1:\
Input:

> 1.2, 2.5, 3.7, 4.1, 5.3\
> lower limit: 4\
> upper limit: 8

Output:

> [4.1, 5.3]

Testcase 2:\
Input:

> 4.1, 5.3, 6.4, 7.8, 8.9, 9.2, 10.1\
> lower limit: 5\
> upper limit: 8

Output:

> [5.3, 6.4, 7.8]

Testcase 3:\
Input:

> 1.2, 2.5, 3.7, 4.1, 5.3, 6.4, 7.8, 8.9, 9.2, 10.1\
> lower limit: 2\
> upper limit: 7

Output:

> [2.5, 3.7, 4.1, 5.3, 6.4]

# Question 17:

Use the filter() function to extract all elements from a list of strings that are palindrome?

```python
#solution
strings=[str(i) for i in input().split()]
filtered_strings = list(filter(lambda x: x == x[::-1], strings))
print(filtered_strings)
```

Testcase 1:\
Input:

> madam mom hello world

Output:

> ['madam', 'mom']

Testcase 2:\
Input:

> lol queue king 121

Output:

> ['lol', '121']

Testcase 3:\
Input:

> racecar dad lilu lily 111

Output:

> ['racecar', 'dad', '111']

# Question 18:

Use the filter() function to extract all elements from a list of strings that contain at least one uppercase letter?

```python
#solution
strings=[str(i) for i in input().split()]
filtered_strings = list(filter(lambda x: any(c.isupper() for c in x), strings))
print(filtered_strings)
```

Testcase 1:\
Input:

> hello WoW No print

Ouput:

> ['WoW', 'No']

Testcase 2:\
Input:

> 121 Hi no nine Chicago

Output:

> ['Hi', 'Chicago']

Testcase 3:\
Input:

> A 121D c-block

Ouput:

> ['A', '121D']

# Question 19:

use the filter() function to extract all elements from a list of strings that have a specific length and contain a specific letter?

```python
#solution
print("Enter the strings")
strings = [str(i) for i in input().split()]
length = int(input("length: "))
letter = input("enter letter: ")
filtered_strings = list(filter(lambda x: (len(x) == length) and (letter in x), strings))
print(filtered_strings)
```

Testcase 1:\
Input:

> Enter the strings\
> hello world Base light\
> length: 5\
> enter letter: o

Output:

> ['hello', 'world']

Testcase 2:\
Input:

> Enter the strings\
> hell boys brain le12\
> length: 4\
> enter letter: e

Output:

> ['hell', 'le12']

Testcase 3:\
Input:

> Enter the strings\
> bamboo brawle vegeta goku\
> length: 6\
> enter letter: a

Output:

> ['bamboo', 'brawle', 'vegeta']

# Question 20:

Use the reduce() function to find the longest string in a list of strings?

```python
#solution
from functools import reduce

my_list = [i for i in input().split()]
result = reduce(lambda x, y: x if len(x) > len(y) else y, my_list)
print(result)
```

Testcase 1:\
Input:

> hello word brad ok

Output:

> hello

Testcase 2:\
Input:

> nope yup aarigato sayonara hello

Output:

> sayonara

Testcase 3:\
Input:

> hi hello no 1234567

Output:

> 1234567

# Question 21:

WAP to remove all special characters including spaces from a string using the re library in Python?

```python
#solution
import re
def remove_special_characters(string):
    return re.sub(r"[^A-Za-z0-9]+", "", string)

example_string = input("enter the string: ")
print(remove_special_characters(example_string))

```

Testcase 1:\
Input:

> enter the string: This string has special characters like #$%^&\* in it.

Output:

> Thisstringhasspecialcharacterslikeinit

Testcase 2:\
Input:

> enter the string: This%string\*has#&&char@! print world #$%^&in it.

Output:

> Thisstringhascharprintworldinit

Testcase 3:\
Input:

> enter the string: all the string in @!!!!!!!!!!!!!!

Output:

> allthestringin

# Question 22:

Use the reduce function to group all the elements of a given list of integers according to their parity (even or odd).

```python
#solution
from functools import reduce

numbers = [int(i) for i in input().split(",")]
grouped = reduce(lambda x, y: {'even': x['even'] + [y],'odd':x['odd']} if y%2 == 0 else {'even': x['even'],'odd':x['odd'] + [y]}, numbers, {'even': [], 'odd': []})
print(grouped) # {'even': [], 'odd': []}

```

Testcase 1:\
Input:

> 1,2,3,4,5

Output:

> {'even': [2, 4], 'odd': [1, 3, 5]}

Testcase 2:\
Input:

> 1,1,1,1,1,2

Output:

> {'even': [2], 'odd': [1, 1, 1, 1, 1]}

Testcase 3:\

> 1,2,1,3,1,5,34,23,12

Output:

> {'even': [2, 34, 12], 'odd': [1, 1, 3, 1, 5, 23]}

# Question 23:

WAP to find the most common element in a list in Python using the collections library?

```python
#solution
from collections import Counter

def most_common(lst):
    return Counter(lst).most_common(1)[0][0]

original_list = [int(i) for i in input().split()]
print(most_common(original_list))
```

Testcase 1:\
Input:

> 1 2 3 1 2 3 1

Output:

> 1

Testcase 2:\
Input:

> 1 1 2 2 3

Output:

> 1

Testcase 3:\
Input:

> 2 2 2 1 1 1

Output:

> 2

# Question 24:

WAP to extract all email addresses from a string using the re library in Python?

Solution:

```python
#solution
import re

def extract_emails(string):
    return re.findall(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", string)

example_string = input("enter the string: ")
print(extract_emails(example_string))
```

Testcase 1:\
Input:

> This string has email addresses like example@gmail.com and example2@gmail.com in it.

Output:

> ['example@gmail.com', 'example2@gmail.com']

Testcase 2:\
Input:

> exapme@gmail.com example@gmail.com example2@gmail.com

Output:

> ['exapme@gmail.com', 'example@gmail.com', 'example2@gmail.com']

Testcase 3:\
Input:

> hello world i am email.

Output:

> []

# Question 25:

Use the map function to check if each element in a list of strings is a palindrome or not?

```python
#solution
words = [i for i in input().split()]
is_palindrome = map(lambda x: x == x[::-1], words)
print(list(is_palindrome))

```

Testcase 1:

Input:

> mom lol hello world

Output:

> [True, True, False, False]

Testcase 2:

Input:

> bob mam lulu 121

Output:

> [True, True, False, True]

Testcase 3:

Input:

> 111 121 1234

Output:

> [True, True, False]

# Question 26:

Use the reduce() function to find the most common element in a list?

```python
#solution
n=int(input())
for i in range(1,11):
    print(n,"X",i,"=",i*n)
```

Testcase 1:\
Input:

> [1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 4, 5, 4, 5]

Output:

> 5

Testcase 2:\
Input:

> 1 2 4 12 1 2 12 1 1 2 1 2 1

Output:

> 1

Testcase 3:\
Input:

> 1 2 3 4 5

Output:

> 5

# Question 27:

WAP to check if a string is a valid phone number using the re library in Python?
standard format:"555-555-5555"

```python
#solution
import re

def is_valid_phone_number(string):
    return bool(re.match(r"^\d{3}-\d{3}-\d{4}$", string))

phone_no =input("Enter the phone no: ")
print(is_valid_phone_number(phone_no))


```

Testcase 1:\
Input:

> Enter the phone no: 555-555-5555

Output:

> True

Testcase 2:\
Input:

> Enter the phone no: @@@-@@@-@@@@

Output:

> False

Testcase 3:\
Input:

> Enter the phone no: 333-3333-333

Output:

> False

# Question 28:

check if a string contains only small letters and numbers using the re library in Python?

```python
import re

def is_alpha_numeric(string):
    return bool(re.match(r"^[a-zA-Z0-9]*$", string))

string = input("Enter the string:")
print(is_alpha_numeric(example_string))

```

Testcase 1:\
Input:

> Enter the string:abc123

Output:

> True

Testcase 2:\
Input:

> Hello World

Output:

> False

Testcase 3:\
Input:

> hello@123

Output:

> False

# Question 29:

WAP to extract all dates from a string using the re library in Python.

```python
import re

def extract_dates(string):
    return re.findall(r"\d{1,2}/\d{1,2}/\d{4}", string)
string=input("Enter the string: ")

print(extract_dates(string))
```

Testcase 1:\
Input:

> This string has dates like 01/01/2022 and 12/31/2021 in it.

Output:

> ['01/01/2022', '12/31/2021']

Testcase 2:\
Input:

> Enter the string: 11/11/1111 is invalid and 01/09 is also invalid

Output:

> ['11/11/1111']

Testcase 3:\
Input:

> Enter the string: 11\90\9090 is not valid

Output:

> []

# Question 30:

WAP to replace all numbers in a string with a specific word using the re library in Python?

```python
#Solution
import re

def replace_numbers(string, word):
    return re.sub(r"\d+", word, string)

example_string =input("Enter the string: ")
word=input("Enter the word: ")
print(replace_numbers(example_string,word))

```

Testcase 1:\
Input:

> Enter the string: 1 2 3 4\
> Enter the word: hi

Output:

> hi hi hi hi

Testcase 2:\
Input:

> Enter the string: hi this string has 42 and 37\
> Enter the word: no

Output:

> hi this string has no and no

Testcase 3:\
Input:

> Enter the string: hello world\
> Enter the word: hi

Output:

> hello world

### Author By Parth Gupta (Github Profile)[https://github.com/Parth-Doc]
