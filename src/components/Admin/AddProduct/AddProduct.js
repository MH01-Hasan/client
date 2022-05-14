import React, { useState } from 'react';
import axios from "axios"
import './AddProduct.css'
import { ScaleLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';




const AddProduct = () => {
    // ....................Image UpLoad ??..........................
    const [selectedImages, setSelectedImages] = useState([])
    const [imageData, setImageData] = useState(null)

    console.log(selectedImages)
    console.log(imageData)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const handelImage = (e) => {
        setSelectedImages(e.target.files[0])
        if (selectedImages) {
            setDisabled(false)
        }
    }
    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", selectedImages)
        formData.append("upload_preset", "tvtpwbv4")
        setLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload", formData
                )
                setImageData(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        postImage()
    }
    // ....................Image UpLoad  end ??..........................

    // ...................Product InFormation...........................
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

    };



    return (
        <div className='container mt-5 upload-fild'>

            <div className='row'>
                <div className='image-Upload col-lg-5 col-sm-12'>
                    <div className='uploder-image'>
                        {
                            loading ? <div className='spnir'>
                                <ScaleLoader
                                    color={"#e80af2c2"} size={40} />
                            </div> : <div>
                                <img src={imageData?.secure_url} alt="" className='addproduct-img' />
                            </div>

                        }
                    </div>
                    <div className='Upload'>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={handelImage}
                            className="image-input"
                        />
                        <button disabled={disabled} onClick={uploadImage} className="img-upload-button">
                            Upload Image
                        </button>
                    </div>
                </div>

                <div className="Product-Info col-lg-7 col-sm-12">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("Product_Name")} type='text' placeholder='Product_Name' required={true} className="producr-info-input-fild" />
                            <input {...register("Titel")} type='text' placeholder='Titel' required={true} className="producr-info-input-fild" /> <br />
                            <textarea  {...register("Description")} type='text' placeholder='Description' required={true} className="producr-info-input-fild Description" /> <br />
                            <input {...register("Price")} type="number" placeholder='Price' required={true} className='thirdsection' />
                            <select {...register("catagory")} className='thirdsection'>
                                <option value="category">category</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <input {...register("firstName")} placeholder='Brand Name' required={true} className='thirdsection' /> <br />
                            <input type="submit" />

                        </form>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AddProduct;
