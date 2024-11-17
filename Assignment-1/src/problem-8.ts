{
    //
    interface Person {name : string; age : number; email : string}; 

    const validateKeys = <T extends Person> (obj : T, keys : Array<keyof T>) : boolean => {
        const result = keys.every(key => key in obj)
        return result
    }


    const person : Person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name",'age']));

    //
}