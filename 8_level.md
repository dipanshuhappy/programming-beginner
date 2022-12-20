# Level 8

## <ins> An Intro to Queue and Stacks </ins>

- A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

- Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out)

### Question 1

Now stack are used by compilers to know if a arithematic operation has a balance bracket or not . See if you can solve a similar problem

> A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].  
> Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().  
> A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].  
> By this logic, we say a sequence of brackets is balanced if the following conditions are met:  
> It contains no unmatched brackets.
> The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

**Function Description**

Complete the function isBalanced in the editor below.

isBalanced has the following parameter(s):

string s: a string of brackets

**Returns**

string: either YES or NO

**Input Format**

The first line contains a single integer _n_, the number of strings.
Each of the next _n_ lines contains a single string _s_, a sequence of brackets.

```
Output Format

For each string, return YES or NO.

Sample Input

STDIN           Function
-----           --------
3               n = 3
{[()]}          first s = '{[()]}'
{[(])}          second s = '{[(])}'
{{[[(())]]}}    third s ='{{[[(())]]}}'
Sample Output

YES
NO
YES
```

<ins>Answer:</ins>

```python
def isBalanced(s):
    stack=[]
    if len(s)%2!=0:
        return 'NO'
    for i in s:
        if i in ['(','[','{']:
            stack.append(i)
        else :
            if not stack:
                return 'NO'
            if (i==')' and stack[-1]=='(') or (i==']' and stack[-1]=='[') or (i=='}' and stack[-1]=='{'):
                stack.pop()


    if stack:
        return 'NO'
    else:
        return 'YES'
```

---

> Implement Stack using Queues

<ins>Answer:</ins>

- The idea is to keep newly entered element at the front of ‘q1’ so that pop operation dequeues from ‘q1’. ‘q2’ is used to put every new element in front of ‘q1’.

* Follow the below steps to implement the push(s, x) operation:

- Enqueue x to q2.
- One by one dequeue everything from q1 and enqueue to q2.
- Swap the queues of q1 and q2.

* Follow the below steps to implement the pop(s) operation:

* Dequeue an item from q1 and return it.

```python
'''
    :param x: value to be inserted
    :return: None

    queue_1 = [] # first queue
    queue_2 = [] # second queue
   '''

#Function to push an element into stack using two queues.
def push(x):

    # global declaration
    global queue_1
    global queue_2
    queue_2.append(x)
    while len(queue_1)>0:
        queue_2.append(queue_1.pop(0))
    queue_1, queue_2 = queue_2, queue_1

    # code here


#Function to pop an element from stack using two queues.
def pop():

    # global declaration
    global queue_1
    global queue_2
    if len(queue_1) > 0:
        return queue_1.pop(0)
    else:
        return -1
```
