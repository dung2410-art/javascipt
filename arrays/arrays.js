let arr = [1,2,3,4,5,6,7,8,9,10]
let array = [
    {name: 'a', age: 25},
    {name: 'b', age: 26},
    {name: 'c', age: 25},
    {name: 'd', age: 28},
    {name: 'e', age: 29},
]
//filter,find

let filter1 = array.filter((item,index) => {
    // console.log('check item: ', item)
    // console.log('check index: ', index)
    return item && item.age === 25
});

console.log(filter1)