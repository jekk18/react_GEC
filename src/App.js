import React, { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion"; 
import './App.css';

 
  
  

 const App = () => { 
  const [count, setCount] = useState(0);
  const [scrolling, setScrolling] = useState(1);
  const checkall = (ers) => {
    if(ers) setCount(count+1);
    else setCount(count-1);
  }
 
  const scrollRef = useRef();
  // window.addEventListener('scroll', function(event){
  //   let scrollTop = window.scrollY;
    
  //     console.log(scrollTop);
     
  // });
 
  const handleScroll = () => {
    setScrolling(scrollRef.current.scrollTop);
  };


  const handleScrollTop = () => {
      setScrolling(scrolling-20); 
      scrollRef.current.scrollTop -= 20;
  }
  
  const handleScrollBottom = () => {
    setScrolling(scrolling+20) 
    scrollRef.current.scrollTop += 20;
}
 
   return (
     <>
       <div className="questions">
       <div className={`increment-arrow ${scrolling <= 1 ? 'nonArrow' : '' }`} onClick={handleScrollTop}></div>
        <ul ref={scrollRef} onScroll={handleScroll}>
            <span className="padding-list">
              <Accordion question={'quest1'} check={checkall}/>
              <Accordion question={'quest2'} check={checkall}/>
              <Accordion question={'quest3'} check={checkall}/>
              <Accordion question={'quest1'} check={checkall}/>
              <Accordion question={'quest2'} check={checkall}/>
              <Accordion question={'quest3'} check={checkall}/>
              <Accordion question={'quest1'} check={checkall}/>
              <Accordion question={'quest2'} check={checkall}/>
              <Accordion question={'quest3'} check={checkall}/>
              <Accordion question={'quest1'} check={checkall}/>
              <Accordion question={'quest2'} check={checkall}/>
              <Accordion question={'quest3'} check={checkall}/>
              <Accordion question={'quest1'} check={checkall}/>
              <Accordion question={'quest2'} check={checkall}/>
              <Accordion question={'quest3'} check={checkall}/>
            </span>
        </ul>
        <div className="decrement-arrow" onClick={handleScrollBottom}></div>
        <h1 className={`${count>0 ? 'active': ''}`}>text</h1> 
         
         
      </div>
       
      </>
   )
 
 }
 
export default App;
 
