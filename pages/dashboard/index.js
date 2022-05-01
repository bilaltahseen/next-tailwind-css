/* This example requires Tailwind CSS v2.0+ */

import Main from '../../Layouts/Main'
import DataTable from '../../Components/DataTable'
import Portlet from '../../Components/Portlet'
import * as columns from '../../Common/GridColumns';



const dataRows =[
  {"name":"Bilal","age":23,"gender":'Male',"role":"User","action":{
    url:"/",
    name:"Edit",
    icon:"edit"
  }},
  {"name":"Ahsan","age":22,"gender":'Male',"role":"User","action":{
    url:"/",
    name:"Edit",
    icon:"edit"
  }},
  {"name":"Ameen","age":24,"gender":'Male',"role":"Admin","action":{
    url:"/",
    name:"Edit",
    icon:"edit"
  }},
  {"name":"Ameen","age":24,"gender":'Male',"role":"Admin","action":{
    url:"/",
    name:"Edit",
    icon:"edit"
  }}
]



export default function index() {
  return (
 
     <Main>
         <div>
            <Portlet title={'Data Table'} subtitle={'Data table subtitle here!'}>
              <DataTable dataColumns={columns.sampleDataTable} dataRows={dataRows}/>
            </Portlet>
         </div>
     </Main>

  )
}
