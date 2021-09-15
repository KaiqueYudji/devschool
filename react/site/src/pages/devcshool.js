import  { useState, useEffect } from 'react'
import './dev.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import {useRef} from 'react';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../service/api'
const api = new Api();

export default function Dev(){
   const[alunos,setAlunos] = useState([])

   const [nome, setNome] = useState('')
   const [chamada, setChamada] = useState('')
   const [curso, setCurso] = useState('')
   const [turma, setTurma] = useState('')
   const [idalterando, setIdAlterando] = useState(0);

   const loading = useRef(null);

   async function listar() {
   let r = await api.listar();
   setAlunos(r)
   }

   async function inserir(){

    if(nome == '' || chamada == ''  || curso == '' || turma == '' )
    return toast.error("os campos são obrigatórios")

    if(idalterando === 0){
        if(chamada < 0 )
        return toast.error('Número inválido')
   
        
        if(isNaN(chamada)){
          return  toast.error("O Campo Chamado só aceita números");
        }
        else{
        loading.current.continuousStart();
        let r = await api.Inserir(nome,chamada,curso,turma);
        }


        toast.dark('💕 Aluno Inserido!')
        loading.current.complete();
     } else {
        if(nome == '' || chamada == ''  || curso == '' || turma == '' )
        return toast.error("os campos são obrigatórios")
        
        if(chamada < 0 )
        return toast.error('Número inválido')

        if(isNaN(chamada))
            return  toast.error("O Campo Chamado só aceita números")

        loading.current.continuousStart();
        let r = await api.alterar(idalterando, nome, chamada, curso, turma)
        toast.dark('💕 Aluno Alterado!')
        loading.current.complete();
       }
       limpar()
       listar()
   }


   function limpar(){
    setNome('');
    setChamada('');
    setTurma('');
    setCurso('');
    setIdAlterando(0);
   }

   async function remove(id){
       confirmAlert({
           title: 'Remover aluno',
           message: `Tem certeza que deseja remover o aluno ${id} ?`,
           buttons: [
               {
                   label:'Sim',
                   onClick: async () =>{
                       let r = await api.remover(id);
                       if(r.erro)
                       toast.error(`${r.erro}`);
                       else{
                           toast.dark('💕 Aluno removido!');
                           listar();
                       }
                   }
               },
               {
                   label:'Não'
               }
           ]
       });
      
   }

   async function editar(item){
     setNome(item.nm_aluno);
     setChamada(item.nr_chamada);
     setTurma(item.nm_turma);
     setCurso(item.nm_curso);
     setIdAlterando(item.id_matricula);
     console.log( item.id_matricula)
   }


   useEffect(() =>{
       listar();
   },[])


    return(
        <div className="container">
             <ToastContainer />
             <LoadingBar color="#DB21BD" ref={loading} />


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
                            <div className="texto"> {idalterando == 0 ?"Novo Aluno" :"Alterando aluno " + idalterando }</div>
                        </div>

                        <div className="inputs">
                         <div className="container-f1">

                            <div className="bloco1">
                               <label for="nome"> Nome: </label>
                               <input className="nome-b1" name="nome" type="text" value={nome} onChange={ e => setNome(e.target.value)}/>
                            </div>

                            <div className="bloco">
                               <label for="chamada"> Chamada: </label>
                               <input className="nome-b1" name="chamada" type="text" value={chamada} onChange={ e => setChamada(e.target.value)}/>
                            </div>
                          </div>

                      <div className="container-f2">

                        <div className="bloco">
                               <label for="curso"> Curso: </label>
                               <input className="nome-b1" name="curso" type="text"  value={curso} onChange={ e => setCurso(e.target.value)}/>
                            </div>

                            <div className="bloco">
                               <label for="turma"> Turma: </label>
                               <input className="nome-b1" name="turma" type="text"  value={turma} onChange={ e => setTurma(e.target.value)}/>
                            </div>

                        </div>

                        <button onClick={inserir} className="cadastrar"> { idalterando == 0 ?"cadastrar" :"Alterar"}</button>

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

                        {alunos.map((item, i )=>

                        
                        <tr className={i %2 == 0 ?"linha-alternada" :""} >
                            <td> {item.id_matricula}</td>
                            <td title={item.nm_aluno}>
                             {item.nm_aluno!= null && item.nm_aluno.length >= 25
                             ?item.nm_aluno.substr(0,25) + '...' 
                             :item.nm_aluno}
                             </td>
                            <td> {item.nr_chamada}</td>
                            <td> {item.nm_turma} </td>
                            <td > {item.nm_curso}</td>
                            <td class="aa"> <button  onClick={() => editar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                            <td class = "aa">   <button onClick={() => remove(item.id_matricula)}> <img src="/assets/images/del.svg" alt="" /> </button> </td>
                        </tr>

                     )}

                    
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