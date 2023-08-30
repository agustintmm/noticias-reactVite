import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import useNoticias from '../hooks/useNoticiasProvider'

const CATEGORIAS = [
    {value:'general', label:'General'},
    {value:'business', label:'Negocios'},
    {value:'entertainment', label:'Entretenimiento'},
    {value:'health', label:'Salud'},
    {value:'science', label:'Ciencia'},
    {value:'sports', label:'Deportes'},
    {value:'technology', label:'Tecnología'},
]


const Formulario = () => {
    
    const { categoria, handleChangeCategoria} = useNoticias()

    return (
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                label="Categoria"
                color='secondary'
                onChange={handleChangeCategoria}
                value={categoria}
            >   
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                        key={categoria.value}
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Formulario