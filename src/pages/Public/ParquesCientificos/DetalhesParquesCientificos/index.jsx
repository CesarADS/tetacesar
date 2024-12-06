import { useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../../../../components/TopBar";
import './styles.css'
import { useEffect, useState } from "react";



export const DetalhesParquesCientificos = () => {
    const { id } = useParams();
    const [response, setResponse] = useState([])

    const location = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        try {
            fetch('http://localhost:8080/ParquesCientificos/detalhes/' + id)
            .then(response => response.json())
            .then(data => setResponse(data))
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
            console.log(response)
        }
        console.log(data)
    }, [])

    return (
        <body>
            <TopBar></TopBar>
            <main className="cards">
                <div className="card">
                    <h1>Detalhes Parque Científico</h1>
                    <div className="card-info">
                        <h3>Nome:</h3>
                        <p>Centro de Inovação</p>
                    </div>
                    <div className="card-info">
                        <h3>Tipo:</h3>
                        <p>Centro de Inovação</p>
                    </div>
                    <div className="card-info">
                        <h3>Estado:</h3>
                        <p>SC</p>
                    </div>
                    <div className="card-info">
                        <h3>Cidade:</h3>
                        <p>São Paulo</p>
                    </div>
                    <div className="card-info">
                        <h3>Endereço:</h3>
                        <p>Endereço</p>
                    </div>
                    <div className="card-info">
                        <h3>CEP:</h3>
                        <p>888121-020</p>
                    </div>
                    <div className="card-info">
                        <h3>Descrição:</h3>
                        <p>fisaufhsai safhnsapghsapohgsaon sajhf´sajkfd´s aknfaogjsnijgbaigbsiajgjsnad</p>
                    </div>
                    <div className="card-info">
                        <h3>Data de fundação:</h3>
                        <p>12/04/2024</p>
                    </div>
                    <div className="card-info">
                        <h3>Telefone:</h3>
                        <p>+55 00 0000 0000</p>
                    </div>
                    <div className="card-info">
                        <h3>Link</h3>
                        <a href="https://www.google.com.br">https://www.google.com.br</a>
                    </div>
                    <div className="card-info">
                        <h3>Instituição financeira:</h3>
                        <p>instituicao da pqp</p>
                    </div>
                    <button onClick={() => location(`/parques-cientificos`)}>Voltar</button>
                </div>
            </main>
        </body>
    ) 
}  