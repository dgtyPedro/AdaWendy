import React from 'react'
import '../css/third.css'
import '../js/third.js'
import jQuery from 'jquery'
import $ from 'jquery'


export default () =>
<>
<div className="text-center" style={{marginTop:"100px"}}>
<h1>Várias funções em<br/> um único lugar</h1>
</div>
<div className="wrapper3">
<div id="carouselExampleIndicators" className="carousel slide m-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="card cardcustom m-auto">
        <div className="card-body">
        <h5 className="card-title mb-5">Opa, você está perdido? Relaxa, vamos te ajudar.</h5>
        <h6 className="card-subtitle mb-4 text-muted "><div className='color1'></div></h6>
        <p className="card-text">Está função serve para registrar e mostrar as responsabilidades sobre o uso de EPI, vamos
        te conectar com um sistema muito simples.</p>
        <div className="botao w-100" >
        <button type="button" className="btn btn-custom m-auto">Cadastrar Colaborador</button>
        </div>
        </div>
</div>  


    </div>
    <div className="carousel-item">
    <div className="card cardcustom m-auto">
        <div className="card-body">
        <h5 className="card-title mb-5">Hora de se proteger!</h5>
        <h6 className="card-subtitle mb-4 text-muted"><div className='color2'></div></h6>
        <p className="card-text">Está função serve para registrar e adicionar EPI e uniformes. Usar com responsabilidade essa função
        e preencher de forma correta, vamos te proteger a qualquer custo.</p>
        <div className="botao w-100" >
        <button type="button" className="btn btn-custom m-auto">Adicionar EPI</button>
        </div>
        </div>
        </div>


    </div>
    <div className="carousel-item">
    <div className="card cardcustom m-auto">
        <div className="card-body">
        <h5 className="card-title mb-5">Ue, cadê as fichas?</h5>
        <h6 className="card-subtitle mb-4 text-muted"><div className='color3'></div></h6>
        <p className="card-text">Está função serve para registrar e encontrar as fichas de EPI com filtros de datas e horas. <br/>
        Não fique mais perdido em uma montanha de papel.</p>
        <div className="botao w-100" >
        <button type="button" className="btn btn-custom m-auto">Consultar fichas</button>
        </div>
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
  
<div className='wrapper4' style={{display:"none"}}>


</div>


</>