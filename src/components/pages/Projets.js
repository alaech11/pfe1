import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
/*import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";*/
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'







 function Projets(){
  
    
 /*
    const colums =[
        {dataField:'id', text: 'Id'},
        {dataField:'name', text: 'Name', sort: true, filter: textFilter()},
        {dataField:'username', text: 'Username',sort: true,filter: textFilter()},
        {dataField:'email', text: 'Email',sort: true,},
        {dataField: '', text: "Descreption"},
        {dataField: '', text: "filière",filter: textFilter()},
        {dataField: '', text: "Postuler"}
        
    ]

  const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText : '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    })
/}*/
  

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(result => setUserList(result))
  .catch(error => console.log(error))
},[])

   const [userList ,setUserList] = useState([]);
    const [query, setQuery] = useState("")

    const search = (userList) =>{
        return userList.filter((item) => item.name.toLowerCase().includes(query) || item.username.toLowerCase().includes(query) /*|| item.filière.toLowerCase().includes(query)*/)
    }
    return (
        
        <><img src='images/logoM.jpg' alt='logo'autoPlay loop muted/>
        <div>
           
<div className="container ">
   <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">   
    {/**   <BootstrapTable 
      bootstrap4 
      keyField="id" 
      columns={colums} 
      data={userList}
      pagination={pagination}
      filter={filterFactory()}
      /> */}
       
       
       <div className="row" >
            <div className="table-responsive " >
  




  <br></br>< div className='form-group mb-3'>
   <h1>Projets de fin d'études 2022/2023</h1>

  <span>Filtre :</span>
  <br></br>
  <input 
    type="text"
    placeholder="chercher..."
    onChange={(e) => setQuery(e.target.value.toLowerCase())}
    className='form-control'/> 

          </div> 

          
         
          

 
                 <table  className="table table-striped table-hover table-bordered">
                 <thead>
                <tr>
                  <th>Id</th>
                  <th>Sujet</th>
                  <th>Encadrant</th>
                  <th>Email-Encadrant</th>
                  <th>Descreption</th>
                  <th>Filière</th>
                  <th>Postuler</th>
                </tr>
                </thead>
                <tbody >
                {
                    userList && userList.length> 0 ?
                    search(userList).map((usr) =>
                        <tr key={usr.id} >
                            
                            <td>{usr.id}</td>
                            <td> {usr.name}</td>
                            <td> {usr.username}</td>
                            <td> {usr.email}</td>
                            <td> {usr.descreption}</td>
                            <td> {usr.filière}</td>
                            <td> <a href="/postuler" className="view" title="Postuler" data-toggle="tooltip" ><i className="fa-solid fa-circle-plus"></i></a>
                                 <a href="/description" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></a>
                            </td>
                        </tr>
                        )
                          :'loading....'
                }</tbody>
            </table  > 
           
          
              
      
                      </div>
                  </div>
               </div> 
        </div>
 </div>
        
    </>
    )
    
}

export default Projets;