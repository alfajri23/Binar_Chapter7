import React,{useState,useCallback} from 'react'
import { Admin } from '../../Layout/Admin';
import {useDropzone} from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CarAddAdmin = () => {

    const navigate = useNavigate();
    const [files, setFiles] = useState("");
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [status, setStatus] = useState(0);
    const [kategori, setKategori] = useState("");
    

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles[0]);
    }, []);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        onDrop,
        // accept: {
        //     'image/png': ['.png'], 
        //     'image/jpeg': ['.jpg', '.jpeg'] 
        // },
    });


    const sendFile = async (e) => {
        e.preventDefault();

        const formData = new FormData();

	    formData.append('image', files);
        formData.append('name', nama);
        formData.append('category', kategori);
        formData.append('price', harga);

        console.log(formData);

        navigate('/admin/car',{state:{addSuccess:true}});

        try {
            // let register = await axios.post('https://rent-cars-api.herokuapp.com/admin/car', {
            //     body: formData,
            // });

            // let result = await register;
            // console.log(result);

        }catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }


        // fetch(
		// 	'https://rent-cars-api.herokuapp.com/admin/car',
		// 	{
		// 		method: 'POST',
		// 		body: formData,
		// 	}
		// )
		// 	.then((response) => response.json())
		// 	.then((result) => {
		// 		console.log('Success:', result);
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// });
    }

   


  return (
    <Admin>
    <div>
        <form onSubmit={sendFile}>
        <h4 className="fw-bold">Add New Car</h4>

        <div className="bg-white p-3">
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Nama</label>
                <div className="col-sm-6">
                <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="placeholder"/>
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Harga</label>
                <div className="col-sm-6">
                <input type="text" className="form-control" value={harga} onChange={(e) => setHarga(e.target.value)} placeholder="placeholder"/>
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Kategori</label>
                <div className="col-sm-6">
                <input type="text" className="form-control" value={kategori} onChange={(e) => setKategori(e.target.value)} placeholder="placeholder"/>
                </div>
            </div>

            {/* <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Foto</label>
                <div className="col-sm-6">
                <input type="file" className="form-control"  placeholder="placeholder"/>
                <div id="passwordHelpBlock" className="form-text">
                    File size max. 2MB
                </div>
                </div>
            </div> */}

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Foto</label>
                <div className="col-sm-6">
                    <section className="container border border-1 pt-2">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Start Rent</label>
                <div className="col-sm-6">
                -
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Finish Rent</label>
                <div className="col-sm-6">
                -
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Created at</label>
                <div className="col-sm-6">
                -
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Updated at</label>
                <div className="col-sm-6">
                -
                </div>
            </div>
           

        </div>
        
        <div>
            <button type="button" className="btn btn-outline-primary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </div>
        </form>
    </div>
    </Admin>
  )
}

export default CarAddAdmin