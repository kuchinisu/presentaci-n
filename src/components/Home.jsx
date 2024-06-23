import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../transitions.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import SobreMi from './componentes/SobreM';
import Layout from './componentes/Layout';
import Habilidades from './componentes/Habilidades';
import Tarjetas from './componentes/Tarjetas';
import Experiencia from './componentes/Experiencia';
import Skills from './componentes/Skils';

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
                    
                    <div className='p-5'>
                        <Experiencia/>
                    </div>


                    
                    <div className="p-5">
                        <div>
                            <div className='divider'></div>
                        </div>

                        <div className='md:p-24'>
                            <Tarjetas/>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div>

                        <div className='divider'></div>

                            <div className='flex justify-center'>
                                <h className='font-bold text-3xl'>Fortalezas</h>
                            </div>
                            
                            <div className='divider'></div>

                            <div className='md:flex md:justify-center'>
                                
                                <div>
                                    <div className='border border-warning border-2'>
                                        <div className=' md:scale-125'>
                                            <Habilidades/>
                                        </div>
                                    </div>
                                </div>

                                <div className='border border-warning border-2'>
                                    <Skills/>
                                </div>

                            </div>

                        </div>
                    </div>
                    

                </Layout>
            </div>
        </>
    )
};

export default Home