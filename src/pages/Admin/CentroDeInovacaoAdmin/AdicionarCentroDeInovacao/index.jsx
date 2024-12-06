import { useState } from "react";
import { TopBar } from "../../../../components/TopBar";
import "./styles.css";

export const AdicionarCentroDeInovacaoAdmin = () => {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [estado, setEstado] = useState("");
    const [dataFundacao, setDataFundacao] = useState("");
    const [numero, setNumero] = useState("");

    // Formata a data para dd/mm/yyyy
    const formatDateToDDMMYYYY = (date) => {
        if (!date) return "";
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    // Formata a data para yyyy-mm-dd
    const formatDateToYYYYMMDD = (date) => {
        if (!date) return "";
        const [day, month, year] = date.split("/");
        return `${year}-${month}-${day}`;
    };

    // Atualiza a data no formato dd/mm/yyyy
    const handleDateChange = (e) => {
        const value = e.target.value; // Valor no formato yyyy-mm-dd
        const formattedDate = formatDateToDDMMYYYY(value); // Converte para dd/mm/yyyy
        setDataFundacao(formattedDate); // Atualiza o estado
    };

    const onConfirm = () => {
        console.log("Novo Centro de Inovação Adicionado:", {
            nome,
            tipo,
            estado,
            dataFundacao,
            numero,
        });
    };

    return (
        <div>
            <TopBar />
            <main className="admin-edit-container">
                <div className="admin-edit-card">
                    <div className="card-content-inputs">
                        <h1>Adicionar Centro de Inovação</h1>
                    </div>
                    <div className="card-content-inputs">
                        <label htmlFor="nome">Nome do Centro de Inovação</label>
                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome do Centro de Inovação"
                        />
                    </div>
                    <div className="card-content-inputs">
                        <label htmlFor="tipo">Tipo do Centro de Inovação</label>
                        <input
                            id="tipo"
                            type="text"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            placeholder="Tipo do Centro de Inovação"
                        />
                    </div>
                    <div className="card-content-inputs">
                        <label htmlFor="estado">Estado do Centro de Inovação</label>
                        <input
                            id="estado"
                            type="text"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            placeholder="Estado do Centro de Inovação"
                        />
                    </div>
                    <div className="card-content-inputs">
                        <label htmlFor="dataFundacao">Data da Fundação</label>
                        <input
                            id="dataFundacao"
                            type="date"
                            value={formatDateToYYYYMMDD(dataFundacao)} // Formato compatível com o tipo date
                            onChange={handleDateChange} // Atualiza no formato dd/mm/yyyy
                        />
                    </div>
                    <div className="card-content-inputs">
                        <label htmlFor="numero">Numero</label>
                        <input
                            id="numero"
                            type="number"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            placeholder="12345"
                        />
                    </div>
                    <button className="admin-edit-button" onClick={onConfirm}>
                        Adicionar
                    </button>
                </div>
            </main>
        </div>
    );
};
