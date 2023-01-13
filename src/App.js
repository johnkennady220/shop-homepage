import './components/style.css'
import Navbar from './components/Navbar'
import  Header            from './components/Heading';
import Content  from './components/Content'
import Footer from './components/Footer'
import Addcart from './components/Addcart'
import { useState } from 'react';

function App() {   
    let [cont,setCont]=useState(true);
    const [cart,setCart]=useState([]) 
     const handleClick = (item) =>{
        if((cart).indexOf(item) !==-1)return;
        setCart([...cart,item]);
     }
    return (
    
        <div>
            <Navbar onClick1={()=>setCont(state=>!state)} addedCount={(cart.length-1)===-1?false:cart.length-1}/>
            <Header />
            {(cont=== true)?( <Content handleClick={handleClick}></Content>
               ):(<Addcart data={cart}  setCart={setCart}></Addcart>)}
            <Footer />
        </div>    
)
}

export default App;
