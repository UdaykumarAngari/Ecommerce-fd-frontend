import axios from "axios";

const API_URL = 'http://localhost:8081/api';
export const addFood = async (foodData, image) => {
    const formData = new FormData();
    formData.append('food', JSON.stringify(foodData));
    formData.append('file', image);
    console.log(foodData);
    try {
          // const response = 
          await axios.post('http://localhost:8081/api/foods', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          // if(response.status === 200){
          //   alert('Food added successfully');
          //   setFoodData({
          //     name: '',
          //     description: '',
          //     category: 'Biryani',
          //     price: ''
          //   });
          //   setImage(false);
          // }
        } catch (error) {
          console.log(error);
          alert('Failed to add food');
          throw error;
        }
}

