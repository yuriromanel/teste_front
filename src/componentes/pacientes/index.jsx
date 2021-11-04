import React, {memo, useState, useEffect} from 'react';
import { Select } from 'semantic-ui-react';


import axios from '../../../src/servicos/Axios';

const SelectPacientesId = ({value,setState}) => {


    const [dadosmedicos, setDadoPacientes] = useState([]);

    const getPacientes = async () => {
        try {
            const response = await axios.get(`select-paciente`);
            const json = await response.data;
            //alert(json)
            setDadoPacientes(json.paciente);
        } catch (err) {
            console.log(err.response.data.error);
        }
    }

    const pacientesOptions = [];
    if (dadosmedicos.length > 0) {
        dadosmedicos.forEach((value) => {
            pacientesOptions.push({
                key: Number(value.id),
                value: Number(value.id),
                text: value.nome
            });
        }); 
    }

    useEffect(() => {
        getPacientes();
    }, []);

    return (
    <Select
        required
        options={pacientesOptions}
        value={value}
        onChange={(event, data) => { setState(data.value)}}
        />
    );
}

export default memo(SelectPacientesId);