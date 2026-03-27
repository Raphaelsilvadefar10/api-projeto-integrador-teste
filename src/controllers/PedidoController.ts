import { app } from "../server";
import { PedidosRepository } from "../repositories/PedidoRepository";

export function PedidoRepository() {
    const repository = new PedidoRepository();

    app.get("/pedidos", (requisite, response )=> {
        const { nome } = requisite.query;

        if (nome) {
            const pedido = repository.buscarPornome
        }
    })
}