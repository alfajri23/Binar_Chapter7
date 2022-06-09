import React from 'react'
import { Link } from "react-router-dom";
import { FaClock } from 'react-icons/fa';
import { GoKey } from 'react-icons/go';


const CardAdmin = (props) => {

  return (
    <div>
        <div key="{e.no}" className="card my-3" style={{width: `20rem`}}>
              <span className="p-4">
                  <img src={props.image} className="card-img-top" alt="..."/>
              </span>
              <div className="card-body">
                  <p className="card-text">{props.name}/{props.category}</p>
                  <h5 className="card-title fw-bold mb-3">Rp. {props.price} / hari</h5>
                  <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis deleniti molestiae beatae neque ea atque, qui expedita molestias quasi?</p>
                  
                  <p className="card-text mb-1 fw-light">
                        <GoKey/>
                        {props.start_rent_at} - {props.finish_rent_at}
                    </p>
                    <p className="card-text mb-0 fw-light">
                        <FaClock/>
                        Updated at {props.updatedAt}
                    </p>
                 

                  <div className="row mt-4">
                    <div className="col-6">
                        <button type="button" className="btn btn-outline-danger w-100">
                            <i className="fa-solid fa-trash"></i>
                            Hapus
                        </button>
                    </div>
                    <div className="col-6">
                        <Link to={`/admin/car/${props.id}`} className="btn btn-success w-100">
                            <i className="fa-solid fa-square-pen"></i>
                            Edit
                        </Link>
                    </div>
                </div>

              </div>
          </div>
    </div>
  )
}

export default CardAdmin