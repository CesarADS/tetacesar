import { useEffect, useState } from "react";
import "./styles.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";

export const CentroDeInovacaoAdmin = () => {
    
    const {token} = useAuth()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [response, setResponse] = useState()

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/CentrosInovacao/carregar")
            setResponse(response?.data)
        } finally {
        }
    }

    const fetchDataDelete = async (id) => {
        try {
            const response = await axios.delete("http://localhost:8080/CentrosInovacao/excluir/" + id, {headers: {Authorization: `Bearer ${token}`}})
            fetchData()
        } finally {
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setData(response)
    }, [response, fetchDataDelete]
    )

    const handleDelete = (id) => {
        fetchDataDelete(id)
    };

    return (
        <div className="centro-inovacao-admin">
            <main className="admin-table-container">
                <div className="card-table"> 
                    <header className="card-header">
                        <div className="card-header-top-line">
                            <button className="card-header-button-home" onClick={() => navigate('/admin')}> <img src="/home.png" className='home-icon'/></button>
                            <h1 className="title-card-header">Centros de Inovação</h1>
                        </div>
                        <div className="card-header-bottom-line">
                            <button className="card-header-button-add"  onClick={() => navigate('/centros-de-inovacao-admin/adicionar')}>+ Novo Centro</button>
                        </div>
                    </header>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Edição</th>
                                <th>Delete</th>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Endereço CEP</th>
                                <th>Data de Fundação</th>
                                <th>Descrição</th>
                                <th>Link</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.length>0?data.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <button className="edit-btn" onClick={() => navigate(`/centros-de-inovacao-admin/${item.id}`)}>
                                            <i className="fas fa-edit"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.cidade}</td>
                                    <td>{item.estado}</td>
                                    <td>{item.endereco}</td>
                                    <td>{item.data}</td>
                                    <td>{item.descricao}</td>
                                    <td>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Site
                                        </a>
                                    </td>
                                    <td>{item.telefone}</td>
                                </tr>
                            )):null}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};
