const book1 = {
    name : "DO EPIC SHIT",
    cost :300,
    author: "Ankur Warikoo",
}

console.log(Object.keys(book1));
console.log(Object.values(book1));
console.log(Object.entries(book1));

let chkValInObj = (obj, val) => {
    return (
        Object.values(obj).includes(val)
    )
};

console.log(chkValInObj(book1, 'Ankur Warikoo'));

for(let [key,val] of Object.entries(book1)){
    console.log(key,val);
}
