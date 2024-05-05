import {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../transitions.css'
function Home () {

    const textoDePresentacion = (
        <p>
            Soy Rodolfo Escamilla, soy una persona sumamente analítica. 🤓☝️<br />
            Tengo un fuerte impulso por siempre buscar soluciones,
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
                    <div className='bg-[#BACD92] rounded-lg p-5 ' style={{ backgroundImage: `url('https://example.com/image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        
                        <div style={{
                            animation: 'fadeInScale 350ms ease-in-out forwards'
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
                                <table className="table table-xs table-pin-cols ">
                                    <thead className=''>
                                    <tr>
                                        <th></th> 
                                        <th>Name</th> 
                                        <th>Job</th> 
                                        <th>company</th> 
                                        <th>location</th> 
                                        <th>Last Login</th> 
                                        <th>Favorite Color</th>
                                    </tr>
                                    </thead> 
                                    <tbody>
                                    <tr>
                                        <th>1</th> 
                                        <td>Cy Ganderton</td> 
                                        <td>Quality Control Specialist</td> 
                                        <td>Littel, Schaden and Vandervort</td> 
                                        <td>Canada</td> 
                                        <td>12/16/2020</td> 
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <th>2</th> 
                                        <td>Hart Hagerty</td> 
                                        <td>Desktop Support Technician</td> 
                                        <td>Zemlak, Daniel and Leannon</td> 
                                        <td>United States</td> 
                                        <td>12/5/2020</td> 
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>3</th> 
                                        <td>Brice Swyre</td> 
                                        <td>Tax Accountant</td> 
                                        <td>Carroll Group</td> 
                                        <td>China</td> 
                                        <td>8/15/2020</td> 
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <th>4</th> 
                                        <td>Marjy Ferencz</td> 
                                        <td>Office Assistant I</td> 
                                        <td>Rowe-Schoen</td> 
                                        <td>Russia</td> 
                                        <td>3/25/2021</td> 
                                        <td>Crimson</td>
                                    </tr>
                                    <tr>
                                        <th>5</th> 
                                        <td>Yancy Tear</td> 
                                        <td>Community Outreach Specialist</td> 
                                        <td>Wyman-Ledner</td> 
                                        <td>Brazil</td> 
                                        <td>5/22/2020</td> 
                                        <td>Indigo</td>
                                    </tr>
                                    <tr>
                                        <th>6</th> 
                                        <td>Irma Vasilik</td> 
                                        <td>Editor</td> 
                                        <td>Wiza, Bins and Emard</td> 
                                        <td>Venezuela</td> 
                                        <td>12/8/2020</td> 
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>7</th> 
                                        <td>Meghann Durtnal</td> 
                                        <td>Staff Accountant IV</td> 
                                        <td>Schuster-Schimmel</td> 
                                        <td>Philippines</td> 
                                        <td>2/17/2021</td> 
                                        <td>Yellow</td>
                                    </tr>
                                    <tr>
                                        <th>8</th> 
                                        <td>Sammy Seston</td> 
                                        <td>Accountant I</td> 
                                        <td>O'Hara, Welch and Keebler</td> 
                                        <td>Indonesia</td> 
                                        <td>5/23/2020</td> 
                                        <td>Crimson</td>
                                    </tr>
                                    <tr>
                                        <th>9</th> 
                                        <td>Lesya Tinham</td> 
                                        <td>Safety Technician IV</td> 
                                        <td>Turner-Kuhlman</td> 
                                        <td>Philippines</td> 
                                        <td>2/21/2021</td> 
                                        <td>Maroon</td>
                                    </tr>
                                    <tr>
                                        <th>10</th> 
                                        <td>Zaneta Tewkesbury</td> 
                                        <td>VP Marketing</td> 
                                        <td>Sauer LLC</td> 
                                        <td>Chad</td> 
                                        <td>6/23/2020</td> 
                                        <td>Green</td>
                                    </tr>
                                    <tr>
                                        <th>11</th> 
                                        <td>Andy Tipple</td> 
                                        <td>Librarian</td> 
                                        <td>Hilpert Group</td> 
                                        <td>Poland</td> 
                                        <td>7/9/2020</td> 
                                        <td>Indigo</td>
                                    </tr>
                                    <tr>
                                        <th>12</th> 
                                        <td>Sophi Biles</td> 
                                        <td>Recruiting Manager</td> 
                                        <td>Gutmann Inc</td> 
                                        <td>Indonesia</td> 
                                        <td>2/12/2021</td> 
                                        <td>Maroon</td>
                                    </tr>
                                    <tr>
                                        <th>13</th> 
                                        <td>Florida Garces</td> 
                                        <td>Web Developer IV</td> 
                                        <td>Gaylord, Pacocha and Baumbach</td> 
                                        <td>Poland</td> 
                                        <td>5/31/2020</td> 
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>14</th> 
                                        <td>Maribeth Popping</td> 
                                        <td>Analyst Programmer</td> 
                                        <td>Deckow-Pouros</td> 
                                        <td>Portugal</td> 
                                        <td>4/27/2021</td> 
                                        <td>Aquamarine</td>
                                    </tr>
                                    <tr>
                                        <th>15</th> 
                                        <td>Moritz Dryburgh</td> 
                                        <td>Dental Hygienist</td> 
                                        <td>Schiller, Cole and Hackett</td> 
                                        <td>Sri Lanka</td> 
                                        <td>8/8/2020</td> 
                                        <td>Crimson</td>
                                    </tr>
                                    <tr>
                                        <th>16</th> 
                                        <td>Reid Semiras</td> 
                                        <td>Teacher</td> 
                                        <td>Sporer, Sipes and Rogahn</td> 
                                        <td>Poland</td> 
                                        <td>7/30/2020</td> 
                                        <td>Green</td>
                                    </tr>
                                    <tr>
                                        <th>17</th> 
                                        <td>Alec Lethby</td> 
                                        <td>Teacher</td> 
                                        <td>Reichel, Glover and Hamill</td> 
                                        <td>China</td> 
                                        <td>2/28/2021</td> 
                                        <td>Khaki</td>
                                    </tr>
                                    <tr>
                                        <th>18</th> 
                                        <td>Aland Wilber</td> 
                                        <td>Quality Control Specialist</td> 
                                        <td>Kshlerin, Rogahn and Swaniawski</td> 
                                        <td>Czech Republic</td> 
                                        <td>9/29/2020</td> 
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>19</th> 
                                        <td>Teddie Duerden</td> 
                                        <td>Staff Accountant III</td> 
                                        <td>Pouros, Ullrich and Windler</td> 
                                        <td>France</td> 
                                        <td>10/27/2020</td> 
                                        <td>Aquamarine</td>
                                    </tr>
                                    <tr>
                                        <th>20</th> 
                                        <td>Lorelei Blackstone</td> 
                                        <td>Data Coordiator</td> 
                                        <td>Witting, Kutch and Greenfelder</td> 
                                        <td>Kazakhstan</td> 
                                        <td>6/3/2020</td> 
                                        <td>Red</td>
                                    </tr>
                                    </tbody> 
                                    <tfoot>
                                    <tr>
                                        <th></th> 
                                        <th>Name</th> 
                                        <th>Job</th> 
                                        <th>company</th> 
                                        <th>location</th> 
                                        <th>Last Login</th> 
                                        <th>Favorite Color</th>
                                    </tr>
                                    </tfoot>
                                </table>
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
                    <a className="btn btn-ghost text-xl">Rodolfo</a>
                </div>

                <div className="bg-[#FCFFE0]">

                    <div className="mt-5 bg-[#FCFFE0] flex">
                        <div className="flex-grow p-5">
                            <h1 className="text-xl font-bold text-[#1A4D2E]">Sobre mí</h1>
                            <div className="text-[#4F6F52]">
                            {textoDePresentacion}
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

                <h className="font-bold text-[#1A4D2E]" >
                    Habilidades
                </h>

                <div className="flex justify-center gap-4 mt-5">
                    <button onClick={() => cambiarVentanaDeHabilidades('backend')} className="px-4 py-2 bg-[#F5DAD2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Backend
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('frontend')} className="px-4 py-2 bg-[#F5DAD2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Frontend
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('analisis')} className="px-4 py-2 bg-[#F5DAD2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Análisis
                    </button>
                    <button onClick={() => cambiarVentanaDeHabilidades('cualitativos')} className="px-4 py-2 bg-[#F5DAD2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A4D2E] focus:outline-none focus:ring-2 focus:ring-[#75A47F] focus:ring-opacity-50">
                        Cualitativos
                    </button>
                </div>

                <CSSTransition in={inProp} timeout={500} classNames="content">
                    <div className='m-5 ml-24 mr-24'>
                        {contenidoHabilidad}
                    </div>
                </CSSTransition>

                <div>
                    <div className="divider divider-warning opacity-30"></div>
                </div>

                <div>
                    <h className="font-bold text-lg text-[#1A4D2E]" >proyectos</h>
                </div>
                </div>

            
                <div> 
                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
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
                            <a className="btn btn-primary" target="_blank" href="https://drive.google.com/drive/folders/1Tky5_lZMpqGmG4WfV-IvdnAYt-SunI0W?usp=sharing">Listen</a>
                            </div>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Excel QueryPower + Django</h2>
                            <p className="text-white">
                                Este proyecto permite el procesamiento de datos financieros y de recursos húmanos de una base MySQL a travez de django, las tablas de exel se actualizan con request al servidor de django que usa MySQL
                            </p>
                            <div className="card-actions justify-end">
                            <a className="btn btn-primary" target="_blank" href="https://drive.google.com/drive/folders/1id2I-5GXN1JChF0oYAbDr_tdSX50Z7lY?usp=sharing">Listen</a>
                            </div>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-[#BACD92] shadow-xl m-5">
                        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Dashboard de Excel</h2>
                            <p className="text-white">Dashboard interactivo de excel que no solo permite visualizar los datos, si no que tambien permite añadir datos de forma automaitca a travez del mismo dashboard, usando una tabla como formulario, funciona con logica de las formilas y con Visual Basic</p>
                            <div className="card-actions justify-end">
                            <a className="btn btn-primary" target="_blank" href="https://drive.google.com/drive/folders/1eQO0wG-6vZxbivJKttvGaGsnjNsGecsw?usp=sharing">Listen</a>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </>
    )
};

export default Home