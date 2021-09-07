import react from 'react'
import './dev.css';

export default function Dev(){
    return(
        <div className="container">



            <div className="ladoesquerdo">

                <div className="cabecalho-le"> <img src="/assets/images/Vector (1).png" alt=""/> <div className="palavra-cabeca"><b>Dev</b>School </div> </div>
               
                <div className="espaco-preto"></div>
               
                <div className="ultparte-cab">
                    <div className="ger"> Gerenciamento </div>
                    <div className="alunos"> Alunos </div>    
                 </div> 

            </div>


            <div className="ladodireito">
                <div className="cabecalho-ld">

                    <div className="lado-usu">
                        <div className="foto"><img src="/assets/images/Ellipse.png" alt=""/> <div className="bolinha"></div> <div className="name-usu"> Olá, Bruno Oliveira </div> </div>
                    </div>

                    <div className="lado-botao">
                        <div className="bot1"><img src="/assets/images/Vector (2).png" alt=""/></div>
                        <div className="bot2"><img src="/assets/images/Vector (3).png" alt=""/></div>
                    </div>

                    <div className="form">
                        <div className="titulo-form">Novo Aluno</div>

                        <div className="inputs">
                         <div className="container-f1">

                            <div className="bloco">
                               <label for="nome"> Nome: </label>
                               <input className="nome-b1" name="nome" type="text"/>
                            </div>

                            <div className="bloco">
                               <label for="chamada"> Chamada: </label>
                               <input className="nome-b1" name="chamada" type="text"/>
                            </div>
                          </div>

                      <div className="container-f2">

                        <div className="bloco">
                               <label for="curso"> Curso: </label>
                               <input className="nome-b1" name="curso" type="text"/>
                            </div>

                            <div className="bloco">
                               <label for="turma"> Turma: </label>
                               <input className="nome-b1" name="turma" type="text"/>
                            </div>

                        </div>

                        <button className="cadastrar">Cadastrar</button>

                            </div> 

                    </div>
                </div>
            </div>








        </div>
    )
}