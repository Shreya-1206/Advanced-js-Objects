const book1 = {
    name : "DO EPIC SHIT",
    cost :300,
    author: "Ankur Warikoo",
    AddressWrite : {
        location : {
            lat : 23.67,
            long : 45.89
        }
    }
}

book1.cost = 320;
Object.seal(book1);
book1.review = "Good !!";
book1.AddressWrite.lat = 24.67;
console.log(book1);

const deepSeal = (obj) => {
    OBject.values().forEach(elem=> {
       typeof elem === 'object' && deepSeal(elem) 
    }); 

    return !Object.isSealed() && Object.seal()
}

