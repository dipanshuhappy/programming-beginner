# Q1

Write a function called swap_variables that takes two variables as input and swaps their values.
def swap_variables(x, y):
x, y = y, x
return x, y

## Test Cases

```
x = 10
y = 20
x, y = swap_variables(x, y)
assert x == 20
assert y == 10

x = 'hello'
y = 'world'
x, y = swap_variables(x, y)
assert x == 'world'
assert y == 'hello'
```

# Q2

Write a function called is_integer that takes a variable as input and returns True if the variable is an integer and False otherwise.

## Solution

```python
def is_integer(x):
    return isinstance(x, int)
```

## Test Cases

```
assert is_integer(10) == True
assert is_integer(10.5) == False
assert is_integer('hello') == False
```

# Q3

Write a function called is_string that takes a variable as input and returns True if the variable is a string and False otherwise.
def is_string(x):
return isinstance(x, str)

## Test Cases

```
assert is_string('hello') == True
assert is_string(10) == False
assert is_string(['a', 'b', 'c']) == False
```

# Q4

Write a function called is_list that takes a variable as input and returns True if the variable is a list and False otherwise.

```python
def is_list(x):
    return isinstance(x, list)
```

## Test Cases

```
assert is_list(['a', 'b', 'c']) == True
assert is_list('hello') == False
assert is_list(10) == False
```

# Q5

Write a function called is_tuple that takes a variable as input and returns True if the variable is a tuple and False otherwise.

```python
def is_tuple(x):
    return isinstance(x, tuple)
```

## Test Cases

```
assert is_tuple(('a', 'b', 'c')) == True
assert is_tuple('hello') == False
assert is_tuple(10) == False
```

# Q6

Write a function called is_dictionary that takes a variable as input and returns True if the variable is a dictionary and False otherwise.

```
def is_dictionary(x):
    return isinstance(x, dict)
```

## Test Cases

```
assert is_dictionary({'a': 1, 'b': 2, 'c': 3}) == True
assert is_dictionary('hello') == False
assert is_dictionary(10) == False
```

# Q7

Write a function called is_set that takes a variable as input and returns True if the variable is a set and False otherwise.

```python
def is_set(x):
return isinstance(x, set)
```

## Test Cases

```
assert is_set({1, 2, 3}) == True
```

# Q8

```
waf to reverse a string
def reverse_string(string):
return string[::-1]
```

## TestCases

```
print(reverse_string('hello')) # 'olleh'
print(reverse_string('abcdef')) # 'fedcba'
print(reverse_string('12345')) # '54321'
```

# Q9

Write a function to check if a string is a palindrome (a word or phrase that reads the same backward as forward).

```
def is_palindrome(string):
return string == string[::-1]
```

## Test Cases

```
print(is_palindrome('racecar')) # True
print(is_palindrome('hello')) # False
print(is_palindrome('abcba')) # True
```

# Q10

Write a function to check if a string is a pangram (a sentence that contains every letter of the alphabet at least once).

```python
def is_pangram(string):
    alphabet = set(string.lower())
    return all(
        letter in alphabet for         letter    in string.lower())
```

## TestCases

```python
print(is_pangram('The quick brown fox jumps over the lazy dog')) # True
print(is_pangram('Hello, World!')) # False
print(is_pangra('abcdefghijklmnopqrstuvwxyz')) # True
```

# Q11

Write a function to check if a string is composed only of digits.

```python
def is_digits(string):
return all(char.isdigit() for char in string)
```

## TestCases

```
print(is_digits('12345')) # True
print(is_digits('12345abc')) # False
print(is_digits('123.45')) # False
```

# Q12

Write a function to remove all whitespace from a string.

```python
def remove_whitespace(string):
    return ''.join(string.split())
```

# TestCases

```
print(remove_whitespace(' abc def ')) # 'abcdef'
print(remove_whitespace('abc\n def\n\tghi')) # 'abcdefghi'
```

# Q13

Write a function to check if a string is composed only of uppercase letters.

```python
def is_upper(string):
return all(char.isupper() for char in string)
```

## Testcase

```
print(is_upper('ABC')) # True
print(is_upper('Abc')) # False
print(is_upper('123')) # False
```

# Q14

Write a function to check if a string is composed only of lowercase letters.

```python
def is_lower(string):
return all(char.islower() for char in string)
```

## Testcases

```

print(is_lower('abc')) # True
print(is_lower('Abc')) # False
print(is_lower('123')) # False
```

# Q15

Write a function to check if a number is odd.

```
def is_odd(n):
return n % 2 == 1
```

## TestCases

```
print(is_odd(3)) # True
print(is_odd(4)) # False
print(is_odd(-5)) # True
```

# Q16

Write a function to check if a number is even.

```python
def is_even(n):
return n % 2 == 0
```

```
print(is_even(3)) # False
print(is_even(4)) # True
print(is_even(-5)) # False
```

# Q17

Write a function to check if a number is prime.

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

```

## Test Cases

```
print(is_prime(2)) # True
print(is_prime(3)) # True
print(is_prime(4)) # False
print(is_prime(5)) # True
print(is_prime(6)) # False
```

# Q18

Write a function to find the greatest common divisor (GCD) of two numbers.

```python
def gcd(a, b):
if a == 0:
return b
if b == 0:
return a
return gcd(b, a % b)
```

## TestCases

```
print(gcd(3, 5)) # 1
print(gcd(12, 16)) # 4
print(gcd(60, 48)) # 12
```

# Q19

Write a function to check if a key is in a dictionary.

```
def is_key_in_dict(d, key):
return key in d
```

## TestCases

```
d = {'a': 1, 'b': 2}
print(is_key_in_dict(d, 'a')) # True
print(is_key_in_dict(d, 'c')) # False
```

# Q20

Write a function to check if a value is in a dictionary.

```python
def is_value_in_dict(d, value):
return value in d.values()
```

## TestCases

```
d = {'a': 1, 'b': 2}
print(is_value_in_dict(d, 1)) # True
print(is_value_in_dict(d, 3)) # False
```

# Q21

Write a function to get the value for a given key in a dictionary.

```python
def get_value(d, key):
return d[key]
```

## TestCases

```
d = {'a': 1, 'b': 2}
print(get_value(d, 'a')) # 1
print(get_value(d, 'c')) # KeyError
```

# Q22

Write a function to get the length of a dictionary.

```python
def dict_length(d):
return len(d)
```

## TestCases

d = {'a': 1, 'b': 2}
print(dict_length(d)) # 2

### Author Vinay (Github Profile)[https://github.com/codvinay87/]
