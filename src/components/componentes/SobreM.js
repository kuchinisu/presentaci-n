export const SobreMi = () => {
    const textoDePresentacion = (
        <p>
           <div>
                <li>👨‍💻Desarrollador Full-Stack de apps web y apps de escritorio con los lenguajes de <span className='bg-[#03AED2] p-1 font-bold text-gray-500 rounded-md'>Py</span><span className='bg-[#FDDE55] p-1 font-bold text-gray-500 rounded-md'>thon</span>, <span className='bg-[#F3CA52] text-white p-1 rounded-md font-bold'>Javascript</span>, <span className='bg-gray-300 p-1 rounded-sm font-bold'>SQL</span>, <span className='bg-blue-200 p-1 text-white font-bold'>C++</span>. </li>
                <li>🖨️Administración y análisis de datos con Excel.</li>
            </div>

            <br />

            🍓Soy un gran amante de los números, la estádistica y la técnología, tengo la 
            idea de que cualquier cosa en esta vida se puede entender a travéz de una 
            gráfica. <div className='text-[#32012F]'>Aunque mi principal fuerte es el backend, el manejo y visualización de datos y
            otro tipo de herramientas de apoyo como Excel y google cloud tambén me desempeño 
            como desarrollador de front-end.</div> 🍓

        </p>

        
    );
    return(
        <div>
            <div className="m-10 border border-black border-2 ">
                <div className="mt-5 p-10 md:flex">
                    <div className="flex-grow p-5">
                        <h1 className="text-3xl font-bold mb-5">¡Hola!, soy Rodolfo Escamilla</h1>
                        <div className="">
                            {textoDePresentacion}
                        </div>
                        <div className='flex'>
                        <a target="_blank" href="https://github.com/kuchinisu" className="btn btn-accent m-2">github</a>
                        <a className="btn btn-accent m-2" target="_blank" href="https://www.linkedin.com/in/rodolfo-emmanuel-escamilla-tabares-57461924a/">Linkedin</a>
                        <a target="_blank" href="https://drive.google.com/drive/folders/1DgQ_kspgb9Pj2CwGB5d0pPZTbVAruzrH?usp=sharing" className="btn btn-accent m-2">cv</a>

                        </div>
                    </div>

                    <div className="avatar flex items-center justify-center">
                        <div className="w-72 h-72  ring-offset-base-100 ring-offset-2 m-5">
                            <img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/static/foto_de_perfil.jpg" alt="Rodolfo Escamilla" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}