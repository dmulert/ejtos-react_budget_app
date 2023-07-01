import React, { useContext } from 'react'; 
import { AppContext } from '../context/AppContext';
import "../StyleCurrency.css" ;

const Currency = () => {
  const {dispatch,currency} = useContext(AppContext);


	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})

          
	}

  return (
<div>
      <select className="hover_color form-select form-select-lg mb-3"  id="currency" 
      onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#93E499', color:'white'}}> 
        <option style={{color:'black'}} value="{currency}"> Currency ( {currency} Pound )</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option  style={{color:'black'}} value="₹">₹ Rupee</option>)
      </select>	



</div>
    
	);
};

export default Currency;