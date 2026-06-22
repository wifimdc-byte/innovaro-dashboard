import api from "./api";

export async function obterResumo() {

    const { data } = await api.get("/resumo");

    return data;

}