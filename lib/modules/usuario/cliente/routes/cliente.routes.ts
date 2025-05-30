import { ClienteController } from "../controllers/cliente.controller";

export class ClienteRoutes {
    private clienteController: ClienteController = new ClienteController();

    public routes(app): void {
        app.route('/cliente')
        .get(this.clienteController.obtenerClientes)
        .post(this.clienteController.crearCliente);

        app.route('/cliente/:id')
        .put(this.clienteController.actualizarCliente)
        .delete(this.clienteController.eliminarCliente);
    }
}