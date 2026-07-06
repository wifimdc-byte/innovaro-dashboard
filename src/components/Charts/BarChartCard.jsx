import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import "./Chart.css";

export default function BarChartCard({
    titulo,
    dados,
    eixo,
    valor,
    horizontal = false
}) {

    const mobile = window.innerWidth <= 768;

    return (

        <div className="chart-card">

            <h3>{titulo}</h3>

            <ResponsiveContainer
                width="100%"
                height={mobile ? 520 : 380}
            >

                <BarChart
                    data={dados}
                    layout={horizontal ? "vertical" : "horizontal"}
                    margin={{
                        top: 10,
                        right: mobile ? 10 : 20,
                        left: mobile ? 5 : 40,
                        bottom: 10
                    }}
                    barCategoryGap={mobile ? "18%" : "30%"}
                >

                    <CartesianGrid strokeDasharray="3 3" />

                    {horizontal ? (

                        <>
                            <XAxis
                                type="number"
                                tick={{ fontSize: mobile ? 10 : 12 }}
                            />

                            <YAxis
                                type="category"
                                dataKey={eixo}
                                width={mobile ? 120 : 220}
                                interval={0}
                                tick={{
                                    fontSize: mobile ? 10 : 12
                                }}
                            />

                        </>

                    ) : (

                        <>

                            <XAxis
                                dataKey={eixo}
                                tick={{
                                    fontSize: mobile ? 10 : 12
                                }}
                            />

                            <YAxis
                                tick={{
                                    fontSize: mobile ? 10 : 12
                                }}
                            />

                        </>

                    )}

                    <Tooltip
                        formatter={(value, name, props) => {

                            const linhas = [

                                Number(value).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })

                            ];

                            if (props.payload.percentual !== undefined) {

                                linhas.push(
                                    `Participação: ${Number(props.payload.percentual).toFixed(2)}%`
                                );

                            }

                            return [linhas, "Faturamento"];

                        }}
                    />

                    <Bar
                        dataKey={valor}
                        radius={[6, 6, 6, 6]}
                        barSize={mobile ? 16 : 24}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}