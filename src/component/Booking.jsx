import React, { useState } from "react";
import axios from 'axios'
import "./Booking.css";

const Booking = () => {
  const [formData, SetFormData] = useState([
    {
      name: "",
      email: "",
      date: "",
      people: "",
      request: "",
    },
  ]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("formData", JSON.stringify(formData));
  // }, [formData]);

  const getData = (event) => {
   
    const { name, value } = event.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showData = async(event) =>  {
    event.preventDefault();

    // Validation: Check if any required field is empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.people
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    try{
      await axios.post('http://localhost:5000/api/bookings', formData);
      // await axios.post('https://steady-kulfi-3d4391.netlify.app', formData);
    }catch(error){
      console.log(error)
    }
    

    // Retrieve existing data from local storage or initialize an empty array
    let storedData = JSON.parse(localStorage.getItem("formData"));
    if (!Array.isArray(storedData)) {
      storedData = [];
    }

    // Append new form data as a new object to the array
    storedData.push(formData);

    // Update local storage with the updated array
    localStorage.setItem("formData", JSON.stringify(storedData));

    // Clear the form fields
    SetFormData({
      name: "",
      email: "",
      date: "",
      people: "",
      request: "",
    });

    setError(""); // Clear any previous errors
    alert("Booking successful!");
  };

  return (
    <>
      <div className="banner">
        <nav className="navbar pt-4 px-md-5 z-3">
          <div className="container-fluid px-md-5 align-items-baseline">
            <a className="navbar-brand" href="ww">
              <h1 className="text-primary m-0 logo">
                <i className="fa fa-utensils me-3"></i>Restoran
              </h1>
            </a>
          </div>
        </nav>
        <div className="row pt-2">
          <div className="col-lg-6 col-md-8 mx-auto mt-lg-5">
            <div className="container">
              <form className="p-3 rounded-4  table-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required=""
                  onChange={getData}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required=""
                  onChange={getData}
                />

                <input
                  type="date"
                  id="date"
                  name="date"
                  required=""
                  onChange={getData}
                />

                <input
                  type="number"
                  id="people"
                  name="people"
                  placeholder="people"
                  min={1}
                  required=""
                  onChange={getData}
                />
                <label htmlFor="request">Special Requests:</label>
                <textarea
                  id="request"
                  name="request"
                  placeholder="Any special requests..."
                  defaultValue={""}
                  onChange={getData}
                />
                <button className="book-btn" onClick={showData}>
                  Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
