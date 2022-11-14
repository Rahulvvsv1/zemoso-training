    //  function getData(uId) {
    //  setTimeout(() => {
    // console.log("Fetched the data!");
    // return "skc@gmail.com";
    // }, 4000);
    // console.log("hello")
    // }
    

    // let promise = new Promise((resolve,reject)=>{
    //     let email = getData();
    //     if(email != undefined){
    //         resolve(email)
    //     }
    //     else{
    //         reject("something went wrong")
    //     }
    // })
  
    
    // let email;
    // console.log("start");
    // promise.then((msg)=>{
    //     email = msg
    //     console.log("Email id of the user id is: " + email);
    //     console.log("end");
    // }).catch((msg)=>{
    //     console.log(msg);})
   
    
 ///Second try
   let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched the data!");
        resolve( "skc@gmail.com");
        }, 4000);
    
})


     
 let email;
 console.log("start");
 promise.then((msg)=>{
     email = msg
     console.log("Email id of the user id is: " + email);
     console.log("end");
 }).catch((msg)=>{
     console.log(msg);})
