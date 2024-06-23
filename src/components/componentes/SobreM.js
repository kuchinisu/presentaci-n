import React from 'react';

const SobreMi = () => {
    const textoDePresentacion = (
        <div className="text-base md:text-lg text-center md:text-left">
            <p>
                "La ciencia no es otra cosa que una perversión de sí misma a menos que tenga como objetivo final el mejoramiento de la humanidad"
            </p>

            <div className='flex justify-end'>
                <div className='font-serif'>
                    -Nikola Tesla
                </div>
            </div>
            
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col justify-center items-center md:py-10">
            <div className="max-w-4xl w-full border border-black rounded-lg p-8 md:p-16 text-center">
                <div className="flex flex-col items-center">
                    <div className="avatar">
                        <div className="w-32 h-32 md:w-48 md:h-48 ring-offset-base-100 ring-offset-2 mb-5">
                            <img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/static/foto_de_perfil.jpg" alt="Rodolfo Escamilla" className="rounded-full" />
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Rodolfo Escamilla Tabares</h1>
                    <h2 className="text-xl md:text-3xl text-gray-600 mb-4">Desarrollador full-stack</h2>
                    {textoDePresentacion}

                    <div className='flex justify-center'>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kuchinisu" className="m-2">
                        <button className="mt-8 px-6 py-2 bg-indigo-800 text-white text-lg rounded-full hover:bg-blue-700">
                            Github
                        </button>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rodolfo-emmanuel-escamilla-tabares-57461924a/" className=" m-2">
                        <button className="mt-8 px-6 py-2 bg-blue-400 text-white text-lg rounded-full hover:bg-blue-700">
                            Linkedin
                        </button>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1DgQ_kspgb9Pj2CwGB5d0pPZTbVAruzrH?usp=sharing" className="m-2">
                        <button className="mt-8 px-6 py-2 bg-red-600 text-white text-lg rounded-full hover:bg-blue-700">
                            CV
                        </button>
                    </a>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SobreMi;
