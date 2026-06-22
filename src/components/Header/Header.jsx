import "./Header.css";

import { useDashboard } from "../../context/DashboardContext";

export default function Header() {

    const {

        inicio,
        fim,
        loja,
        lojas,

        setInicio,
        setFim,
        setLoja,

        atualizar

    } = useDashboard();

    function telaCheia() {

        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen();

        } else {

            document.exitFullscreen();

        }

    }

    return (

        <header className="header">

            <div className="header-top">

                <div className="logo">

                    🏠 Casas da Mamãe Analytics

                </div>

                <div className="header-info">

                    <span>Última atualização</span>

                    <strong>{new Date().toLocaleTimeString("pt-BR")}</strong>

                </div>

            </div>

            <div className="header-filtros">

                <div className="campo">

                    <label>Data Inicial</label>

                    <input

                        type="date"

                        value={inicio}

                        onChange={(e)=>setInicio(e.target.value)}

                    />

                </div>

                <div className="campo">

                    <label>Data Final</label>

                    <input

                        type="date"

                        value={fim}

                        onChange={(e)=>setFim(e.target.value)}

                    />

                </div>

                <div className="campo">

                    <label>Loja</label>

                    <select

                        value={loja}

                        onChange={(e)=>setLoja(e.target.value)}

                    >

                        {lojas.map((item)=>(

                            <option
                                key={item.id}
                                value={item.id}
                            >

                                {item.nome}

                            </option>

                        ))}

                    </select>

                </div>

                <div className="botoes-header">

                    <button onClick={atualizar}>

                        🔄 Atualizar

                    </button>

                    <button

                        className="btn-fullscreen"

                        onClick={telaCheia}

                    >

                        📺 Tela Cheia

                    </button>

                </div>

            </div>

        </header>

    );

}