# Level 7

## <ins> Recursion . A beginning while ending</ins>

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Using a recursive algorithm, certain problems can be solved quite easily

---

### Question 1

> Print all possible combinations of r elements in a given array of size n

```python
# Program to print all combination
# of size r in an array of size n

# The main function that prints all
# combinations of size r in arr[] of
# size n. This function mainly uses
# combinationUtil()
def printCombination(arr, n, r):

    # A temporary array to store
    # all combination one by one
    data = [0] * r

    # Print all combination using
    # temporary array 'data[]'
    combinationUtil(arr, n, r, 0, data, 0)

''' arr[] ---> Input Array
n     ---> Size of input array
r     ---> Size of a combination to be printed
index ---> Current index in data[]
data[] ---> Temporary array to store
            current combination
i     ---> index of current element in arr[]     '''
def combinationUtil(arr, n, r, index, data, i):

    # Current combination is ready,
    # print it
    if (index == r):
        for j in range(r):
            print(data[j], end = " ")
        print()
        return

    # When no more elements are
    # there to put in data[]
    if (i >= n):
        return

    # current is included, put
    # next at next location
    data[index] = arr[i]
    combinationUtil(arr, n, r, index + 1,
                    data, i + 1)

    # current is excluded, replace it
    # with next (Note that i+1 is passed,
    # but index is not changed)
    combinationUtil(arr, n, r, index,
                    data, i + 1)

# Driver Code
if __name__ == "__main__":
    arr = [1, 2, 3, 4, 5]
    r = 3
    n = len(arr)
    printCombination(arr, n, r)
```

---

### Question 2

> Given the Binary code of a number as a decimal number, we need to convert this into its equivalent Gray Code

```
Examples:

Input: 1001
Output: 1101
Explanation: 1001 -> 1101 -> 1101 -> 1101

Input: 11
Output: 10
Explanation: 11 -> 10

```

<ins>Answer:</ins>

```python
def binary_to_gray(n):
    if not(n):
        return 0

    # Taking last digit
    a = n % 10

    # Taking second last digit
    b = int(n / 10) % 10

    # If last digit are opposite bits
    if (a and not(b)) or (not(a) and b):
        return (1 + 10 * binary_to_gray(int(n / 10)))

    # If last two bits are same
    return (10 * binary_to_gray(int(n / 10)))


# Driver Code
binary_number = 1011101
print(binary_to_gray(binary_number), end='')
```
