# Element

This class is constructed using a value and an optional next parameters.\
The first argument provided will become the value.\
The second will become the next item in the list.\
If no second argument is provided, next will default to null.

# List

This class is constructed using an array parameter.\
If an array is provided then the items in the array are iterated over to create a linked list.\
Otherwise the head will default to null.

## List class methods

### add

This method takes in a nextValue\
It uses the new value to create a new list element, using the nextValue as the first argument and the current list head as the second.

### get length

This method creates initialises with a length variable set to 0 and a node set to the current list head.\
It then checks to see if the node is truthy.\
If it returns true then the length is increased by 1 and the node is set to the next potential item in the list.\
The while loop runs until this is no longer the true.\
Returns the length variable.

### toArray

This method is initialised with an empty array and a current variable set to the current list head.\
A while loop is then used to iterate over the list, pushing the current value to the array and setting the current variable to the next item in the list each time.\
Returns an array of values.

### reverse

This method is initialised with a new list (reversedList) and a current variable set to the current list head.\
A while loop is then used to iterate through over the original list, adding each item to the head of the reversedList and setting the current variable to the next list item of the original list each time.\
This causes the reversedList to become a reversed version of the original.\
Returns the new reversedList.