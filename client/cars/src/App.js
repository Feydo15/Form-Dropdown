import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';


function App() {

   const [data, setData] = useState([])
  const [form , setForm ] = useState({
    car: "",
    color: "",
    extras: [],
  });
const url = "http://localhost:8080/cars"


useEffect(() => {
  axios.get( "http://localhost:8080/cars")
    .then((response) => {
      const Cars = response.data;
      setData(Cars);
      console.log(Cars, "data is received");
    })
    .catch((error) => {
      console.log(error, "error is received");
    });
}, []);



const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(url,{
    car: form.car,
    color: form.color,
    extras: form.extras
}).then(response => {
  window.location.reload(true)
    console.log(response.form)
});
};

const handleChecked = (e) => {
  setForm({...form, extras :[...form.extras,e.target.value]})
}
console.log(form)

const handleChange = (e) => {
  const newData = {...form,}
  newData[e.target.id]=e.target.value;
  setForm(newData);
  console.log(newData);
};



  return (
    <div className="App">
      <form action="post" onSubmit={handleSubmit}>
        <label for="car">Car: </label>
        <input type="text" id="car" placeholder="Enter Car Name" onChange={handleChange} required/>
        <label> Color: </label>  
       <select id="color" onChange={handleChange}  required={true}>  
       <option value="" disabled selected hidden>select color</option>
       <option value="Red"> Red   
       </option>  
       <option value="Blue"> Blue   
      </option>  
        <option value="Black"> Black  
        </option>  
        </select>  
        <input type="checkbox" name="extras" value="new-wheels" onChange={handleChecked} />
        <input type="checkbox" name="extras" value="new-lights" onChange={handleChecked}  />
    <button type="submit">Submit</button>
      </form>
      <div>
        {data.map((item) => (
          <div id="cars" key={item.id}>
            <h5>Car Type</h5>
            <p>Car: {item.car}</p>
            <p>Color: {item.color}</p>
            {item.extras.map((item, i) => (  <p key={i}>
              <p>{item}</p>
            </p>)) }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
