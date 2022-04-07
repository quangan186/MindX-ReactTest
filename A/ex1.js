function allLongestStrings(inputArray) {
    const wordLength = inputArray.map( word => word = word.length);
    const maxArray = [];
    const res = [];
    maxArray.push(Math.max(...wordLength));
    for (let i = 0; i < inputArray.length; i++){
        for (let j = 0; j < maxArray; j++){
            if (inputArray[i].length == maxArray[j]){
                res.push(inputArray[i]);
            }
        }
    }
    return res;
}
console.log(allLongestStrings( ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]))
