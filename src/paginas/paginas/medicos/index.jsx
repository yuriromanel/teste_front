import axios from '../../../servicos/Axios';
import React ,{useState} from 'react';
import { Form,Button,Icon,Label} from 'semantic-ui-react';
import SelectespecialidadeId from '../../../componentes/especialidade/index';


function Medicos(){
    const [nome, setNome] = useState('');
    const [especialidadeId, setEspecialidadeId] = useState('');
    const [crm, setCrm] = useState('');

    const handleCreateMedicos = async (event) => {
        event.preventDefault();
        try {           
            

            let formData = new FormData();
            formData.append("nome", nome);    
            formData.append("especialidadeId", especialidadeId); 
            formData.append("crm", crm);          
            
            const response = await axios.post(`/medico`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            const json = await response.data;

            window.alert("Médico Cadastrado com sucesso");

            setNome('');
            setEspecialidadeId('');
            setCrm('');
            
            

            
              
        } catch (err) {
          //setError(err.response.data.error);
        } 
    } 

    return(
        <div>
        <Form onSubmit={handleCreateMedicos}>
        <div>
        <Form.Group>
        <label>Cadastro de Médicos</label>
        </Form.Group>
        <Form.Group>
            <SelectespecialidadeId setState={setEspecialidadeId}/>
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
        <Form.Group>
            <Form.Input 
                required
                label='crm' 
                value={crm}
                placeholder='crm'
                onChange={({target}) => setCrm(target.value)}
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
export default Medicos;