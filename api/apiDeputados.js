import axios from "axios";

const apiDeputados = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2'//no lugar desse link vai colocar o link da api da prova
})

export default apiDeputados