import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
/*import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";*/
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'







 function Projets(){
    const [userList ,setUserList] = useState([]);
    
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
 
    return (
        <div>
<div class="container ">
   <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">   
    {/**   <BootstrapTable 
      bootstrap4 
      keyField="id" 
      columns={colums} 
      data={userList}
      pagination={pagination}
      filter={filterFactory()}
      /> */}
       
       
       <div class="row" >
            <div class="table-responsive " >
  




  <br></br>< div className='form-group mb-3'>

  <span>Rechercher</span>
  
  <input type="text"
  width='20%'
placeholder="chercher..."

className='form-control'/>

          </div> 

          
         
          

 
                 <table  class="table table-striped table-hover table-bordered" >
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
                    userList.map((usr) =>
                        <tr >
                            
                            <td> {usr.id}</td>
                            <td> {usr.name}</td>
                            <td> {usr.username}</td>
                            <td> {usr.email}</td>
                            <td> {usr.descreption}</td>
                            <td> {usr.filière}</td>
                            <td> <a href="/postuler" class="view" title="Postuler" data-toggle="tooltip" ><i class="fa-solid fa-circle-plus"></i></a>
                                 <a href="/description" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
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
        
    
    )
    
}

export default Projets;