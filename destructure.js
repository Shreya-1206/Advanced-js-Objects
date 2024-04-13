const {name, age, address, phone, email, gender, isAdult, hobbies}= {
    name :"jon",
    age : 20,

    address : "seoul",
    phone : "010-0000-0000",
    email : "john.c.calhoun@examplepetstore.com",
    gender : "male",
    isAdult : true,
    hobbies : [
        {
        proffes : "coding",
        interest : "drawing" }
    ],   
};
console.log(`His Hobies : ${hobbies.map((el) => `${el.proffes} , ${el.interest}`)}`)

// using obj destructure to access nested 
const obj = {
    name:"naina",
    class: "6th",
    address : "cuttck, college sqaure",
    detailsBus : {
         driverName : "Prakash",
         busNo : '4J89'
    }
};
const {name : stName, detailsBus : {driverName : dName, busNo}, ...rest} = obj;
console.log(dName);
console.log(busNo);
console.log(stName);
console.log(rest);
