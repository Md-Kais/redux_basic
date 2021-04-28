const person ={
    name: "kais",
    address:{
        city:'thk',
        country:'bd'
    }
}
const updated={...person,
    name:'kaisa(kais er bon)',
    address:{
        city:'la',
        country:'america'
    }
}
console.log(updated);