import React, {memo, useState, useEffect} from 'react';
import { Select } from 'semantic-ui-react';


import axios from '../../../src/servicos/Axios';

const SelectespecialidadeId = ({value, uf, setState}) => {


    const [dadosEspecialidade, setDadoEspecialidade] = useState([]);

    const getEspecialidade = async () => {
        try {
            const response = await axios.get(`select-especialidadea`);
            const json = await response.data;
            setDadoEspecialidade(json.getEspecialidade);
        } catch (err) {
            console.log(err.response.data.error);
        }
    }

    const especialidadeOptions = [];
    if (dadosEspecialidade.lenght > 0) {
        dadosEspecialidade.forEach((value) => {
            dadosEspecialidade.push({
                key: Number(value.id),
                value: Number(value.id),
                text: value.nome
            });
        }); 
    }

    useEffect(() => {
        getEspecialidade();
    }, []);

    return (
    <Select
        required
        options={especialidadeOptions}
        value={value}
        onChange={(event, data) => { setState(data.value)}}
        />
    );
}

export default memo(SelectespecialidadeId);