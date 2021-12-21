import React from 'react'
import '../css/second.css'
import Cellphone from '../img/2.png'


export default () =>
        <div className="row ">

        <div className="col imgCellphone third d-flex justify-content-center">
                <div className="center imgCellphone">
                        <img src={Cellphone} alt="" className="Cellphone imgCellphone"/>
                </div>
        </div>

        <div className="col Praticidade">
                <div className="center Praticidade">
                        <h1 style={{fontSize:"50px"}}>Praticidade</h1>
                        <h1 style={{color: "#069B9C"}}>Tudo o que você precisa <br/>na palma da sua mão.</h1>
                        <p style={{fontSize:"20px"}}>Nosso aplicativo tem por objetivo proporcionar novas <br/> experiências de controle dos equipamentos de proteção.</p>

                        <ul style={{fontSize:"18px"}}>
                                <li><i className="fas fa-lock me-3"></i> Acesso Seguro</li>
                                <li><i className="fas fa-check-circle me-3"></i> Gestão de dados eficaz</li>
                                <li><i className="fas fa-bell me-3"></i> Acompanhamentos de pedidos em tempo real</li>
                        </ul>

                        <p style={{fontSize:"20px"}}>O aplicativo será designado para <i className="fab fa-apple"></i> e <i className="fab fa-android"></i></p>
                </div>
        </div>
        </div>