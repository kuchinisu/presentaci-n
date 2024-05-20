import { Footer } from "./navigation/Footer";
import { Navbar } from "./navigation/Navbar";


const Layout = (props) => {
     
   
    return (
        <div data-theme='garden'>
                
            <div className='w-full'> 

                <Navbar/>
                <div name="cuerpo">
                    
                    <div>
                        {props.children}
                    </div>
                </div>
                <Footer/>

            </div>

            
        </div>
    );
};

export default Layout