import React,{useEffect, useState} from 'react'
import './state.css';

const State = () => {
const[state,setState] = useState([]);
const getState = async () =>
{
    const data = await fetch("https://api.covid19india.org/data.json");
    const totaldata = await data.json();
    setState(totaldata.statewise)
  // console.log(setState(totaldata.statewise));
}

    useEffect(() => {
       getState();
    }, [])


    return (
        <>
            <h1><center>COVID-19 INDIA STATEWISE DATA</center></h1>
            
            <table className="customers table table-responsive">
            <center><thead>
             <tr>
             <th><center>Sr.No.</center></th>
    <th><center>State/UT</center></th>
    <th><center>CONFIRMED</center></th>
    <th><center>RECOVERED</center></th>
    <th><center>DEATHS</center></th>
    <th><center>ACTIVE</center></th>
    <th><center>UPDATE</center></th>
  </tr>
  </thead>
  
  <tbody>
      {
         
          state.map((curElem,index)=>
          {
              if (curElem.state !== "State Unassigned" && curElem.state !== "Total")
              {
              return(
                  <>
                   <tr>
                   <td></td>       
    <td>{curElem.state}</td>
    <td>{curElem.confirmed}</td>
    <td>{curElem.recovered}</td>
    <td>{curElem.deaths}</td>
    <td>{curElem.active}</td>
    <td>{curElem.lastupdatedtime}</td>
    </tr>
                  </>
              )}
          })
      }
 
        </tbody>
        </center>
   
 
  </table>
  
        </>
    )
}

export default State