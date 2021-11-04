import React, {memo, useState, useEffect} from 'react';
import { Select } from 'semantic-ui-react';


import axios from '../../../src/servicos/Axios';

const SelectMedicosId = ({value,setState}) => {


    const [dadosmedicos, setDadomedicos] = useState([]);

    const getMedicos = async () => {
        try {
            const response = await axios.get(`select-medico`);
            const json = await response.data;
            console.log(json);
            setDadomedicos(json.medicos);
        } catch (err) {
            console.log(err.response.data.error);
        }
    }
    useEffect(() => {
        getMedicos();
    }, []);

    //alert("medicos"+ dadosmedicos);
    const medicosOptions = [];
    if (dadosmedicos.length > 0) {
        dadosmedicos.forEach((value) => {
            console.log(value);
            medicosOptions.push({
                key: Number(value.id),
                value: Number(value.id),
                text: value.nome
            });
        }); 
    }else{
        console.log('aqui');
    }
    
    


    return (
    <Select
        required
        options={medicosOptions}
        value={value}
        onChange={(event, data) => { setState(data.value)}}
        />
    );
}

export default memo(SelectMedicosId);