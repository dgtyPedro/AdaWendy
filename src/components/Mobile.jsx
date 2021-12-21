import React from 'react'
import '../css/mobile.css'
import WorkingDude from '../img/1.png'
import Stonks from '../img/3.png'



export default () =>
        <>
                <ul class="nav justify-content-center fixed-top navmobile">
                <li class="nav-item">
                <a class="nav-link" href="#Inicio">Início</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projeto</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Equipe</a>
                </li>
                </ul>

                <div className='text-center mt-5'>
                        <h1 id="Inicio" style={{fontSize:"50px"}}>AdaWendy</h1>
                </div>
                <div className="m1c text-center p-5">
                        <p style={{fontSize:"40px", color:"white"}}>Nós somos o futuro</p>
                        <h2 style={{fontSize:"50px"}}>Segurança do Trabalho</h2>
                        <p style={{fontSize:"20px", color:"white"}}>O projeto destinado a revolucionar a área de segurança do trabalho</p>
                </div>

                <div className='m1i'>
                        <img src={WorkingDude} alt="" className="img-fluid"/>
                </div>


                

                <div className='m2c text-center'>
                        <div className='d-flex justify-content-center '><h1 className=''>Praticidade</h1></div>
                        <div className='d-flex justify-content-center mx-5'><h1>Tudo o que você precisa na palma da sua mão.</h1></div>
                        <div className='d-flex justify-content-center mx-5'><p>Nosso aplicativo tem por objetivo proporcionar novas experiências de controle dos equipamentos de proteção.</p>
                </div> </div>
                <div className='d-flex justify-content-center mx-3'>
                <ul>
                                <li><i className="fas fa-lock me-1"></i> Acesso Seguro</li>
                                <li><i className="fas fa-check-circle me-1"></i> Gestão de dados eficaz</li>
                                <li><i className="fas fa-bell me-1"></i> Acompanhamentos de pedidos em tempo real</li>
                </ul></div>
                <div className='d-flex justify-content-center'>
                <p>O aplicativo será designado para <i className="fab fa-apple"></i> e <i className="fab fa-android"></i>.</p>
                </div>

                
                <div className='m3c'>
                        <h1 className='text-center'>Várias funções em um único lugar</h1>

                        <div class="card mx-5 my-2">
                        <div class="card-body">
                        <h5 class="card-title">Opa, você está perdido? Relaxa, vamos te ajudar.</h5>
                
                        <p class="card-text">
                        Está função serve para registrar e mostrar as responsabilidades sobre o uso de EPI, vamos te conectar com um sistema muito simples.
                        </p>
                        

                        </div>
                        </div>



                        <div class="card mx-5 my-2">
                        <div class="card-body">
                        <h5 class="card-title">Hora de se proteger!</h5>
                
                        <p class="card-text">
                        Está função serve para registrar e adicionar EPI e uniformes. Usar com responsabilidade essa função e preencher de forma correta, vamos te proteger a qualquer custo.</p>
                        
                        
                        </div>
                        </div>



                        <div class="card mx-5 my-2">
                        <div class="card-body">
                        <h5 class="card-title">Ue, cadê as fichas?      </h5>

                        <p class="card-text">
                        Está função serve para registrar e encontrar as fichas de EPI com filtros de datas e horas.
Não fique mais perdido em uma montanha de papel.                        </p>
                        
                        
                        </div>
                        </div>


                </div>



                <div className='m4c'>
                        <div className='text-center'>
                        <h1>Projeto</h1>
                        <h2>Projeto é destinado para ajudar você</h2>
                        </div>
                        <img src={Stonks} alt="" className="img-fluid"/>

                        <div className='d-flex justify-content-center mx-5'>
                        <p className='lateralborder'>Projeto AdaWendy tem como propósito ajudar todas as empresas, estamos desenvolvendo um aplicativo que tem como foco automatizar vários procedimentos assim ajudando a área do SESMT</p>
                        </div>
                        <div className='d-flex justify-content-center mx-5'>
                        <p className='lateralborder'>Nós seguimos uma fórmula de inovação que é utilizar a tecnologia e o design para criarmos um aplicativo mais simples e bonito.
</p>  </div></div>
               

                <div className='m5c'>
                        <h2 className='text-center mx-5'>Iniciaremos o aplicativo para os dispositivos android.</h2>
                        <p className='d-flex justify-content-center mx-5'>Vamos adicionar ferramentas que indique como utilizar todo o aplicativo, esse tipo de funcionalidade possibilita pessoas que tenham alguma limitação tenham autonomia para utilizar nosso serviço.</p>
                        <p className='d-flex justify-content-center mx-5'>O aplicativo está passando pela fase de design e desenvolvimento, não temos uma data prevista para o lançamento, manteremos as atualizações do projeto no Instagram e Linkedin.</p>
                </div>

                <div className='m6c'>
                        <h2 className='text-center mx-5' >Os 4 mestres <br/>(As funcionalidades mais simples e fáceis de usar).</h2>
                        <hr/><h3 className='text-center mx-5' >01 Cadastrar o colaborador.</h3>
                        <p className='d-flex justify-content-center mx-2'>Esta função tem como objetivo salvar dados do colaborador, como: nome completo, setor e função. E há um termo em que o colaborador deverá aceitar, esse termo destaca as obrigações do empregador e do empregado.</p>
                        <hr/><h3 className='text-center mx-5' >02 Adicionar EPI.</h3>
                        <p className='d-flex justify-content-center mx-2'>Aqui, você seguirá todas as informações obrigatórias para registrar o EPI do seu colaborador por exemplo: Descrição do equipamento, quantidade, certificado de aprovação, data em que o EPI foi solicitado, fabricante e motivos para entrega e recebimento.</p>
                        <hr/><h3 className='text-center mx-5' >03 Consultar fichas.</h3>
                        <p className='d-flex justify-content-center mx-2'>Destaque as fichas de cada colaborador através de uma busca simples pelo nome completo ou CPF.</p>
                        <hr/><h3 className='text-center mx-5' >04 Registrar equipamento.</h3>
                        <p className='d-flex justify-content-center mx-2'>E por fim o tão amado registro de equipamento. Aqui você vai descrever qual o nome do equipamento, certificado de aprovação fabricante e a validade do equipamento.</p>
                </div>

                <div className='m7c'>
                        <h2>Nossos Valores</h2>
                        <p>A Wendy tem como foco trazer o máximo de segurança
e respeito para os trabalhadores, queremos levar nossa
perspectiva de segurança do trabalho combinando
design e tecnologia.</p><hr/>
                        <h2>Equipe AdaWendy:</h2>
                      
                        <h5>Idealizador</h5>
                        <h3>Felipe "Nit" Rodrigues</h3>
                        <p>Opá tudo bem? Um cara que curte fazer coisas diferentes, estudantes da área de segurança do trabalho e viciado em consumir qualquer coisa que envolva tecnologia.</p>
                        <a href='#'>Me siga no <i className="fab fa-linkedin-in"></i></a>
                        <hr/>
                        <h5>Designer</h5>
                        <h3>Isabela "Yui" Messias</h3>
                        <p>Se descreva.</p>
                        <a href='#'>Me siga no <i className="fab fa-linkedin-in"></i></a>
                        
                </div>

                <div className='m8c'>
                        <h2>Doação <i className="fas fa-hands-helping"></i></h2>
                        <p>Gostou da nossa ideia e quer acelerar o processo de desenvolvimento?</p>
                        <p>Nos ajude com qualquer quantia.</p>
                </div>
        </>