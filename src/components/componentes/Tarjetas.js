const Tarjetas = () => {
    return(
        <div> 
            <div className="card lg:card-side shadow-xl m-5">
                <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/blog1.png" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Blog react+Django</h2>
                    <p className="">
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

            <div className="card lg:card-side shadow-xl m-5">
                <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/excelreact.png" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title ">Excel QueryPower + Django</h2>
                    <p className="">
                        Este proyecto permite el procesamiento de datos financieros y de recursos húmanos de una base MySQL a travez de django, las tablas de exel se actualizan con request al servidor de django que usa MySQL
                    </p>
                    <div className="card-actions justify-end">
                    <a className="btn btn-primary" target="_blank" href="https://github.com/kuchinisu/django-Excel.git">Github</a>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  shadow-xl m-5">
                <figure><img src="https://raw.githubusercontent.com/kuchinisu/presentaci-n/main/image/dashboard.png" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title ">Dashboard de Excel</h2>
                    <p className="">Dashboard interactivo de excel que no solo permite visualizar los datos, si no que tambien permite añadir datos de forma automaitca a travez del mismo dashboard, usando una tabla como formulario, funciona con logica de las formilas y con Visual Basic</p>
                    <div className="card-actions justify-end">
                    <a className="btn btn-primary" target="_blank" href="https://drive.google.com/drive/folders/1eQO0wG-6vZxbivJKttvGaGsnjNsGecsw?usp=sharing">Drive</a>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default Tarjetas;