import React, {useEffect, useState} from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
const AddFood = () => {
  const [image, setImage] = useState(false);
  const [foodData , setFoodData] = useState({ 
    name: '',
    description: '',
    category: 'Biryani',
    price: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFoodData({...foodData, [name]: value})
  }

  // to check the foodData state
  // useEffect(() => {
  //    console.log(foodData); 
  // },[foodData]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(!image){
      alert('Please upload an image');
      return;
    }
    const formData = new FormData();
    formData.append('food', JSON.stringify(foodData));
    formData.append('file', image);
    console.log(foodData);

    try {
      const response = await axios.post('http://localhost:8081/api/foods', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if(response.status === 200){
        alert('Food added successfully');
        setFoodData({
          name: '',
          description: '',
          category: 'Biryani',
          price: ''
        });
        setImage(false);
      }
    } catch (error) {
      console.log(error);
      alert('Failed to add food');
    }
  }


  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src= { image ? URL.createObjectURL(image) : assets.upload} alt="Upload Icon" width={98} className="img-fluid" />
                </label>
                <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.files[0])} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Food Name</label>
                <input type="text" className="form-control" id="name" name='name' onChange={onChangeHandler} value={foodData.name} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name='description' onChange={onChangeHandler} value={foodData.description} required/>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                 <select name="category" id="category" className="form-control" onChange={onChangeHandler} value={foodData.category} required>
                  <option value="">Select Category</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls </option>
                  <option value="Salads">Salads </option>
                  <option value="Ice Creams">Ice Creams </option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name='price' onChange={onChangeHandler} value={foodData.price} required/>
              </div>

              <button type="submit" className="btn btn-primary">Add Food</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFood