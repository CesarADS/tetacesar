import { useNavigate } from "react-router-dom"
import './styles.css'

export const Button = ({text, to}) => {

    const navigate = useNavigate()    

    return (
        <button onClick={() => navigate(to)} className="botao">{text}</button>
    )

}