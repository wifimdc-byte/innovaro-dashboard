import "./RankingCard.css";

export default function RankingCard({

    titulo,
    dados,
    nome,
    valor,
    extra

}) {

    return (

        <div className="ranking-card">

            <h3>{titulo}</h3>

            <div className="ranking-list">

                {dados.map((item, index) => (

                    <div
                        className="ranking-item"
                        key={index}
                    >

                        <div className="ranking-posicao">

                            {index + 1}º

                        </div>

                        <div className="ranking-info">

                            <div className="ranking-nome">

                                {item[nome]}

                            </div>

                            {extra && (

                                <div className="ranking-extra">

                                    {Number(item[extra]).toLocaleString("pt-BR")} un.

                                </div>

                            )}

                        </div>

                        <div className="ranking-valor">

                            {valor === "quantidade"

                                ? `${Number(item[valor]).toLocaleString("pt-BR")} un.`

                                : Number(item[valor]).toLocaleString("pt-BR", {

                                    style: "currency",

                                    currency: "BRL"

                                })

                            }

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}