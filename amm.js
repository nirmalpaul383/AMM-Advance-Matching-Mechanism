
/** This AMM(Advance Matching Mechanism) Project is originally made by me(N Paul).
 My github profile https://github.com/nirmalpaul383/
 My youtube page https://www.youtube.com/channel/UCY6JY8bTlR7hZEvhy6Pldxg/
 This is an open source program . You are welcomed to modify it...
 If you want to support me please give a like to our facebook page 
 https://facebook.com/a.new.way.Technical/  **/


//The main function that will match two binary arrays (with user-specific matching accuracy rate) and returns the matching percentage
function match(input1, input2, rateOfAccuracy) {

  //Raw(input) arrays will be shortened(converted to "Processed Array") according to accuracy rate
  let processedArray1 = bitArrayShorter(input1, rateOfAccuracy)
  let processedArray2 = bitArrayShorter(input2, rateOfAccuracy)

  // After matching the elements of two processed arrays one by one, the matching result will be kept in this array.
  let isMatched = [];

  //This loop checks each element of the two processed arrays one by one to see if they match or not.
  //It is assumed that the number of elements in the two raw arrays is the same
  for (let i = 0; i <= (processedArray1.length - 1); i++) {

    //If the value of the same indexed element of "processed array" 1 and 2 is the same, it will be recorded in the "isMacthed" array as True.
    if ((processedArray1[i] === processedArray2[i])) {

      isMatched.push(true);

    }

    //If the value of the same indexed element of "processed array" 1 and 2 is not the same, it will be recorded in the "isMacthed" array as False.
    else {

      isMatched.push(false);

    }

  }


  //To record the number of occurrences of True in isMatch array
  let NoOfOccurrencesOfTrue = 0;
  for (let i = 0; i <= (isMatched.length - 1); i++) {
    if (isMatched[i] === true) {
      NoOfOccurrencesOfTrue += 1;
    }
  }
  //To return the matching "%" between two Processed Array(after comparing each element)
  return (NoOfOccurrencesOfTrue / isMatched.length) * 100 + "%";

};



//This "rate" will determine how accurately to match the binary array.
//According to this rate, this function will shrink the raw array(s) . Default value of rate is 1
function bitArrayShorter(inputArray, rate = 1) {

  // This array will be used latter to store new processsed array(After shortening the array with the specified "rate")
  let temp = [];

  /* The total number of complete groups(integer number groups) that can be made with inserting the specified number("rate") of elements of the array("inputArray") in each group */
  let noOfCompleteGroup = Math.ceil(inputArray.length / rate);

  // The value of the current index is initialize to 0. It will be used to index each element of the original("inputArray") array
  let currentIndex = 0;

  // with the help of "temp" (Previously created as blank array) ,This for loop creates an array("temp[]") with as many elements as the value of the "noOfCompleteGroup" variable.
  /* (noOfCompleteGroup - 1) because "noOfCompleteGroup" is new array's length. array's index always start from 0 but array's length start from 1 */
  for (let i = 0; i <= (noOfCompleteGroup - 1); i++) {


    let reaction = false; //reaction = Reaction Between One,Two or More Neighboring Elements


    /* The value of the "Reaction" variable will change after the reaction of One,Two or More neighboring elements (of old(inpu1) array), depending on the "rate" variable.
    e.g: If the value of the rate variable is 2, then the reaction of 2 neighbouring elements of the old array is taken. */
    //Because of "j=1" and "j<=rate" The loop runs exactly as many times as the value of rate variable.
    for (let j = 1; j <= rate; j++) {
      //The function of this for loop is as follows: As the value of the "rate" variable, the same number of elements of the old("inputArray") array will be reacted together.

      reaction = reaction || inputArray[currentIndex]; //The reaction is based on the logical OR.

      currentIndex += 1; // Since the "currentIndex" is a global variable, the position of the elements of the old("inputArray") array(Which are already reacted) remains recorded.

    }
    temp[i] = reaction // The value of each element of the new(processed) array will be set according to the value of the reaction variable

    reaction = false //after getting the value of the reaction variable; this value is changed to the default value("False" value) for reusing again.

  }

  return temp //Returns the new/processed Array
};


//Example Usage(Comparing the two Bit Arrays)
let bitNodeArray1 = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1];
let bitNodeArray2 = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1];
console.log(`Comparing two binary Arrays.
  1st --> [0, 1, 1, 0, 1, 0, 1, 0, 1, 1] 
  2nd --> [0, 0, 0, 1, 1, 1, 1, 1, 0, 1]
  `)
console.log("Example 1 (Comparing with 100% Accuracy): " + match(bitNodeArray1, bitNodeArray2, 1) +" matching") //100% rate of Accuracy
console.log("Example 2(Comparing with 50% Accuracy): " + match(bitNodeArray1, bitNodeArray2, 2) +" matching") //50% rate of Accuracy
console.log("Example 3(Comparing with 25% Accuracy): " + match(bitNodeArray1, bitNodeArray2, 4) +" matching") //25% rate of Accuracy