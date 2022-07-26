const arr1 = [1, 2, 3 , 4, 5, "Aa", "Bb", "Cc", "Dd", "Ee"];

arr1.push(["ABCs and 123s!"]);
console.log(arr1);

arr1.splice(4, 2);
console.log(arr1);

let newArr1 = arr1.slice(5, 3);
console.log(newArr1);

