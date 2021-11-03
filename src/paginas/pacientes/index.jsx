import axios from '../../servicos/Axios';
import React ,{useState} from 'react';


function Pacientes(){
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone , setTelefone ] = useState('');
    const [email , setEmail ] = useState('');
    const [cep , setCep ] = useState('');
    const [endereco , setEndereco ] = useState('');
    const [numero , setNumero ] = useState('');
    const [nomeResponsavel , setNomeResponsavel ] = useState();
    const [idade , setIdade ] = useState('');


    function ApiCep() {
    
        var url = `https://viacep.com.br/ws/${cep}/json`  
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();

        var obj = JSON.parse(xhttp.response);
        setEndereco(obj.logradouro);
    } 
    const handleCreatePacientes = async (event) => {
        event.preventDefault();
       
        try {           
            

            let formData = new FormData();
            formData.append("nome", nome);
            formData.append("cpf", cpf);
            formData.append("telefone", telefone);
            formData.append("email", email);
            formData.append("cep", cep);
            formData.append("endereco", endereco);
            formData.append("numero", numero);
            formData.append("nomeResponsavel", nomeResponsavel);
            formData.append("idade", idade);
            
            
            const response = await axios.post(`/paciente`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            const json = await response.data;

            window.alert("Paciente Cadastrado com sucesso");

            setNome('');
            setCpf('');
            setTelefone('');
            setEmail('');
            setCep('');
            setEndereco('');
            setNumero('');
            setNomeResponsavel('');
            setIdade('');
            
            

            
              
        } catch (err) {
          setError(err.response.data.error);
        }
  
      }







return(
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
);
};
export default Pacientes;