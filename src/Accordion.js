import React,{ useState, useRef, useEffect } from 'react'
 

const Accordion = (props) => {
  const ref = useRef(null);
    const [active, setActive] = useState(false);

    const handleCheck = () => {
      setActive(!active);
      props.check(!active); 
    };
     
     
    return (
       <li className={`list-li ${active ? 'open' : ''}`} style={{color : `${active ? 'red' : 'black'}`} }  >
          {props.question}
          <span className={`box ${active ? 'chred' : ''}`} onClick={handleCheck} ></span>
       </li>
    );
  };

export default Accordion;