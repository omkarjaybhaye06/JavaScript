/*
Array--> An array is a special variable that can hold multiple values in a single variable using an ordered list.
         JavaScript arrays are dynamic, meaning they can grow and shrink in size as needed(resizable). 
         They can hold elements of different datatype, including numbers, strings, objects, and even other arrays.
*/
const arr1 = [4, 12, 10, 3];
const arr2 = ["Omkar", 35, true, "Jaybhaye"];
const arr3 = new Array(15, 29, 3, "Hello Welcome"); //if we declared array with new Array method, then don't need to give[]
console.log(arr1, arr2, arr3, arr1[2]);

// Array methods
console.log(arr1.length);
// const arr4 = arr1.push(5); //not right way to update onsole.log(arr4); //prints only 5 since we pointed arr4 to push operation only
arr1.push(5); //prints 4,12,10,3,5 //console.log(arr1);
arr1.pop(); //prints 4,12,10,3 //1 element got pop from array bucket
arr1.unshift(8); //element gets insert at start of array list. //8,4,12,10,3
arr1.shift(); //prints 4,12,10,3 //element gets removed of start index of array
console.log(arr1);

console.log(arr1.includes(14)); //return false as element 14 is not present in array
console.log(arr1.indexOf(10)); //return '2' as index of 10 is present and is at index 2
console.log(arr1.indexOf(7)); //returns -1 as index of value 7 is not present in array

//"join" adds all elements of array into a string.
//"join" adds all elements of array and converts into string with separator mentioned in join method. If no separator is mentioned, it adds comma by default.
const arr4 = arr1.join();
console.log(arr1, typeof arr1); //prints [4,12,10,3]-->object
console.log(arr4, typeof arr4); //prints 4,12,10,3 -->string

/*
Slice--> -extracts elements from start to end index mentioned(end excluded here) [negative indices are allowed]
         -Returns a shallow copy of a portion(original array is not modified)
Splice--> -add/remove/replace i.e. get elements from start to end (end included)
          -Modifies the original array by adding/removing.
*/
const arr5 = [6, 4, 18, 12, 22, 84, 57, 34];
console.log("Before Slice", arr5);
const arr6 = arr5.slice(1, 4); //excludes 4th index
console.log("After slice new array", arr6); //prints [4,18,12]
console.log("After Slice original array", arr5); //array remains same //prints [6,4,18,12,22,84,57,34] //prints all elements of array as slice doesn't modify original array

const arr7 = arr5.splice(1, 4); //includes 4th index
console.log("After slice new array", arr7); //prints [4,18,12,22]
console.log("After Slice original array", arr5); //array changes //prints [6,84,57,34] //prints elements except that are removed from splice
