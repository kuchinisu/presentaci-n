import React from 'react';

const Experiencia = () => { 
    const Experiencias = [
        {
            titulo: "Desarrollador de base de datos",
            empresa: "Ferretería del Norte",
            fechas: "2020-2023",
            descripcion: "Tuve la responsabilidad de desarrollar y dar mantendimiento a la base de datos de la pyme, en la que se mantenía el control y conteo del inventario, salidas y entradas de productos y las finanzas",
            herramientas_usadas: [
                {nombre: 'Django', icono: '🌐'}, 
                {nombre: 'AWS RDS', icono: '☁️'}, 
                {nombre: 'AWS S3', icono: '☁️'}, 
                {nombre: 'AWS EC2', icono: '☁️'}, 
            ],
        },
        {
            titulo: "Auxiliar en finanzas",
            empresa: "Ferretería del Norte",
            fechas: "2023-2024",
            descripcion: "Usando la base de datos y mi experiencia trabajando en ella, tuve la responsabilidad de brindar herramientas y apoyo para hacer más eficiente y efectivo el trabajo de análisis financiero y toma de decisiones",
            herramientas_usadas: [
                {nombre: 'Excel (programador y QueryPower)', icono: '📊'},
                {nombre: 'MySQL Workbench', icono: '🐬'}, 
                {nombre: 'pgAdmin4', icono: '🐘'}, 
            ],
        },
        {
            titulo: "Desarrollador Full-Stack",
            empresa: "FreeLancer",
            fechas: "2022-presente",
            descripcion: "Mi fuerte necesidad de aplicar y practicar mis habilidades ah hecho que desde el 2022 de forma esporádica tome proyectos como FreeLancer, trabajando para diferentes propósitos, desde programación hasta diseño.",
            herramientas_usadas: [
                {nombre: 'GODOT', icono: '🎮'},
                {nombre: 'React', icono: '⚛️'}, 
                {nombre: 'Blender', icono: '🖌️'}, 
                {nombre: 'Flask', icono: '🍶'}, 
                {nombre: 'AWS', icono: '☁️'}, 
                {nombre: 'Wix', icono: '🌐'}, 
            ],
        },
    ];

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">Experiencia Laboral</h2>
            <div className="space-y-8 mx-auto md:flex md:justify-center md:space-y-0 md:space-x-5">
                {Experiencias.map((exp, index) => (
                    <div key={index} className={`bg-white shadow-lg p-6 rounded-lg transition duration-300 hover:shadow-2xl ${index !== Experiencias.length - 1 ? 'md:mr-5' : ''}`}>
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#1A4D2E]">{exp.titulo}</h3>
                                <div className="text-lg text-gray-600">{exp.empresa}</div>
                                <div className="text-sm text-gray-500">{exp.fechas}</div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.descripcion}</p>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1A4D2E]">Herramientas usadas:</h4>
                            <ul className="list-disc list-inside ml-4">
                                {exp.herramientas_usadas.map((herramienta, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <span className="mr-2">{herramienta.icono}</span> {herramienta.nombre}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiencia;
