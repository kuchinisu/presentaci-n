import React from 'react';

const Tarjetas = () => {
    const proyectos = [
        {
            titulo: "Base de datos De odontología",
            descripcion: "El proyecto es una app de django, que usa una base de datos MySQL, inspirado por una serie de detectives, cree una app que permite registrar pacientes, los modelos 3d de sus bocas, aparatos de ortodoncia etc. Además, permite subir el modelo 3d de la boca de otra persona, como la de un cuerpo no identificado para que la app busque parentezco entre los modelos 3d de todas las personas registradas en la base de datos.",
            imgSrc: "https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/blog1.png",
            link: "https://github.com/kuchinisu/odontologia_nic.git"
        },
        {
            titulo: "Excel QueryPower + Django",
            descripcion: "Proyecto de excel de recursos humanos, mantiene las tablas sobre los trabajadores actualizadas, tomando los datos de una base de datos SQL mediante solicitudes a un servidor de django con Excel QueryPower.",
            imgSrc: "https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/excelreact.png",
            link: "https://github.com/kuchinisu/django-Excel.git"
        },
        {
            titulo: "Dashboard de Excel",
            descripcion: "Este dashboard interactivo muestra de forma gráfica la información de las ventas de una tienda de ropa, permite interactuar con las graficas y además tiene la funcion de registrar a travéz del mismo dashboard nuevas ventas y actualizarse automaticamente, usa una combinacion de VBA y la misma logica de las formulas de Excel.",
            imgSrc: "https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/dashboard.png",
            link: "https://drive.google.com/drive/folders/1eQO0wG-6vZxbivJKttvGaGsnjNsGecsw?usp=sharing"
        }
    ];

    return (
        <div className="p-10 md:flex">
            <div className='pr-96'>
                <h2 className="text-2xl font-bold mb-5 text-center">Portfolio</h2>
                <p className="text-center mb-10 text-gray-600">Proyectos favoritos</p>
            </div>
            
            
            <div className="md:space-y-8">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        
                        <div className="text-2xl text-black font-bold w-10"><div>{index + 1}</div> <div className='divider'/> </div>
                        <div className='divider p-2'/>
                        <div>
                            <h3 className="text-xl font-semibold font-mono text-[#1A4D2E]">{proyecto.titulo}</h3>
                            <p className="text-gray-600 mb-2">{proyecto.descripcion}</p>
                            
                            <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href={proyecto.link}>Ver en GitHub</a>
                            <div className='divider'></div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tarjetas;
