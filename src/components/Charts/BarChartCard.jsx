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

    return (

        <div className="chart-card">

            <h3>{titulo}</h3>

            <ResponsiveContainer
                width="100%"
                height={380}
            >

                <BarChart
                    data={dados}
                    layout={horizontal ? "vertical" : "horizontal"}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 40,
                        bottom: 10
                    }}
                >

                    <CartesianGrid strokeDasharray="3 3" />

                    {horizontal ? (

                        <>
                            <XAxis
                                type="number"
                            />

                            <YAxis
                                type="category"
                                dataKey={eixo}
                                width={220}
                                interval={0}
                                
                            />
                        </>

                    ) : (

                        <>
                            <XAxis dataKey={eixo} />

                            <YAxis />
                        </>

                    )}

                    <Tooltip
                        formatter={(v) =>
                            Number(v).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })
                        }
                    />

                    <Bar
                        dataKey={valor}
                        radius={[6, 6, 6, 6]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}