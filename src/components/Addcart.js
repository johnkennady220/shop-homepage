// import {useState} from 'react'
import './cart.css'
import React,{useState} from "react";
import {Button} from "react-bootstrap";
import { MDBContainer } from 'mdb-react-ui-kit';

const Addcart = ({data,setCart}) =>{ 
  const [count,setCount]=useState(1);
  const [cartDetails,setcartDetails]=useState(data.slice(1,data.length))
  function deleter(data){
    let array=cartDetails.filter((elem)=>elem!==data)
    setCart =setCart([...array])
    setcartDetails([...array])
    
  }
  const DeleteAll=()=>{
      setCart =setCart([])
      setcartDetails([])
  }
  return (

    <div >
      <section className="py-4">  
      <MDBContainer>
      <div className="d-flex p-2 " style={{backgroundColor:"black",color:"white"}}>
          
            <span className='image wi ta'><p className="d h image">Image </p></span>
            <span className='name wn  ta'><p  className="d h">Item Name</p></span>
            <span className='price w2 ta'><p className="d pp h">Price</p></span>
            <span className='count  w2 ta '><p className="d h">count</p></span>
            <span className='total w2 ta'><p className="d h">Total</p></span>
            <span className='del ta w2'><p className="d h">Del</p></span>

        </div>
        { (data[1]===undefined)?(
          <span className='ta mt'>
               <h1 className='mt'>This cart is empty !</h1>
          </span>
        ):false}
        
     { (cartDetails.map((element) => (
           
              <div class="d-flex p-2 b mt">
          <>
            <div className="p-2 d w2" >
              <img src={element.src} className="" style={{height:"150px"}} alt="" />
            </div>
            <span className="d ta pt" style={{width:"289px"}}>
                <p className=" d ta tp as pt t" > {element.item}</p>

            </span>
            <span className="d ta pt t w2" style={{textAlign:"center"}}><p className="d" >${element.actualPrice}</p></span>
            <span className="ta pb w2" >
                <Button className="d"  onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
                <p className="d pb t" style={{width:"50px",margin:"15px"}}>{count}</p>
                <Button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
            </span>
            
            <span className="ta pt w2" >
                <p className='d t'>${count*element.actualPrice}</p>
            </span>
            ,<span className="ta pb w2" >
                  <Button className="btn btn-dark" type='button' onClick={() =>deleter(element)}>Del</Button>
            </span>
          </>
          </div>   
            
      )))}
      <br></br>
      <div>
         <Button className="btn btn-success" type="button">Buy Now</Button>
         <Button className="btn btn-danger m-5" type='button' onClick={()=>DeleteAll()}>Clear Cart</Button>
      </div>
      </MDBContainer>          
      </ section>
    </div>
)}


export default Addcart;