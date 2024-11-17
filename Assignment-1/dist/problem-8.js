"use strict";
{
    ;
    const validateKeys = (obj, keys) => {
        const result = keys.every(key => key in obj);
        return result;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", 'age']));
    //
}
