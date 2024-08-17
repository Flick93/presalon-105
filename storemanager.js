function save(item){
    let list = read()// getting [] or LS info
    list.push(item);//push the new item
    console.log(list);//obj
    //parse into and string the array
    let val=JSON.stringify(list);//parse obj into string 
    console.log(val); //string
    localStorage.setItem("services", val);
}

function read(){
    let data=localStorage.getItem("services"); //read local storage
    if (!data){//NOT data?
        //the LS is empty
        return []
    }else{
        //we have info on LS
        let list = JSON.parse(data); //convert string into an array
        //return theobj/array
        return list;
    
    }
}