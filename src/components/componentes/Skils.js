import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: "Lenguajes de Programación",
            items: ["Python", "SQL", "JavaScript"]
        },
        {
            category: "Frameworks y Librerías",
            items: ["Django", "Flask", "React", "TensorFlow", "PyTorch"]
        },
        {
            category: "Bases de Datos",
            items: ["PostgreSQL", "MySQL"]
        },
        {
            category: "Herramientas de Cloud",
            items: ["AWS (RDS, EC2, S3, Amplify)", "Microsoft Azure (Azure SQL Database)"]
        },
        {
            category: "Otras Herramientas",
            items: ["git", "Excel (programador)"]
        }
    ];

    return (
        <div className="p-10">
            <div className="space-y-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white shadow-lg p-6 rounded-lg transition duration-300 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-[#1A4D2E] mb-3">{skill.category}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {skill.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
