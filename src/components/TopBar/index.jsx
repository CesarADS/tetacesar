import { useLocation, useNavigate } from 'react-router-dom'
import { ButtonTopBar } from '../ButtonTopBar'
import './styles.css'
import axios from 'axios'

export const TopBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const isHome = location.pathname === '/' ? true : false
    const isAdmin = location.pathname.includes('-admin') ? true : false

    const showAlertWithInput = () => {
        const userInput = prompt("Digite a senha do administrador:");
        const response = axios.post("http://localhost:8080/login", { username: 'admin', password: userInput})
        if (userInput !== null) return navigate('/admin')
        else alert("Você cancelou a entrada.");
    }

    const handleClick = () => {
        if(isHome)  return showAlertWithInput()
        if(isAdmin) return navigate(-1)
        return navigate('/')
    }


    return (
        <header>
            <div className='top-div'>
            <ButtonTopBar onClick={() => handleClick()} >
                { isHome ? 'Area do adiministrador' : <img src="/home.png" className='home-icon'/>}
            </ButtonTopBar>
            </div>
            <div className="logo top-div">
                <img src="/bandeira.png" alt="Bandeira de Santa Catarina" className="bandeira"/>
                <h1>Conecta Inovação</h1>
            </div>
            <div className='top-div'>

            </div>
        </header>
    )
}