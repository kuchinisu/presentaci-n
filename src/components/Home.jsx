import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../transitions.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { SobreMi } from './componentes/SobreM';
import Layout from './componentes/Layout';
import Habilidades from './componentes/Habilidades';
import Gpt from '../components/componentes/gpt'
import Tarjetas from './componentes/Tarjetas';

function Home () {
    const backend = (
        <div>
            D
        </div>
    );
    
    const [contenidoHabilidad, setContenidoHabilidad] = useState(null);
    const [inProp, setInProp] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    

    return (
        <>
            <div className="">
                
                <Layout>
                    <SobreMi/>
                    <div>
                        <div className="divider divider-warning opacity-30"></div>
                    </div>
                    <Habilidades/>
                    <div className=' '>
                        <Gpt/>
                        <div>
                            <div className='divider'></div>
                            <h className="font-bold text-lg text-[#1A4D2E] text-xl ml-5" >proyectos</h>
                        </div>
                    </div>
                    <Tarjetas/>
                </Layout>
            </div>
        </>
    )
};

export default Home