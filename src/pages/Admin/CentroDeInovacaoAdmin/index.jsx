import { useState } from "react";
import "./styles.css";
import {  useNavigate } from "react-router-dom";

export const CentroDeInovacaoAdmin = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([
        {
            id: 1,
            nome: "Empresa Alpha",
            cidade: "Rio de Janeiro",
            estado: "RJ",
            enderecoCep: "20000-000",
            dataFundacao: "01/01/2000",
            descricao: "Empresa especializada em tecnologia.",
            link: "https://empresaalpha.com",
            telefone: "(21) 1234-5678",
        },
        {
            id: 2,
            nome: "Empresa Beta",
            cidade: "São Paulo",
            estado: "SP",
            enderecoCep: "01000-000",
            dataFundacao: "15/05/1995",
            descricao: "Empresa de consultoria empresarial.",
            link: "https://empresabeta.com",
            telefone: "(11) 9876-5432",
        },
    ]);

    const handleDelete = (id) => {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
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
                            {data.map((item) => (
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
                                    <td>{item.enderecoCep}</td>
                                    <td>{item.dataFundacao}</td>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};
