{
    //

    const getProperty = <T, P extends keyof T>(obj : T, key : P) : T[P]=> {
        return obj[key]
    } 

    const person = {name : 'Alice', age : 30}; 
    console.log(getProperty(person, 'name'));

    //
}