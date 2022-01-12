import React from 'react'
import '../css/third.css'
import '../js/third.js'
import dollar from '../img/dollar-sign.png'
import cellphone from '../img/cellphone.svg'



export default () =>
<>

<div className="wrapper3">

<div id="carouselExampleIndicators" className="carousel slide m-5" data-bs-ride="carousel">
<div className="text-center" style={{marginTop:"-60px", marginBottom:"30px", color:"white"}}>
<h1>Várias funções em<br/> um único lugar</h1>
</div>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">


    <div className="carousel-item">
    <div className="card cardcustom2">
        <div className="card-body">
        <h5 className="card-title mb-5 text-center">Normas <br/> Regulamentadoras</h5>
        <p className='text-center numeracoes'><i class="fas fa-search"></i> 01. Palavras Chaves</p>
        <p className='text-center numeracoes'><i class="fas fa-filter"></i> 02. Filtro das normas</p>

        <div className='flexgrow1'>
        <div className='text-center'>
        <p className='filtrepal'>Filtre palavras ou as normas facilite seu dia a dia com nosso aplicativo.</p>
        </div>
        
        <div className='text-end'>
          <img src={cellphone} alt="" className="cellphone img-fluid"/>
        </div>

        </div>
        </div>
        </div>


    </div>

    <div className="carousel-item active">
        <div className="card cardcustom1">
        <div className="card-body px-5" >
        <h5 className="card-title mb-5 text-center">Sua opinião<br/> é importante</h5>
        <div className='row'>
          <div className='col gradbar1'></div>
          <div className='col gradbar2'></div>
          <div className='col gradbar3'></div>
          <div className='col gradbar4'></div>

          <div className='col-6 testeborda '>
            <td class="align-middle">
            Seu feedback é importante para que nós possamos melhorar o aplicativo
            tanto no quesito design quanto funcionalidade
            </td>
            
          </div>
        </div>
        </div>
    </div>  
 


    </div>

    <div className="carousel-item">
    <div className="card cardcustom3 text-center">
        <div className="card-body">
        <h5 className="card-title mb-5 text-center">Doações</h5>
        <p className="card-text text-center">Por fim deixaremos um botão de doação, toda doação será destinada a ajudar a acelerar o processo de desenvolvimento 
        do aplicativo.</p>
        <img src={dollar} alt="" className="dollar img-fluid"/>
        </div> 
        </div> 


    </div>

    
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  
</div>


</div>

<div className='text-center'>

<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Qual o objetivo do aplicativo?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Objetivo do nosso aplicativo é a gestão administrativa
na área de segurança do trabalho.

      </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Como iremos entrar no dia a dia das empresas?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Iremos usar as redes sociais como uma ponte para 
apresentar nosso serviços.

      </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Quais as próximas funcionalidades?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Para as próximas atualizações nós vamos adicionar 
ficha de equipamento de proteção individual eletronica,
reporte de incidente e acidente entre outras funções.

      </div>
    </div>
</div>

<div className='diferencialgradient'>
<h5 style={{fontSize: "40px"}}>Somos o diferencial.</h5>
<p>Usaremos o design e a tecnologia para nos diferenciarmos dos demais ramos
da segurança do trabalho. Vamos manter a qualidade do nosso site, aplicativo
e atendimento impecáveis para que nós possamos crescer nesta área. O mais
importa para nós da AdaWendy é sempre nos manter focados em ajudar todas as pessoas.</p>

</div>


</div>

</>