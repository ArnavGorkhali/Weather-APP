import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


const Temp = () => {
    const [search, setSearch] = useState('kathmandu');
    const [forecast, setForcast] = useState(null);

  const fetchForcast = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=691b23c2336ca7d350aa6c62fb844ea5`
    const res =await fetch(url);
    const data = await res.json();
    // const editedData = data.map(dt => {
    //   return {
    //      temp: dt.temp,
    //      pressure: dt.pressure,
    //      id: dt.id,  
    //   }
    // })

    setForcast(data.main);
    console.log(res)

  }

    useEffect( () => {
        fetchForcast();
    },[setSearch])
  


  return (
    <>
        <div className='inputData'>
            <input type='search' className='inputFeild' onChange={
                (ev)=>{
                setSearch(ev.target.value)
                fetchForcast(search)
                
            }} />
            <Button variant="outline-success">Search</Button>  
        </div>
        {!forecast? (
            <p className="box">no data</p>
        ) : (
        <div className='box'>
            {/* <div className="card-img" style={{background: url('./components/images/bg.jpg')}} /> */}
            <div className="info">
                <h1>
                    Location: {search}
                </h1>
                <h3> 
                    Temp:{forecast.temp}
                </h3>
            </div>
        </div>
        )}
    </>
  )
}

export default Temp