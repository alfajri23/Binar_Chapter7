import React, { useState, useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom';
import CardAdmin from '../../Components/Card/CardAdmin';
import { Admin } from '../../Layout/Admin';
// import axios from 'axios';

const CarAdmin = (props) => {

  const location = useLocation();
  let [item, setItem] = useState([]);
  let [add, setAdd] = useState(false);

  

  useEffect(() => {

    const datas = async () => {
      let fetchs = await fetch('https://rent-cars-api.herokuapp.com/admin/car/');
      let datas = await fetchs.json();
      setItem(item=datas)
    }

    datas();

    if(location.state != null){
      if(location.state.addSuccess){

        setAdd(true);
      }
    }
  
    
  },[]);


  return (
    <Admin>
    {add && (
      <div className="alert alert-success" role="alert">
        Data berhasil disimpan
      </div>
    )}
    

    <div>
      <div className="d-flex justify-content-between">
          <h4 className="fw-bold">List Card</h4>
          <Link to="/admin/car/add" className="btn btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add new card
          </Link>
      </div>

      <div className="my-2">
          <button type="button" className="btn btn-md btn-outline-secondary">All</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Small</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Medium</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Large</button>
      </div>

      <div className="d-flex flex-wrap justify-content-between">
            { item.map((e,key)=>{ 
                return <CardAdmin key={key} {...e}/>
            }) }
          
      </div>
    </div>
    </Admin>
  )
}

export default CarAdmin