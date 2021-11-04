import axios from '../../../servicos/Axios';
import React ,{useState} from 'react';
import { Form,Button,Icon,Label} from 'semantic-ui-react';
import SelectPaciente_id from '../../../componentes/pacientes/index';
import SelectMedico_id from '../../../componentes/medicos/index';




function Consultas(){
    const [paciente_id, setPaciente_id] = useState('');
    const [medico_id, setMedico_id] = useState('');
    const [dt_consulta , setDt_consulta ] = useState('');
    const [dt_agendamento , setDt_agendamento ] = useState('');
    //Passar Dt agendamento como fixo
    const handleCreateConsultas = async (event) => {
        event.preventDefault();
       
        try {           
            

            let formData = new FormData();
            formData.append("paciente_id", paciente_id);
            formData.append("medico_id", medico_id);
            formData.append("dt_consulta", dt_consulta);
            formData.append("dt_agendamento", dt_agendamento);
            
            const response = await axios.post(`/paciente`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            const json = await response.data;

            window.alert("Consulta Cadastrado com sucesso");

            setDt_consulta('');
            setDt_agendamento('');
            setPaciente_id('');
            setMedico_id('');          
                        
              
        } catch (err) {
          //setError(err.response.data.error);
        }
  
      }

    return(
        <div>
        <Form onSubmit={handleCreateConsultas}>
        <div>
        <Form.Group>
        <label>Cadastro de Médicos</label>
        </Form.Group>
        <Form.Group>
            <SelectPaciente_id setState={setPaciente_id}/>
        </Form.Group>
        <Form.Group>
            <SelectMedico_id setState={setMedico_id}/>
        </Form.Group>
        <Form.Group>
            <Form.Input 
                required
                label='dt_consulta' 
                value={dt_consulta}
                placeholder='dt_consulta'
                onChange={({target}) => setDt_consulta(target.value)}
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
export default Consultas;