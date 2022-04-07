// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < a.length; i++){
        if (i % 2 == 0){
            oddArray.push(a[i]);
        } else{
            evenArray.push(a[i]);
        }
    }
    const res = [];
    total1 = 0;
    total2 = 0;
    for (let num of oddArray){
        total1 += num;
    }
    for (let num of evenArray){
        total2 += num;
    }
    res.push(total1, total2);
    return res;
}

console.log(alternatingSums([60, 40, 55, 75, 64]))
