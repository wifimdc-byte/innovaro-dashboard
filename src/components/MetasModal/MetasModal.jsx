import { useEffect, useState } from "react";
import api from "../../services/api";
import "./MetasModal.css";

export default function MetasModal({ aberto, fechar }) {

    const [lojas, setLojas] = useState([]);
    const [metas, setMetas] = useState([]);

    async function carregar() {

        try {

            const token = localStorage.getItem("token");

            const hoje = new Date();

            const ano = hoje.getFullYear();
            const mes = hoje.getMonth() + 1;

            const [resLojas, resMetas] = await Promise.all([

                api.get("/lojas", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }),

                api.get(`/metas?ano=${ano}&mes=${mes}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            ]);

            const metasExistentes = resMetas.data;

            const lista = resLojas.data.map((loja) => {

                const meta = metasExistentes.find(
                    m => m.loja === loja.id
                );

                return {

                    loja: loja.id,
                    nome: loja.nome,

                    ano,
                    mes,

                    meta_mensal: meta?.meta_mensal || 0,
                    abre_sabado: meta?.abre_sabado ?? 1,
                    abre_domingo: meta?.abre_domingo ?? 1,
                    feriados: meta?.feriados ?? 0

                };

            });

            setLojas(lista);
            setMetas(lista);

        } catch (erro) {

            console.error(erro);

            alert("Erro ao carregar metas.");

        }

    }

    useEffect(() => {

        if (aberto) {

            carregar();

        }

    }, [aberto]);

    if (!aberto) return null;

    return (

        <div className="usuarios-overlay">

            <div className="usuarios-modal">

                <div className="usuarios-topo">

                    <h2>🎯 Metas Mensais</h2>

                    <button onClick={fechar}>

                        ✖

                    </button>

                </div>

                <h3>

                    Em construção...

                </h3>

            </div>

        </div>

    );

}