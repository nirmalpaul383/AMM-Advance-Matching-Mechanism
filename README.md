# AMM-Advance-Matching-Mechanism
a small function that matches two binary arrays and returns a matching percentage based on the user-specified matching accuracy rate(How accurately to match).
Basically, it takes two binary arrays, shrinks them into 2 new arrays (processed arrays), compares those shrunk arrays, and returns a matching percentage(%).
The user can control how much the raw arrays will be shrunk with the rate of matching accuracy.

I have already explained this concept in the **Diagram** of this project.

![AMM Diagram Page 1](https://raw.githubusercontent.com/nirmalpaul383/AMM-Advance-Matching-Mechanism/main/Diagram%20P1.jpg)
![AMM Diagram Page 2](https://raw.githubusercontent.com/nirmalpaul383/AMM-Advance-Matching-Mechanism/main/Diagram%20P2.jpg)

............................................................................................................................

To use this JavaScript file you can either download/clone it and then use 'amm.js' file or use it directly using `https://cdn.jsdelivr.net/gh/nirmalpaul383/AMM-Advance-Matching-Mechanism/amm.js`. After downloading/including this JS file use the **match(input1, input2, rateOfAccuracy)**
```javascript
let input1 = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1]; //Example BitArray1
let input2 = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1]; //Example BitArray2


match(input1, input2, 1) //100% rate of matching Accuracy ; returns 40%
match(input1, input2, 2) //50% rate of matching Accuracy ; returns 80%
match(input1, input2, 4) //25% rate of matching Accuracy ; returns 100%
``` 
function to use it, where input1 refers to "BitArray1" , input2 refers to "BitArray2" and rateOfAccuracy refers to "user-specified matching accurecy rate"(How accuretly to match)

............................................................................................................................

This project is originally made by me(N Paul). My github profile https://github.com/nirmalpaul383/
My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
Facebook Page https://facebook.com/a.new.way.Technical/

............................................................................................................................

This is an open source program . You are welcomed to modify it... If you want to support me please
give a like to our facebook page https://facebook.com/a.new.way.Technical/ Please give a star to this project♥.
