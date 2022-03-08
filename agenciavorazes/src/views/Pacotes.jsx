import React from "react";
import { Link } from "react-router-dom";

export default function Promocoes() {
    return (
        <>
            <section className="corpo-destino">
                <section id="hero">
                    <h1>Pacotes</h1>
                </section>
                <br />
                <br />
                <h4 className="text-center"><a href="/Pacotes">Criar Pacotes</a></h4>
                <br />
                <div className="table-responsive container-fluid">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Preço</th>
                                <th>Data Ida</th>
                                <th>Data Volta</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Rio de Janeiro</td>
                                    <td>São Paulo</td>
                                    <td>R$ 1.200</td>
                                    <td>20/09/2022</td>
                                    <td>30/09/2022</td>
                                    <td>
                                        <Link to="/Pacotes">Edit</Link> |
                                        <Link to="/Pacotes">Details</Link> |
                                        <Link to="/Pacotes">Delete</Link>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
            </section>
        </>
    );
}