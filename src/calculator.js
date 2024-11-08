const add = (numbers)=>{
    if(numbers.length == 0 ) return 0; // for empty string
    
    if(numbers.length == 1) return parseInt(numbers); // for onle one number 

    // for more than one number
    else {
        let delimiter = "\\n|,";
        //for pattern : "//[delimiter]\n[numbers…]"
        if(numbers.startsWith('//')){
            const newlineIndex = numbers.indexOf('\n')
            delimiter= numbers.slice(2,newlineIndex);
            numbers = numbers.slice(newlineIndex+1); //As per pattern number array starts after the new line character
        }
        numbers = numbers.split(new RegExp(delimiter)) //creates an array of strings
        const numArray = numbers.map(Number); //converts a string array to a number array
        return numArray.reduce((sum, num) => sum + num, 0); // sum of all numbers

    }
}

export {add};