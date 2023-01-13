import { AiFillStar } from "react-icons/ai";
import cardDetails from "./CardDetails";
import React,{useState,useEffect} from 'react'
// ! this Section I'm exported in App.js
let Section = (props)=>{
    return(
        <>  
            <section class="py-5">  
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4     justify-content-center">
                           {props.cont}
                    </div>
                </div>
            </ section> 
        </>
    )
}
let SaleBadge=()=>{
    return (  <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div>)
}
let Rating=()=>(
    <>
    <div class="d-flex justify-content-center small text-warning mb-2">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        
    </div>
     </>
);


// ! this Content I'm exported in App.js
//card components
let Content = (props) =>{
  
    const [name,setName]=useState();
    const handleChange = (data)=>{
        setName(data)
    } 
    useEffect(()=>{
        props.handleClick(name)
    },[name])

    return (
           <Section   cont=
            {cardDetails.map((value)=>( 
                <div class="col mb-5">
                <div class="card h-100">
                    {/* <!-- Sale badge--> */}
                    {value.badge==="true"?<SaleBadge></SaleBadge>:false}
                    {/* <!-- Product image--> */}
                    <img class="card-img-top" src={value.src} alt="..." />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="fw-bolder">{value.item}</h5>
                            {/* <!-- Product reviews--> */}
                            {value.stars==="true"?<Rating></Rating>:false}
                            {/* <!-- Product price--> */}
                            <span class="text-muted text-decoration-line-through" >${value.actualPrice}  </span>
                              ${value.discountedPrice}
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleChange(value) }>Add to cart</button></div>
                    </div>
                </div>
            </div>
            ))}
             />   
    )
};
export default Content