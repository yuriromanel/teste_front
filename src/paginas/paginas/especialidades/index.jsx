import axios from '../../../servicos/Axios';
import React ,{useState} from 'react';
import { Form,Button,Icon,Label} from 'semantic-ui-react';



function Especialidade(){
    const [nome, setNome] = useState('');
    const handleCreateEspecialidade = async (event) => {
        event.preventDefault();
        try {           
            

            let formData = new FormData();
            formData.append("nome", nome);             
            
            const response = await axios.post(`/especialidade`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            const json = await response.data;

            window.alert("Especialidade Cadastrada com sucesso");

            setNome('');
            
            

            
              
        } catch (err) {
          //setError(err.response.data.error);
        } 
    } 

    return(
        <div>
        <Form onSubmit={handleCreateEspecialidade}>
        <div>
        <Form.Group>
        <label>Cadastrar Especialidade</label>
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
export default Especialidade;