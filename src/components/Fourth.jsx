import React from 'react'
import '../css/fourth.css'
import Stonks from '../img/3.png'



export default () =>
<>
<div className="text-center">
<h1>Projeto</h1>
</div>

<div className="row ">
                <div className="col first2 d-flex justify-content-center">
                        <div className="textofirst2" >
                                <h1>Projeto é destinado para ajudar você</h1>
                                {/* IMAGEM */}
                                <img src={Stonks}/>
                                <div className="subfirst2 mx-5  ">
                                <p style={{fontSize:"20px"}}>Projeto AdaWendy tem como propósito ajudar todas as empresas, estamos desenvolvendo um 
                                        aplicativo que tem como foco automatizar vários procedimentos assim ajudando a área 
                                        do SESMT
                                </p>
                                <p style={{fontSize:"20px"}}>Nós seguimos uma fórmula de inovação que é utilizar a tecnologia e o design para criarmos um 
                                        aplicativo mais simples e bonito.
                                </p>
                                </div>
                        </div>
                </div>
                
                <div className="col second2">
                        <div className="textosecond2">
                                <h1 className="my-5" C>Iniciaremos o aplicativo para os dispositivos android.</h1>
                                <p style={{fontSize:"20px"}}>Queremos envolver uma série de funcionalidades em nosso aplicativo. Na primeira versão vamos
                                        disponibilizar a ficha de EPI digital e leitura das normas regulamentadoras. Lembrando 
                                        a ficha digital é válida, devido ao nosso sistema eletrônico.
                                </p> 
                                <p style={{fontSize:"20px"}}>Nós estamos estudando várias tecnologias para o Back-End, queremos proporcionar um desempenho 
                                        absoluto para nossos usuários. O front-End será também com tecnologia de ponta para proporcionar 
                                        uma experiência única para todos os públicos. 
                                </p>
                                <p style={{fontSize:"20px"}}>Vamos adicionar ferramentas que indique como utilizar todo o aplicativo, esse tipo de funcionalidade 
                                        possibilita pessoas que tenham alguma limitação tenham autonomia para utilizar nosso serviço. 
                                </p>
                                <p style={{fontSize:"20px"}}>O aplicativo está passando pela fase de design e desenvolvimento, não temos uma data prevista para o 
                                        lançamento, manteremos as atualizações do projeto no Instagram e Linkedin.  
                                </p>
                                <i className="fab fa-linkedin me-5" style={{fontSize:"60px"}}></i> <i className="fab fa-instagram" style={{fontSize:"60px"}}></i>
                        </div>
                </div>
        </div>


</>