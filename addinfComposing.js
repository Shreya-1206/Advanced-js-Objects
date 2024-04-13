const stu = {
    name:"naina",
    class: "6th",
    address : "cuttck, college sqaure",
    detailsBus : {
         driverName : "Prakash",
         busNo : '4J89'
    },
    sideSubjectDetails : [
        {
            sub : "IT Technologies",
            teacher : "Aprti"
        },
        {
            sub : "Maths",
            teacher : "Amit"

        }
    ]
};

let {name :n, 
       class: c, 
       address :a, 
       detailsBus :{driverName, busNo}, 
       sideSubjectDetails :side } =  {

        ...stu,
        class : "7th"
}

console.log(`Side Subjects : ${side.map((el) => `${el.sub} || ${el.teacher}  `)}`)
console.log(`class - ${stu["class"]}`)
console.log(c)

const basic= {
    id :90,
    name : "naina",
};

const bank = {
    bName: "Kotak",
    tNo: '12DR567890'
};

const fullD = {
    ...basic,
    ...bank,
    email : 'naina.12@gmail.com'
};
console.log(fullD);