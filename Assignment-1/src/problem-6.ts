{
    //
    interface Profile {name : string; age : number; email : string}; 

    type ProflePertial = Partial<Profile>; 

    const updateProfile = (myProfile : Profile, update : ProflePertial) : Profile  => {

        return {...myProfile, ...update}
    }; 


    const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, {age: 26}));

    //
}