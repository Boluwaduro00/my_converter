import React, { useState, useEffect } from "react";

function App() {
  const [weightInLb, setWeightInLb] = useState(0);
  const [weightInKg, setWeightInKg] = useState(0);

  const handleSubmit = () => {
    const formValid = weightInLb >= 0;
    if (!formValid ){
      return;
    }
    setWeightInKg(weightInLb * 0.453592);
  }

  function handleChange(e) {
    setWeightInLb(e.target.value);
  }

  function handleChange2(e) {
    setWeightInKg(e.target.value)
  }


  useEffect(()=>{
    handleSubmit();   
  },[weightInLb]);

    return (
     <form>
         <div className="pound-selector">
          <input 
          type="number" 
          className="pound-input" 
          value={weightInLb}
          onChange={handleChange}
          />
          {/* <label className="pound-select">Pound</label> */}
          <select name="pound" className="pound-select" >
            <option value="pound">Pound</option>
            <option value="kilogram">Kilogram</option>
          </select>
        </div>

        <div className="pound-selector">
          <input 
            type="number" 
            className="pound-input" 
            onChange={handleChange2}
            value = {weightInKg}
            />

            {/* <label className="pound-select">Kilogram</label> */}
          <select name="kilo" className="kilo-select" >
            <option value="pound">Kilogram</option>
            <option value="kilogram">Pound</option>
          </select> 
    
        </div>
        
          <p className="result">
            <span>{weightInLb} Pound(lbs) = {weightInKg}Kilograms(kg)</span>
          </p>
     </form>
    );
  }
  
  export default App;



