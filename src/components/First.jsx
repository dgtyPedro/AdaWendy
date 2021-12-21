import React from 'react'
import '../css/first.css'
import WorkingDude from '../img/1.png'


export default () =>
        <>
        <ul className="nav justify-content-center">
        <li className="nav-item">
        <h5><a className="nav-link active mx-2" href="#firstSection">Início</a></h5>
        </li>
        <li className="nav-item">
        <h5><a className="nav-link mx-2" href="#fifthSection">Projeto</a></h5>
        </li>
        <li className="nav-item">
        <h5><a className="nav-link mx-2" href="#seventhSection">Contato</a></h5>
        </li>
        <li className="nav-item">
        <h5><a className="nav-link mx-2" href="#seventhSection">Equipe</a></h5>
        </li>
        </ul>

        <div className="row rowCustom">
                <div className="col first1 d-flex justify-content-center">
                        
                        <div className="center1">
                        <h1 style={{marginTop: "-200px"}}>AdaWendy</h1>
                                <div>
                                <p style={{color: "white", fontSize: "20px", marginTop:"100px"}}>Nós somos o futuro</p>
                                <h1 style={{fontSize: "50px"}}>Segurança do <br/>Trabalho</h1>
                                <p style={{color: "white", fontSize: "20px"}}>O projeto destinado a revolucionar <br/> a área de segurança do trabalho</p>
                        </div>
                        </div>
                </div>
                
                <div className="col second1">
                        <div className='center1'>
                        <img src={WorkingDude} alt="" className="WorkingDude img-fluid"/></div>
                </div>
        </div>

        
        </>