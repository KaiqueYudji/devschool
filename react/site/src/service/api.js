import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3030/'
});


export default class Api{
    async listar(){
     let r = await api.get('/matricula');
     return r.data;
    }

    async Inserir(nome,chamada,curso,turma){
    let r = await api.post('/matricula',{ nm_aluno:nome, nr_chamada:chamada, nm_curso:curso, nm_turma:turma })
    return r.data;    
}

    async alterar(id,nome,chamada,curso,turma){
        let r = await api.put('/matricula/' + id,{ nm_aluno:nome, nr_chamada:chamada, nm_curso:curso, nm_turma:turma })
        return r.data;    
    }

    async remover(id){
    let r = await api.delete('/matricula/' + id);
    return r.data;
    }
}