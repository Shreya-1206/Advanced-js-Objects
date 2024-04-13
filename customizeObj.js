const stuObj = {
    id : 12303,
    name:"naina",
    class: "6th",
    address : "cuttck, college sqaure",
    detailsBus : {
         driverName : "Prakash",
         busNo : '4J89'
    }
};



Object.defineProperty(stuObj, 'address', {
    writable : false
});

Object.defineProperty(stuObj, 'id', {
    value : 190873,
    writable :true,
    enumerable : false
});

stuObj.address = "Bangalore";

//iterrate over the object we wont get the id property
for(let key in stuObj){
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(stuObj, 'name'));
let {
    id: i,
    name : n,
    class :c,
    address : a,
    detailsBus : {
        driverName : dName , busNo :bNo
    }
} = stuObj


console.log(`${n} has bus at 2:00 PM and his driver name is ${dName} bus number ${bNo}`);
console.log(`Address : ${a} her Id : ${i}`);



/* Another Example */

const User = function() {
    let name = '';
    Object.defineProperties(this, {
       id : {
        value : `UID-${parseInt(Math.random() * 100000)}`,
        enumerable : false
       },
       name : {
        enumerable : true,
        configurable : true, /// get accesser methods only enumerable and configarable can be used 
        get() {
          return name;
        },
        set(val) {
            name = val
        }
       }
     });
};

const shreya = new User();
shreya.name = "Shreya"
console.log(`id : ${shreya.id}`)
console.log(`Name : ${shreya.name}`)