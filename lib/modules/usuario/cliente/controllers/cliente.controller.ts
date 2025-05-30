import { Request, Response } from 'express';
import * as _ from 'lodash';
import Cliente from '../models/cliente.model';

export class ClienteController {

    crearCliente = (req: Request, res: Response) => {
        const nuevaCliente = new Cliente(
            {
                cliente: req.body.cliente,
                telefono: req.body.telefono
            }
        );

        nuevaCliente.save()
        .then(clienteCreada => {
            res.status(201).json({
                ok: true,
                cliente: clienteCreada,
                message: 'Cliente creada'
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        });
    }

    obtenerClientes = (req: Request, res: Response) => {
        Cliente.find()
        .then(clientes => {
            res.statu(200).json({
                ok: true,
                clientes: clientes
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });

        });
    }

    actualizarCliente = (req: Request, res: Response) => {
        Cliente.findByIdAndUpdate(req.params.id, {
            cliente: req.body.cliente,
            telefono: req.body.telefono
        })
        .then(clienteActualizada => {
            res.status(200).json({
                ok: true,
                cliente: clienteActualizada,
                message: 'Cliente actualizada'                
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'Cliente no actualizada'
            });
        });

    }

    eliminarCliente = (req: Request, res: Response) => {
        Cliente.findByIdAndDelete(req.params.id)
        .then(clienteEliminada => {
            res.status(200).json({
                ok: true,
                message: 'Cliente eliminada'
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error,
                message: 'Cliente no eliminada'
            })
        });
    }
}