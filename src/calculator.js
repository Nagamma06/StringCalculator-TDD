const add = (numbers)=>{
    if(numbers.length == 0 ) return 0; // for empty string
    
    if(numbers.length == 1) return parseInt(numbers); // for only one number 

    // code for more than one number
    else {
        let delimiter = "\\n|,";
        //code for pattern : "//[delimiter]\n[numbers…]"
        if(numbers.startsWith('//')){
            const newlineIndex = numbers.indexOf('\n')
            delimiter= numbers.slice(2,newlineIndex);
            numbers = numbers.slice(newlineIndex+1); //As per pattern number array starts after the new line character
        }
        numbers = numbers.split(new RegExp(delimiter)) //creates an array of strings
        const numArray = numbers.map(Number); //converts a string array to a number array

        const negativeNumbers = numArray.filter(num => num < 0) // Creates an array of negative numbers
        if(negativeNumbers.length > 0){
          throw new Error(`negative values not allowed: ${negativeNumbers.join(',')}`);
        }
        // ignore number which is greater than 1000
        return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0); // sum of all numbers

    }
}

export {add};