import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddProduct = () => {
  // ....................Image UpLoad ??..........................
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);

  // const [imageurl, setImageurl] = useState([])

  const [loading, setLoading] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);
  const [disabled4, setDisabled4] = useState(true);

  const handelImage = (e) => {
    setSelectedImages(e.target.files[0]);
    if (selectedImages) {
      setDisabled(false);
    }
  };
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "tvtpwbv4");
    setLoading(true);
    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload",
          formData
        );
        setImageData(response?.data);
        // setImageurl((prev) => [...prev, response?.data])
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };

  // ................................image 1 Upload.................................//
  const [selectedImages1, setSelectedImages1] = useState([]);
  const [imageData1, setImageData1] = useState(null);
  const handelImage1 = (e) => {
    setSelectedImages1(e.target.files[0]);
    if (selectedImages1) {
      setDisabled1(false);
    }
  };

  const uploadImage1 = () => {
    const formData = new FormData();
    formData.append("file", selectedImages1);
    formData.append("upload_preset", "iamge1");
    setLoading(true);
    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload",
          formData
        );
        setImageData1(response?.data);
        // setImageurl((prev) => [...prev, response?.data])
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };
  // ................................image 1 Upload end.................................//

  // ................................image 2 Upload.................................//
  const [selectedImages2, setSelectedImages2] = useState([]);
  const [imageData2, setImageData2] = useState(null);
  const handelImage2 = (e) => {
    setSelectedImages2(e.target.files[0]);
    if (selectedImages2) {
      setDisabled2(false);
    }
  };

  const uploadImage2 = () => {
    const formData = new FormData();
    formData.append("file", selectedImages2);
    formData.append("upload_preset", "iamge1");
    setLoading(true);
    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload",
          formData
        );
        setImageData2(response?.data);
        // setImageurl((prev) => [...prev, response?.data])
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };
  // ................................image 2 Upload end.................................//

  // ................................image 3 Upload.................................//
  const [selectedImages3, setSelectedImages3] = useState([]);
  const [imageData3, setImageData3] = useState(null);
  const handelImage3 = (e) => {
    setSelectedImages3(e.target.files[0]);
    if (selectedImages3) {
      setDisabled3(false);
    }
  };

  const uploadImage3 = () => {
    const formData = new FormData();
    formData.append("file", selectedImages3);
    formData.append("upload_preset", "iamge1");
    setLoading(true);
    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload",
          formData
        );
        setImageData3(response?.data);
        // setImageurl((prev) => [...prev, response?.data])
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };
  // ................................image 4 Upload end.................................//

  // ................................image 3 Upload.................................//
  const [selectedImages4, setSelectedImages4] = useState([]);
  const [imageData4, setImageData4] = useState(null);
  const handelImage4 = (e) => {
    setSelectedImages4(e.target.files[0]);
    if (selectedImages4) {
      setDisabled4(false);
    }
  };

  const uploadImage4 = () => {
    const formData = new FormData();
    formData.append("file", selectedImages4);
    formData.append("upload_preset", "iamge1");
    setLoading(true);
    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwkqd8sxn/image/upload",
          formData
        );
        setImageData4(response?.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };
  // ................................image 4 Upload end.................................//

  // ....................Image UpLoad  end ??..........................

  // ...................Product InFormation...........................
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.image = imageData?.secure_url;
    data.image1 = imageData1?.secure_url;
    data.image2 = imageData2?.secure_url;
    data.image3 = imageData3?.secure_url;
    data.image4 = imageData4?.secure_url;

    axios
      .post("https://secret-ravine-65882.herokuapp.com/Product", data)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Add New Product",
            showConfirmButton: false,
            timer: 2500,
          });
          reset();
        }
      });
  };

  // Size Section ??




  return (
    <div className="mt-5 upload-fild mb-5">
      <div className="row">
        <div className="image-Upload col-lg-5 col-sm-12">
          <div className="uploder-image">
            {loading ? (
              <div className="spnir">
                <ScaleLoader color={"#e80af2c2"} size={40} />
              </div>
            ) : (
              <div>
                <img
                  src={imageData?.secure_url}
                  alt=""
                  className="addproduct-img"
                />
              </div>
            )}
          </div>
          <div className="Upload">
            <input
              type="file"
              name="file"
              id="file"
              onChange={handelImage}
              className="image-input"
            />
            <button
              disabled={disabled}
              onClick={uploadImage}
              className="img-upload-button"
            >
              Upload Image
            </button>
          </div>

          {/* image Upload */}
          <div>
            <div className="images image1">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handelImage1}
                className="image-input"
              />
              <button
                disabled={disabled1}
                onClick={uploadImage1}
                className="img-upload-button"
              >
                Upload Image
              </button>
            </div>
            <div className="images image2">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handelImage2}
                className="image-input"
              />
              <button
                disabled={disabled2}
                onClick={uploadImage2}
                className="img-upload-button"
              >
                Upload Image
              </button>
            </div>
            <div className="images image3">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handelImage3}
                className="image-input"
              />
              <button
                disabled={disabled3}
                onClick={uploadImage3}
                className="img-upload-button"
              >
                Upload Image
              </button>
            </div>
            <div className="images image4">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handelImage4}
                className="image-input"
              />
              <button
                disabled={disabled4}
                onClick={uploadImage4}
                className="img-upload-button"
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>

        <div className="Product-Info col-lg-7 col-sm-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Product_Name")}
                type="text"
                placeholder="Product_Name"
                required={true}
                className="producr-info-input-fild"
              />
              <input
                {...register("Model")}
                type="text"
                placeholder="Model No"
                required={true}
                className="producr-info-input-fild"
              />
              <br />
              <textarea
                {...register("Description")}
                type="text"
                placeholder="Description"
                required={true}
                className="producr-info-input-fild Description"
              />
              <br />
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                required={true}
                className="thirdsection"
              />
              <select {...register("Catagory")} className="thirdsection">
                <option disabled value="Category">
                  Category
                </option>
                <option value="Air_Jorden">Air Jorden</option>
                <option value="Air_Force">Air Force</option>
                <option value="Dunk">Dunk</option>
                <option value="Air_Max">Air Max</option>

                <option value="Yeezy_350_v2">Yeezy 350 v2</option>
                <option value="Yeezy_700">Yeezy 700</option>
                <option value="Yeezy_500">Yeezy_500</option>
                <option value="Ultra_Boost">Ultra Boost</option>

                <option value="Designers_Shoes">Designers Shoes</option>
                <option value="Ladies_Bag">Ladies Bag</option>
                <option value="Wallet">Wallet</option>
                <option value="Watch">Watch</option>
                <option value="Others">Others</option>
              </select>
              <input
                {...register("Brand_Name")}
                placeholder="Brand Name"
                required={true}
                className="thirdsection"
              />

              {/*........................ Size Section ........................................*/}
              <div className="mt-3">
                <h4>Size</h4>
                <input
                  {...register("Size_35")}
                  placeholder="35"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_36")}
                  placeholder="36"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_37")}
                  placeholder="37"
                  className="Size-input-fild"

                />
                <input
                  {...register("Size_38")}
                  placeholder="38"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_39")}
                  placeholder="39"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_40")}
                  placeholder="40"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_41")}
                  placeholder="41"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_42")}
                  placeholder="42"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_43")}
                  placeholder="43"
                  className="Size-input-fild"

                />
                <input
                  {...register("Size_44")}
                  placeholder="44"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_45")}
                  placeholder="45"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_46")}
                  placeholder="46"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_47")}
                  placeholder="47"
                  className="Size-input-fild"


                />
                <input
                  {...register("Size_48")}
                  placeholder="48"
                  className="Size-input-fild"

                />

              </div>

              {/* Size Section */}



              <br />
              <div className="slider-image">
                <img src={imageData1?.secure_url} alt="" />
                <img src={imageData2?.secure_url} alt="" />
                <img src={imageData3?.secure_url} alt="" />
                <img src={imageData4?.secure_url} alt="" />
              </div>
              <input type="submit" className="addproduct-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
