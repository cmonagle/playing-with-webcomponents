/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export default function arrayDiffer(arr1, arr2) {
    const operations = [];
    const workingArr = [
        ...arr1
    ];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === workingArr[i]) {
            continue;
        } else if (arr2[i + 1] === workingArr[i]) {
            workingArr.splice(i, 0, arr2[i]);
            operations.push({
                item: arr2[i],
                method: 'insertAfter',
                targetIndex: i - 1
            });
        } else if (arr2.length > workingArr.length) {
            operations.push({
                item: arr2[i],
                method: 'replaceChild',
                targetIndex: i
            });
        } else if (workingArr[i+1] === arr2[i]) {
            workingArr.splice(i, 1);
            operations.push({
                method: 'removeChild',
                targetIndex: i
            });
        } else if (arr2.length < workingArr.length) {
            workingArr[i] = arr2[i];
            operations.push({
                item: arr2[i],
                method: 'replaceChild',
                targetIndex: i
            });
        }
    }

    while (arr2.length < workingArr.length) {
        workingArr.splice(workingArr.length -1, 1);
        operations.push({
            method: 'removeChild',
            targetIndex: workingArr.length
        })
    }
    return operations;
}


// console.log(arrayDiffer(
//     ['zero', 'one', 'two'],
//     ['zero', 'one', 'one point five', 'two', 'three']
// ));
// console.log(arrayDiffer(
//     ['zero', 'one', 'one point five', 'two', 'three'],
//     ['zero', 'one', 'two']
// ));
console.log(arrayDiffer(
    ['item', 'one', 'one point five', 'two', 'three'],
    ['first', 'one', 'two']
));
