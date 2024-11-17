-->We will discuss about 2 important features of TypeScript, there are several benefits available by using different types of TypeScript, among them Union types and intersection types are very exciting. 

--> Union Types : A union type is a type that contains one or more type properties, more simply, it combines multiple types to form one type, providing a dynamic type in use, which is any property or value or type. Provides opportunities to use We can use dynamic type as needed where any type attribute is contained and the code is more flexible and reusable. The union types symbol is expressed with "|".
Example :
    type A = string; 
    type B = number; 
    type C = boolean; 
    type D = A | B | C ; 

Benefits of Union Types : 
* Dynamic Data Handling: Multiple data formats can be easily handled using Union type.
* Better Error Handling: Runtime errors can be reduced by using type guards.

--> Intersection Types : An intersection type is a type that combines one or more types or values ​​to reveal a new type, and all the attributes of the type are required in that new type. It is used when a variable needs to hold all properties of more than one type. The symbol of intersection types is expressed with "&".
Example : 
    type A = string; 
    type B = number; 
    type C = boolean; 
    type D = A & B & C ; 

Benefits of Intersection Types : 
* Combining Types: The intersection type is very useful for combining properties of different types.
* Type Safety: Intersection type ensures that all required properties are present.



Difference Between Union and Intersection Types : 
1. Union : A variable can be any one of several types.
1. Intersection : A variable will hold all type properties.

2. Union : The union types symbol is expressed with "|".
2. Intersection : The symbol of intersection types is expressed with "&".





