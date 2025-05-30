import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";
import { ClienteRoutes } from "./modules/usuario/cliente/routes/cliente.routes";
export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.clienteRoutes.routes(app);
    }        
}


   
