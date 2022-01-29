import React, { useState } from "react";

function App() {
  const [weightInLb, setWeightInLb] = useState(0);
  const [weightInKg, setWeightInKg] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const formValid = weightInLb >= 0;
    if (!formValid ){
      return;
    }
    setWeightInKg(weightInLb * 0.4536);
  }

  function handleChange(e) {
    setWeightInLb(e.target.value) 
  }

  function handleChange2(e) {
    setWeightInKg(e.target.value)
  }

    return (
     <form onSubmit={handleSubmit}>
         <div className="pound-selector">
          <input 
          type="number" 
          className="pound-input" 
          value={weightInLb}
          onChange={handleChange}
          />
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
            value={weightInKg}
            />
          <select name="pound" className="pound-select" >
            <option value="pound">Kilogram</option>
            <option value="kilogram">Pound</option>
          </select>
        </div>
        <button 
        type="submit" 
        className="convert-btn">
          Convert
        </button>
        
          <p className="result">
            <span>{weightInLb} Pound(lbs) = {weightInKg}Kilograms(kg)</span>
          </p>
     </form>
    );
  }
  
  export default App;



