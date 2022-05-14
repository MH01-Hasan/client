// import React, { useState } from 'react';
// import { ButtonGroup, ToggleButton } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

// const Step2 = ({ data }) => {
//     const cart = useSelector((state) => state.cart);
//     const [radioValue, setRadioValue] = useState('');
//     const total = Number(cart?.cardTotalAmount) + Number(radioValue)
//     console.log(total)

//     const radios = [
//         { name: '	UAE-2-4 DAYS Delivery', value: '27' },
//         { name: 'WESTERN REGION/HATTA/ISLAND (2-4 Days)', value: '57' },

//     ];
//     return (
//         <div className=''>

//             <div className='contact-ship' >
//                 <div className="p">
//                     <h6>contact   :  {data?.email}  </h6>

//                 </div>
//                 <hr />
//                 <div className="p1">
//                     <h6>
//                         Ship to   :{data?.Address}, {data?.Emirate},{data?.Country}
//                     </h6>

//                 </div>

//             </div>

//             <div className='Shipping-method'>
//                 <h4 className='method'>Shipping method</h4>

//                 <div>
//                     <div >
//                         <ButtonGroup className='readio-btn-delevery'>
//                             {radios.map((radio, idx) => (
//                                 <div>
//                                     <ToggleButton
//                                         key={idx}
//                                         id={`radio-${idx}`}
//                                         type="radio"
//                                         variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//                                         name="radio"
//                                         value={radio.value}
//                                         checked={radioValue === radio.value}
//                                         onChange={(e) => setRadioValue(e.currentTarget.value)}
//                                         required={true}
//                                         className='ToggleButton-delevery'
//                                     >
//                                         <div className='delevery-value'>
//                                             <h6>{radio.name}</h6>
//                                             <h6> AED {radio.value}</h6>
//                                         </div>
//                                     </ToggleButton>
//                                 </div>
//                             ))}
//                         </ButtonGroup>
//                     </div>

//                 </div>

//             </div>


//         </div>
//     );
// };

// export default Step2;