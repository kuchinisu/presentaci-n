import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../transitions.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, 
    MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import {Tabla} from './tabla';
import {prompts} from '../txt/propts'

function Home () {

    const API_KEY = process.env.REACT_APP_API_KEY_OPEN_AI;


    const [messages, setMessages] = useState([
        {
            message: "Hola! soy rodo-bot y te contaré lo que necesites sobre Rodolfo",
            sender: "ChatGPT",
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
        setIsTyping(true);

        await processMesageToChatGPT (newMessages);
    };

    async function processMesageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if(messageObject.sender === "ChatGPT") {
                role="assistant";

            } else {
                role = "user"
            };
            return { role: role, content: messageObject.message }

        });

        const systemMessage = {
            role: "system",
            content: prompts
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", 
            {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
            }).then((data) => {
            return data.json();
            }).then((data) => {
            console.log(data);
            setMessages([...chatMessages, {
                message: data.choices[0].message.content,
                sender: "ChatGPT"
            }]);
            setIsTyping(false);
            });
            }
    

    const textoDePresentacion = (
        <p>
           <div>
                👨‍💻Desarrollador Full-Stack de apps web y apps de escritorio con los lenguajes de <span className='bg-[#03AED2] p-1 font-bold text-gray-500 rounded-md'>Py</span><span className='bg-[#FDDE55] p-1 font-bold text-gray-500 rounded-md'>thon</span>, <span className='bg-[#F3CA52] text-white p-1 rounded-md font-bold'>Javascript</span>, <span className='bg-gray-300 p-1 rounded-sm font-bold'>SQL</span>, <span className='bg-blue-200 p-1 text-white font-bold'>C++</span>. <br />
                🖨️Administración y análisis de datos con Excel. <br />
            </div>

            <br />

            🍓Soy un gran amante de los números, la estádistica y la técnología, tengo la 
            idea de que cualquier cosa en esta vida se puede entender a travéz de una 
            gráfica. <div className='text-[#32012F]'>Aunque mi principal fuerte es el backend, el manejo y visualización de datos y
            otro tipo de herramientas de apoyo como Excel y google cloud tambén me desempeño 
            como desarrollador de front-end.</div> 🍓

        </p>

        
    );

    const backend = (
        <div>
            D
        </div>
    );

    const texto1 =  (
        <p>
            Siempre ante cualquier problema observo todos los ángulos posibles, <br />
            trato de evaluar todas las soluciones y ecuentro una solución efectiva
        </p>
    );
    const texto2 =  (
        <p>
            Nunca me cierro a aprender nuevas habilidades, y afortunadamente, <br />
            mi gran gusto viene acompañado de una buena capacidad de aprendizaje rápido,  <br />
            soy una persona adaptable a distintas formas de trabajar, a herramientas, etc. <br />
        </p>
    );
    const texto3 =  (
        <p>
            Siempre trato de aportar lo más posible ofreciendo soluciones, <br />
            herramientas, ideas y puntos en diferentes situaciónes.
        </p>
    );
    const texto4 =  (
        <p>
            Siempre me quedo hasta el final para resolver algún problema <br />
            incluso si son pocas las herramientas o recursos me esfuerzo al <br />
            máximo hasta lograr encontrar una solución. <br />
            También cuando hay mentas establecidas siempre trabajo en <br />
            ellas hasta alcanzarlas.

        </p>
    );
    

    const [contenidoHabilidad, setContenidoHabilidad] = useState(null);
    const [inProp, setInProp] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const cambiarVentanaDeHabilidades = (id) => {
        setInProp(false);
        document.getElementById("presiona").innerText = '';
        switch (id) {
            case 'backend':
                setContenidoHabilidad(
                    
                <div className='bg-[#BACD92] rounded-lg'>

                    <div className='flex justify-center gap-10 mt-5'> 

                        <div className='flex items-center justify-center w-40 h-40 border-8 border-white bg-[#0A6847] rounded-full m-5 transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-6'>
                            <div className='text-white font-bold text-3xl'>
                                Django
                            </div>
                        </div>


                        <div className='w-32 h-32 transition-all duration-300 ease-in-out  hover:scale-110 hover:-rotate-6' style={{ backgroundColor: '#BACD92', display: 'inline-block' }}>
                            <img src="https://th.bing.com/th/id/OIP.o4sN9byJFy1gvWF0V0-_EAHaJv?rs=1&pid=ImgDetMain" style={{ mixBlendMode: 'multiply' }} />
                        </div>
                        
                        <div className='bg-[#80BCBD] h-32 w-24 mt-5 flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-6'>
                            <div className='text-white font-bold text-3xl'>
                                SQL
                            </div>
                        </div>
                    </div>
                </div>
            );
                break;
            case 'frontend':
                setContenidoHabilidad(
                    <div className='bg-[#212121] rounded-lg' >
                        <div className='flex items-center justify-center transition-all duration-500 ease-in-out' style={{ transform: 'translateX(-8%)' }}>
                            <div className='w-52 h-52 transition-transform duration-500 ease-in-out hover:translate-x-50%'>
                                <img src='https://joshuafrilot.com/img/react-logo.png' className='rounded-full' />
                            </div>
                            <div className='ml-5'> 
                                <div className="form-control" style={{
                                    animation: 'fadeIn 1550ms ease-in-out forwards'
                                }}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text"></span> 
                                        <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                                    </label>
                                </div>

                                <div className="form-control" style={{
                                    animation: 'fadeIn 1450ms ease-in-out forwards'
                                }}>
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Remember me</span>
                                        <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                                    </label>
                                </div>
                            </div>

                            <div className='ml-5' style={{
                                    animation: 'fadeIn 1350ms ease-in-out forwards'
                                }}>
                            <input type="checkbox" defaultChecked className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"  />
                            <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                            </div>
                            
                            <div className='mr-12'> 
                                <div>
                                    <button className="btn btn-info mr-2" style={{
                                    animation: 'fadeIn 1150ms ease-in-out forwards'
                                    }}>Info</button>
                                    <button className="btn btn-success mr-2" style={{
                                    animation: 'fadeIn 1050ms ease-in-out forwards'
                                    }}>Success</button>
                                    <button className="btn btn-warning mr-2" style={{
                                    animation: 'fadeIn 950ms ease-in-out forwards'
                                    }}>Warning</button>
                                    <button className="btn btn-error mr-2" style={{
                                    animation: 'fadeIn 850ms ease-in-out forwards'
                                    }}>Error</button>
                                </div>
                                <div className='mt-10'  style={{
                            animation: 'fadeIn 750ms ease-in-out forwards'
                            }}>
                                    <input type="range" min={0} max="100" className="range range-primary" />
                                </div>
                                
                            </div>

                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary"  style={{
                                    animation: 'fadeIn 550ms ease-in-out forwards'
                                    }} role="progressbar">70%</div>
                            
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button  style={{
                            animation: 'fadeIn 350ms ease-in-out forwards'
                            }} className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
                        <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" 
                        style={{
                            animation: 'fadeIn 150ms ease-in-out forwards'
                            }}/>
                        </div>
                    </div>
                );
                break;
            case 'analisis':
                setContenidoHabilidad(
                    <div className='bg-[#BACD92] rounded-lg p-5 ' style={{ backgroundImage: `url('https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/paisaje.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        
                        <div style={{
                            animation: 'fadeInScale 450ms ease-in-out forwards'
                            }}> 
                        <div className="navbar bg-[#0A6847] ">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>New</a></li>
                                        <li><a>Open</a></li>
                                        <li><a>Save</a></li>
                                        <li><a>Export</a></li>
                                    </ul>
                                </div>
                                <a className="btn btn-ghost text-xl">MiniExcel</a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li><a>New</a></li>
                                    <li>
                                        <details>
                                        <summary>Insert</summary>
                                        <ul className="p-2">
                                            <li><a>Row</a></li>
                                            <li><a>Column</a></li>
                                            <li><a>Formula</a></li>
                                        </ul>
                                        </details>
                                    </li>
                                    <li><a>Save</a></li>
                                </ul>
                            </div>
                            <div className="navbar-end">
                                <button className="btn">Login</button>
                            </div>
                        </div>


                        <div className='bg-white'>
                            <div className="overflow-x-auto">
                                {<Tabla/>}
                            </div>
                        </div>
                        </div>
                    </div>
                );
                break;
            case 'cualitativos':
                setContenidoHabilidad(
                    <div className='bg-[#FFE6E6] rounded-lg'>
                        <div className='grid grid-cols-2 gap-4 mt-5 p-8'>
                            <div className="card card-side bg-[#7469B6] shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
                                <figure className='w-1/3'><img className='w-full h-full object-cover rounded-l-lg' src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/53bb0a5c8ce69193bdf63243aa968925ab60842e/image/idea.jpg" alt="Mente analítica"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white">Mente analítica</h2>
                                    <p className="text-white">{texto1}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-[#AD88C6] shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
                                <figure className='w-1/3'><img className='w-full h-full object-cover rounded-l-lg' src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/plastilina.jpg" alt="Adaptación"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white">Adaptación</h2>
                                    <p className="text-white">{texto2}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-[#AD88C6] shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
                                <figure className='w-1/3'><img className='w-full h-full object-cover rounded-l-lg' src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/solucion.jpg" alt="Proactivo"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white">Proactivo</h2>
                                    <p className="text-white">{texto3}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-[#7469B6] shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110">
                                <figure className='w-1/3'><img className='w-full h-full object-cover rounded-l-lg' src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/rocas.jpg" alt="Percistencia"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white">Persistencia</h2>
                                    <p className="text-white">{texto4}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                break;
            default:
                console.log('ID no reconocido');
                setContenidoHabilidad(null);
        }
    };

    return (
        <>
            <div className="bg-[#FCFFE0]">
                
                <div className="navbar bg-[#F5DAD2]">
                    <a className="btn btn-ghost text-xl text-[#1A4D2E] ">🌸Rodolfo🌸</a>
                </div>

                <div className="bg-[#FCFFE0]">

                    <div className="mt-5 bg-[#FCFFE0] flex">
                        <div className="flex-grow p-5">
                            <h1 className="text-xl font-bold text-[#1A4D2E]">¡Hola!, soy Rodolfo Escamilla</h1>
                            <div className="text-[#4F6F52]">
                                {textoDePresentacion}
                            
                            </div>
                            <div className='flex'>
                            <a target="_blank" href="https://github.com/kuchinisu" className="btn btn-accent m-2">github</a>
                            <a className="btn btn-accent m-2" target="_blank" href="https://www.linkedin.com/in/rodolfo-emmanuel-escamilla-tabares-57461924a/">Linkedin</a>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1DgQ_kspgb9Pj2CwGB5d0pPZTbVAruzrH?usp=sharing" className="btn btn-accent m-2">cv</a>

                            </div>
                        </div>

                        <div className="avatar flex items-center justify-center p-8 mr-24 bg-[#BACD92] rounded-full shadow-around transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:bg-[#A4C8A4]">
                            <div className="w-48 h-48 rounded-full ring ring-[#75A47F] ring-offset-base-100 ring-offset-2">
                                <img src="https://scontent.fntr6-4.fna.fbcdn.net/v/t39.30808-6/431233835_6626407440792352_5572649842603056080_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mUPrhWnLDpUQ7kNvgG8mNz-&_nc_ht=scontent.fntr6-4.fna&oh=00_AfDfdqT38FAQWkLjKBCz5X7Y2_ix9SyvDX7R1MVaSH1X6w&oe=663A74CF" alt="Rodolfo Escamilla" />
                            </div>
                        </div>


                    </div>

                <div>
                    <div className="divider divider-warning opacity-30"></div>
                </div>

                <h className="font-bold text-[#1A4D2E] text-xl ml-5" >
                    Habilidades
                </h>

                <div id='presiona' className=" ml-80 font-bold text-[#1A4D2E]">Presionar:</div>

                <div className="flex justify-center gap-4 mt-5">
                    <button onClick={() => cambiarVentanaDeHabilidades('backend')} className="px-4 py-2 bg-[#AD88C6] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Backend
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('frontend')} className="px-4 py-2 bg-[#AD88C6] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Frontend
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('analisis')} className="px-4 py-2 bg-[#AD88C6] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Análisis
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('cualitativos')} className="px-4 py-2 bg-[#AD88C6] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Cualitativos
                    </button>

                </div>


                <CSSTransition in={inProp} timeout={500} classNames="content">
                    <div className='m-5 ml-24 mr-24'>
                        {contenidoHabilidad}
                        
                    </div>
                    
                </CSSTransition>

                
                <div className='divider divider-warning opacity-30'></div>
                <div className='bg-blue-100 '>
                    <h className="font-bold text-lg text-[#1A4D2E] pl-5">Quieres saber más de mí? Chatea con Rodo-Bot!</h>

                    <div className='flex justify-center '>
                        <div style={{
                            position: "relative", 
                            height: "600px", 
                            width: "900px", 
                            borderRadius: "20px", 
                            overflow: "hidden",
                            
                        }}>
                            <MainContainer>
                                <ChatContainer>
                                    <MessageList scrollBehavior="smooth" typingIndicator={isTyping ? <TypingIndicator content="Rodo-bot está escribiendo" /> : null}>
                                        {messages.map((message, i) => (
                                            <div key={i} className={`message ${message.sender === 'ChatGPT' ? 'message-gpt' : 'message-user'}`}>
                                                {message.message}
                                            </div>
                                        ))}
                                    </MessageList>

                                    <MessageInput placeholder="di algo" onSend={handleSend} />
                                </ChatContainer>
                            </MainContainer>
                        </div>
                    </div>

                </div>

                
                <div>
                    <div className="divider divider-warning opacity-30"></div>
                </div>

                <div>
                    <h className="font-bold text-lg text-[#1A4D2E] text-xl ml-5" >proyectos</h>
                </div>
                </div>

            
                <div> 
                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/blog1.png" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Blog react+Django</h2>
                            <p className="text-white">
                            El proyecto es un blog de arte, el cual usa postrgreSQL como base de datos, permite a los usuarios registrarse y recibir un correo de verificación de su cuenta por correo con ayuda de SendGrid.
                            -Postear imagenes.
                            -Comentar.
                            -Foro de discucion de usuario.
                            -Likear posts.
                            </p>
                            <div className="card-actions justify-end">
                            <a className="btn btn-primary" target="_blank" href="https://github.com/kuchinisu/panArt.git">Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/excelreact.png" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Excel QueryPower + Django</h2>
                            <p className="text-white">
                                Este proyecto permite el procesamiento de datos financieros y de recursos húmanos de una base MySQL a travez de django, las tablas de exel se actualizan con request al servidor de django que usa MySQL
                            </p>
                            <div className="card-actions justify-end">
                            <a className="btn btn-primary" target="_blank" href="https://github.com/kuchinisu/django-Excel.git">Github</a>
                            </div>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/dashboard.png" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Dashboard de Excel</h2>
                            <p className="text-white">Dashboard interactivo de excel que no solo permite visualizar los datos, si no que tambien permite añadir datos de forma automaitca a travez del mismo dashboard, usando una tabla como formulario, funciona con logica de las formilas y con Visual Basic</p>
                            <div className="card-actions justify-end">
                            <a className="btn btn-primary" target="_blank" href="https://drive.google.com/drive/folders/1eQO0wG-6vZxbivJKttvGaGsnjNsGecsw?usp=sharing">Drive</a>
                            </div>
                        </div>
                    </div>
            
                </div>

                <footer className="bg-[#212121]  footer items-center p-4 text-neutral-content">
                    <aside className="items-center grid-flow-col">
                        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
                        <p>Gracias por su atención</p>
                    </aside> 
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </nav>
                </footer>
            </div>
        </>
    )
};

export default Home