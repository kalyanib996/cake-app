const  setLoggedInUser=(user,flag)=>{
    console.log("Inside action---setLoggedInUser")
    console.log(user,flag)
    
    var data={user,flag};

    return{
    type: 'SET_USER',
    data
    }
};

export default setLoggedInUser;