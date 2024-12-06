import { useLocation, useNavigate } from 'react-router-dom'
import { ButtonTopBar } from '../ButtonTopBar'
import './styles.css'

export const TopBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const isHome = location.pathname === '/' ? true : false
    const isAdmin = location.pathname.includes('-admin') ? true : false
    const handleClick = () => {
        if(isHome)return navigate('/admin')
        if(isAdmin)return navigate(-1)
    
        navigate('/')
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