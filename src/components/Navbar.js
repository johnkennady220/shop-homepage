import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillCartFill } from "react-icons/bs";
import './style.css'

let Navbar = (props)=>{
    
    return (
        //  Navigation
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                         <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action/3.2">
                          Popular Items
                         </NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>                       
                       </NavDropdown>
                    </ul>
                    <form class="d-flex">
                        <button className="btn btn-outline-dark" type="button" onClick={()=>props.onClick1("")}>
                            <BsFillCartFill  style={{content:"center",paddingBottom:'2px' ,paddingRight:'3px',}}></BsFillCartFill>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{props.addedCount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar