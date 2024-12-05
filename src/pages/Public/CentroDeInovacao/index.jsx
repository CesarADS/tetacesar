import { useEffect, useState } from "react"
import { Card } from "../../../components/Card"
import { TopBar } from "../../../components/TopBar"
import './style.css'
import { useNavigate } from "react-router-dom"



export const CentroDeInovacao = () => {
    const [ response, setResponse ] = useState([])
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    const location = useNavigate()
    
    useEffect(() => {
        setLoading(true)
        try {
            fetch('http://localhost:8080/CentrosInovacao/carregar')
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

    useEffect(() => {
        setData(response.map((object) => {
            return {
                Titulo: object.titulo,
                Descrição: object.descricao,
                Estado: object.estado,
                Cidade: object.cidade,
            }
        }))
    }, [response])

    const req = [{
        id: 1,
        titulo: 'muito foda',
        descricao: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        estado: 'sc',
        cidade: 'sao paulo',
    }, 
    {
        id: 2,
        titulo: 'muito foda',
        descricao: 'gna aliqua. Ut enim ad minim venit occaecat cupidat anim id est laborum.',
        estado: 'sc',
        cidade: 'sao paulo',
    }, 
    {
        id: 3,
        titulo: 'muito foda',
        descricao: 'lorem i',
        estado: 'sc',
        cidade: 'sao paulo',
    }]

    
    const objectFakeArrumado= req.map((object) => {
        return {
            id: object.id,
            Titulo: object.titulo,
            Descrição: object.descricao,
            Estado: object.estado,
            Cidade: object.cidade,
        }
    })
    return (
        <body>
            <TopBar></TopBar>
            <main>
                <h1> Centros de Inovação </h1>
                {
                    loading ? <p>Carregando...</p> 
                    :
                    (
                        <div className="cards">
                            {
                                objectFakeArrumado.length > 0 ? (
                                    objectFakeArrumado.map((object, i) => (
                                        <Card 
                                        key={i} 
                                        infoObject={object} 
                                        title={object.titulo} 
                                        onClick={() =>  location(`/detalhes-centro-de-inovacao/${object.id}`)}>
                                        </Card>
                                    ))
                                    
                                )
                                :
                                (
                                    <p>Sem Informações</p>
                                )
                            }
                        </div>
                    )
                }
            </main>
        </body>
    )
}