import React, {useState} from 'react';  
import data from './data'; 
import './styles.css';
export default function Accordion() { 
 const [selected, setSelected] = useState(null);
 const [enableMultiSelection, setEnableMultiSelection] = useState(false)
 const [multiple, setMultiple] = useState([])


 function handleSingleSelection(getCurrentId){
   setSelected(getCurrentId === selected ? null : getCurrentId);
 }
 function handleMultiselection(getCurrentId){

 }

  return <div className='wrapper'>
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
    <div className='accordion'>
      {
        data && data.length > 0 ? 
        data.map(dataItem => <div className='item'>
          <div onClick={enableMultiSelection? handleMultiselection(dataItem.id)
            :()=> handleSingleSelection(dataItem.id)} className='title'>
            <h3>{dataItem.question}</h3>
            <span>+</span>
          </div>
          {
           selected === dataItem.id ? <div className='content'>
            {dataItem.answer}
            </div> : null
          }
        </div>) 
        :<div>No data is found!</div> 
      }
     
    </div>
  </div>

}