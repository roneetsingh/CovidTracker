import React,{useEffect, useState} from 'react'
import '../components/covid.css';
const Tracker = () => {

    const[data,setUpdate] = useState([]);

       const getCovidData = async() =>
       {
          
            const api = await fetch("https://api.covid19india.org/data.json");
            const data = await api.json();
            //console.log(data.statewise[21]);
           setUpdate(data.statewise[0]);
         
       }
    useEffect(() => {

        getCovidData();
        }, [])


    return (
        <center>
        <>
        
            <center>
            </center>     
           <div className="row">
           <div className="column">
           <div className="card3">
           <h2><span>TOTAL</span><center>CONFIRMED</center></h2>
             <h1>{data.confirmed}</h1>
             </div>
              </div>
            <div className="column">
             <div className="card2">
             <h2><span>TOTAL</span><center>RECOVERED</center></h2>
             <h1>{data.recovered}</h1>
             </div>
            </div>
  
          
  
            <div className="column">
                <div className="card4">
                <h2><span>TOTAL</span><center>DEATHS</center></h2>
                 <h1>{data.deaths}</h1>
                </div>
            </div>
            
             <div className="column">
                <div className="card5">
                <h2><span>TOTAL</span><center>ACTIVE</center></h2>
                 <h1>{data.active}</h1>
                </div>
            </div>
            <div className="column">
                <div className="card6">
                <h2><span>LAST</span><center>UPDATED</center></h2>
                 <h1>{data.lastupdatedtime}</h1> 
   
                </div>
            </div>
            
            </div>
            
        </>
        </center>
    )
}

export default Tracker