import { Button } from "../../components/Button"
import { TopBar } from "../../components/TopBar"



export const AdminHome = () => {
    return (
        <body className="home-body">
        <TopBar></TopBar>
        <div className="container">
            <div className="content">
                <h2>Centros de Inovação, Parques Científicos e Coworkings</h2>
                <p>Os Centros de Inovação, Parques Científicos e Coworkings facilitam a interação entre o setor acadêmico, a indústria e o governo, promovendo projetos inovadores e o desenvolvimento de novas tecnologias.</p>
                <div className="options">
                    <Button text="Centros de Inovação" to="/centros-de-inovacao-admin"></Button>
                    <Button text="Parques Científicos" to="/parques-cientificos-admin"></Button>
                    <Button text="Coworkings"          to="/coworkings-admin"></Button>
                </div>
            </div>
        </div>
    </body>
    )
}   