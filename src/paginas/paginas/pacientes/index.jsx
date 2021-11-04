import axios from '../../../servicos/Axios';
import React ,{useState} from 'react';
import { Form,Button,Icon,Label} from 'semantic-ui-react';


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


    function apiCep() {
    
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
          //setError(err.response.data.error);
        }
  
      }







    return(
        <div>
        <Form onSubmit={handleCreatePacientes}>
        <div>
        <Form.Group>
        <label>Cadastro Pacientes</label>
        </Form.Group>
        <Form.Group>            
            </Form.Group>
            <Form.Group>
            <Form.Input 
                required
                label='Nome' 
                value={nome}
                placeholder='Nome'
                onChange={({target}) => setNome(target.value)}
            />
            <Form.Input 
                required
                label='cpf' 
                value={cpf}
                type="number"
                placeholder='cpf'
                onChange={({target}) => setCpf(target.value)}
            />
            <Form.Input
                required
                label='idade' 
                placeholder='idade'
                type='idade'
                value={idade}
                onChange={({target}) => setIdade(target.value)}
            />
            {(idade < 18) ? (
                <Form.Input
                required
                label='nomeResponsavel' 
                placeholder='nomeResponsavel'
                type='nomeResponsavel'
                value={nomeResponsavel}
                onChange={({target}) => setNomeResponsavel(target.value)}
            />) : <></>}
            </Form.Group>
            <Form.Group>
            <Form.Input 
                required
                label='Telefone' 
                placeholder='Telefone'
                type='number'
                value={telefone}
                onChange={({target}) => setTelefone(target.value)}
            />
            <Form.Input 
                required
                label='Email' 
                placeholder='Email'
                type='text'
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input 
                required
                label='Cep' 
                placeholder='Cep'
                type='number'
                value={cep}
                onChange={({target}) => setCep(target.value)}
            />
            {(cep.length == 8) ? (<Button onClick={apiCep}><Icon className="search"></Icon></Button>) : <></>}
            </Form.Group> 
            
            <Form.Group>
            <Form.Input 
                required
                label='Endereço' 
                placeholder='Endereço'
                type='text'
                value={endereco}
                onChange={({target}) => setEndereco(target.value)}
            />
            <Form.Input 
                required
                label='Numero' 
                placeholder='Numero'
                type='number'
                value={numero}
                onChange={({target}) => setNumero(target.value)}
            />
            </Form.Group>
            <Button positive type="submit">
            Cadastrar
            </Button>
            <Button negative href="/">
            Cancelar
            </Button>
            </div>
        </Form>
    </div>
    );
};
export default Pacientes;