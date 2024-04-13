let stuObj = {
    id : 12303,
    name:"naina",
    class: "6th",
    address : "cuttck, college sqaure",
    detailsBus : {
         driverName : "Prakash",
         busNo : '4J89'
    },
    favcolor :["Yellow", "Purple"],
    location : {
        lat : 12.3456,
        lon : 12.3456
    }    
};

//deep copy function so that original doesn't change

function deepCopy(obj) {
 let tempObj = {};

 for (let key in obj) { //here obj[key] means value of a property
    tempObj = {
        ...tempObj,
       [key] : typeof obj[key] === 'object' && !Array.isArray(obj[key]) ? {...deepCopy(obj[key])} 
       : typeof obj[key] === 'object' && Array.isArray(obj[key]) ? [...obj[key]]

       : obj[key]
    }
 }
 return tempObj;
}

let stuObjCopy = deepCopy(stuObj);
//change edit the properties value and chk if original is changed
stuObjCopy.name= "Naina Talwar";
stuObjCopy.location.lat = 13.3456;
stuObjCopy.favcolor.push("Blue");


console.log(`Original Student details :`);
console.log(stuObj);
console.log(`Copy of Student details :`);
console.log(stuObjCopy);