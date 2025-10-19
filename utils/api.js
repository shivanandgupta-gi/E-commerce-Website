//this page handles all the api calls
import axios from 'axios'
const apiUrl =import.meta.env.VITE_API_URL;


// Define an async function to send data to a server
export const postData = async (url, formData) => {
  try {
    // Send a POST request using fetch
    const response = await fetch(apiUrl + url, {
      method: 'POST', // HTTP method
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // Get token from browser storage
        'Content-Type': 'application/json', // We're sending JSON data
      },
      body: JSON.stringify(formData) // Convert formData to JSON string
    });
    //if all correct 
    if(response.ok){
        const data=await response.json();
        return data;
    }else{
        const errordata=await response.json();
        return errordata;
    }
  } catch (error) {
    // If something goes wrong, show the error in the console
    console.log(error);
  }
}


//get function to get data from server
export const getData = async (url) =>{
  try{
    const params={
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // Get token from browser storage
        'Content-Type': 'application/json', // We're sending JSON data
      },
    }
    const {data}=await axios.get(apiUrl + url,params);
    return data;
  }catch(error){
    console.log(error);
  }
}

//upload image function to upload image to server
export const uploadImage = async (url, data) => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`,
        'Content-Type': 'multipart/form-data', // Adjust the content type as needed
      }
    };

    const response = await axios.put(apiUrl + url, data, config);
    return response.data;

  } catch (error) {
    console.error("Edit Data Error:", error.response?.data || error.message);
    throw error;
  }
};
 
//edit function to edit data in server
export const editData = async (url, data) => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`,
        'Content-Type': 'application/json', // Adjust the content type as needed
      }
    };

    const response = await axios.put(apiUrl + url, data, config);
    return response.data;

  } catch (error) {
    console.error("Edit Data Error:", error.response?.data || error.message);
    throw error;
  }
};

//get data without authentication
export const getDataWithouAuthintication = async (url) => {
  try {
    const token = localStorage.getItem("accesstoken");

    // build headers dynamically
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const { data } = await axios.get(apiUrl + url, { headers });
    return data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    return { error: true, message: error.response?.data?.message || "Something went wrong" };
  }
};

//delete function to delete data from server
export const deleteData = async (url, payload) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`,
      'Content-Type': 'application/json',
    },
    data: payload, // 👈 body goes here
  };

  const { data } = await axios.delete(apiUrl + url, config);
  return data;
};

// utils/api.js
export const getAddressFromServer = async (userId) => {
  try {
    const response = await axios.get(apiUrl + "/api/address/get", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`,
        'Content-Type': 'application/json',
      },
      params: { userId },
    });
    return response.data; // { message, success, error, data: [...] }
  } catch (error) {
    console.error("getAddressFromServer error:", error);
    throw error;
  }
};







