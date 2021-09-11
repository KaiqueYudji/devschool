import react from 'react'
import './dev.css';

export default function Dev(){
    return(
        <div className="container">



            <div className="ladoesquerdo">

                <div className="cabecalho-le"> <img src="/assets/images/Vector (1).png" alt=""/> <div className="palavra-cabeca"><b>Dev</b>School </div> </div>
               
                <div className="espaco-preto"></div>
               
                <div className="ultparte-cab">
                    <div className="ger"> Gerenciamento <div className="seta"> <img src="/assets/images/Vector (4).png" alt=""/></div> </div>
                    <div className="alunos"> <div className="barrinha"></div>Alunos </div>    
                 </div> 

            </div>


            <div className="ladodireito">
                <div className="cabecalho-ld">
                  <div className="cima">
                    <div className="lado-usu">
                        <div className="foto"><img src="/assets/images/Ellipse.png" alt=""/> <div className="bolinha">3</div> <div className="name-usu"> Olá, Bruno Oliveira </div> </div>
                    </div>

                    <div className="lado-botao">
                        <div className="bot1"><button><img src="/assets/images/Vector (2).png" alt=""/></button></div>
                        <div className="bot2"><button><img src="/assets/images/sair.svg" alt=""/></button></div>
                    </div>
                  </div>
                  <hr/>
                 </div>

                   <div className="conteudo-ld">
                    <div className="form">
                        <div className="titulo-form">
                            <div className="barrona"></div>
                            <div className="texto">Novo Aluno</div>
                        </div>

                        <div className="inputs">
                         <div className="container-f1">

                            <div className="bloco1">
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

                 <div className="tabela">
                  <div className="titulo-tb">
                            <div className="barrona"></div>
                            <div className="texto">Alunos Matriculados </div>
                        </div>
                        <table class ="table-user">
                    <thead>
                        <tr>
                            <th > ID </th>
                            <th> Nome </th>
                            <th> Chamada </th>
                            <th> Turma </th>
                            <th> Curso </th>
                            <th class="a"> </th>
                            <th class="a"> </th>
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr >
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 15 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td class="aa"> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                            <td class = "aa">   <button> <img src="/assets/images/del.svg" alt="" /> </button> </td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 16 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>

                        
                    

                    
                        <tr>
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 17 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>

                        
                    

                    
                        <tr class="int">
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 18 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>


                        <tr>
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 17 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>


                        <tr class="int">
                            <td> 1 </td>
                            <td> Fulao da Silva Sauro</td>
                            <td> 18 </td>
                            <td> InfoX </td>
                            <td > Informática </td>
                            <td>   </td>
                            <td>   </td>
                        </tr>


                        
                    </tbody> 

                </table>
          

                </div>
              </div>

            </div>







        </div>
    )
}