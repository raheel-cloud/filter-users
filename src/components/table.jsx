import { useState } from "react";
import { useEffect } from "react";
import InputField from "./inputfield"


function Table(){

    const [users, setUsers]= useState([]);
    
    useEffect(()=>{   
      getData()
     }, [])
    async function getData(){
     let  url =  "https://jsonplaceholder.typicode.com/users";
      fetch(url).then((response)=> response.json()).then((data)=> setUsers(data));
      
      
    }
   
    let keyword;
    const [foundUsers, setFoundUsers] = useState(users);
  
    const filter = (e) => {
      keyword = e.target.value;    
    };
    function togglechange(){
  
    if (keyword !== '') {
        const results = users.filter((user) => {
          return user.name.toLowerCase().startsWith(keyword.toLowerCase());
          
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(users);
        
      }
  
    }
return(
    <div>
<h1>Users Information</h1>
<InputField filter={filter} togglechange={togglechange} foundUsers={foundUsers} users={users}/>

    
    <table className="table">
        <thead>
        <tr>
            <th> Id</th>
            <th>Name</th>
            <th>Gmail</th>
            <th> Address </th>
            <th> Company</th>
            <th>Action</th>
            
        </tr>
        </thead> 
      <tbody id="table-body">
          {foundUsers==0?users.map((element, index)=>
          
          <tr key={index}>
          <td>{element.id} </td>
          <td>{ element.name}  </td>
          <td> {element.email}</td>
          <td>{element.address.street},{element.address.city}, {element.address.zipcode} </td>
          <td> {element.company.name}</td>
          <td> <a href="https://github.com/raheel-cloud" className=" btn btn-primary" target="_blank"> <i className="bi bi-eye-fill"></i> View Profile</a> </td>
       
    </tr>
          
          ):foundUsers.map((element, index)=>
          
          <tr key={index}>
          <td>{element.id} </td>
          <td>{ element.name}  </td>
          <td> {element.email}</td>
          <td>{element.address.street},{element.address.city}, {element.address.zipcode} </td>
          <td> {element.company.name}</td>
          <td> <a href="https://github.com/zubair3395" className=" btn btn-primary" target="_blank"> <i className="bi bi-eye-fill"></i> View Profile</a> </td>
       
    </tr>)}
      
      </tbody>     
    </table>
    </div>
)

}

export default Table