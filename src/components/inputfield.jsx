function Inputfield(props){
    

    
    return(
        <div>
    <div className="row mx-5">
      <div className="col-md-6"><input className="form-control" onChange={props.filter}></input></div>
      <div className="col-md-6"><button  className="btn btn-success" onClick={props.togglechange} >Find Data</button></div>
    </div>
      <h5 className="mx-5 my-3">{props.foundUsers.length==0?props.users.length :props.foundUsers.length} Total users in table</h5>
        </div>
    )
}

export default Inputfield;