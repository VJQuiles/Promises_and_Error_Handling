# Reflection Questions:

1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

    Handling errors for each individual API call helps us with debugging should we run into errors. We can attach secific messages to errors to help delopers working with the code identify problems more quickly. 


2. How does using custom error classes improve debugging and error identification?
   
   I touched on it in the answer to my first question, but custom errors can help give explicit details to a particular error that is occuring, helping whatever developers are working on the code to find solutions more quickly. 


3. When might a retry mechanism be more effective than an immediate failure response?

    I think of instances where a computer may have trouble connecting to the network, I think it would make sense to try(I assume that's what's happening when the circle of patience is spinning) and connect a couple times before stopping and throwing the error. 

Overall, I feel confident in saying I am walking away with a good undertsanding of the benefits of Promises, as well as the usefulness of error handling with promises. Conceptually, I see it, and i see why COach T said its best to understand it conceptually, before using actual API calls, because i anticiapte there is a plethora of issues we can have happen then. 