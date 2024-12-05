import './styles.css'

export const TopBar = () => {
    return (
        <header>
            <div className="logo">
                <img src="public/bandeira.png" alt="Bandeira de Santa Catarina" className="bandeira"/>
                <h1>Conecta Inovação</h1>
            </div>
            <a onClick="autenticar()" className="admin-button">Área do Administrador</a>
        </header>
    )
}