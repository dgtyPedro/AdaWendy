import React from 'react'
import '../css/sixth.css'

import Icon from '../img/4.png'
export default () =>
        <>
        
        <div className="row">
                <div className="col d-flex justify-content-center">
                        <div className="center mx-5">
                               
                                <h1>Nossos Valores.</h1><br/><br/>
                                <p style={{fontSize:"18px"}}>A Wendy tem como foco trazer o máximo de segurança<br/>
                                        e respeito para os trabalhadores, queremos levar nossa <br/>
                                        perspectiva de segurança do trabalho combinando <br/>
                                        design e tecnologia.<br/>
                                </p>
                                <p style={{fontSize:"18px"}}>
                                        Nós queremos apresentar na primeira versão nossos <br/>
                                        ideias, nossos desejos e sentimentos para os usuários <br/>
                                        do nosso aplicativo, somos fissurados em inovação, <br/>
                                        simplicidade e criação de valor a longo prazo. Nossa <br/>
                                        cultura é fazer o mundo se sentir mais seguro com a <br/>
                                        AdaWendy.
                                </p>
                                <p style={{fontSize:"18px"}}>
                                        Pensamos, conversamos e criamos tudo <br/>
                                        de forma diferente vamos quebrar o padrão e deixar <br/>
                                        tudo mais simples e bonito.<br/>
                                </p>
                        </div>
                </div>
                
                <div className="col mt-5 imgEquipe">
                <img src={Icon} width="70%" style={{marginBottom:"-550px"}} className="img-fluid "/>
        </div>
        </div>

        
        </>