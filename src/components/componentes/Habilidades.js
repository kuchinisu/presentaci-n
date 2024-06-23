import React from 'react';

const Habilidades = () => {
    const events = [
        {
            icon: "🧮",
            status: "",
            role: "Mátematicas",
            date: "",
        },
        {
            icon: "🧠",
            status: "",
            person: "Mente ánalitica",
            date: "",
        },
        {
            icon: "🔨",
            status: "",
            person: "Resolición de problemas",
            date: "",
        },
        {
            icon: "🌊",
            status: "",
            person: "Adaptación",
            date: "",
        },
        {
            icon: "🧽",
            status: "",
            person: "Aprendizaje rápido",
            date: "",
        },
    ];

    return (
        <div className="p-10">
            <div className="space-y-6">
                {events.map((event, index) => (
                    
                    <div className='flex w-full'>
                        <div className="divider divider-horizontal"></div>
                        
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-blue-600">
                                    {event.icon}
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-gray-700">
                                    {event.status} <span className="font-semibold">{event.role || event.person}</span>
                                </p>
                            </div>
                            <div className="ml-auto text-sm text-gray-500">
                                {event.date}
                            </div>
                        </div>
                        
                    </div>
                    
                ))}
            </div>

        </div>
    );
};

export default Habilidades;
