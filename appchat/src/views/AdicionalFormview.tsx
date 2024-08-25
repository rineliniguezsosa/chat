import { FormWrapper } from "../components/FormWrapper"
import { MuiTextField } from "../components/MuiTextField"
import { ContactviewProps } from "../types/Index"


export const AdicionalFormview = ({form,handleInputChange}:ContactviewProps) => {
  return (
    <FormWrapper title='¿Cual es tu nombre?'>
          <MuiTextField
            name='name'
            type='text'
            label='Nombre'
            variant='outlined'
            value={form.name}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />

          <MuiTextField
            name='middlename'
            type='text'
            label='Segundo nombre'
            variant='outlined'
            value={form.middlename}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />

          <MuiTextField
            name='paternalsurname'
            type='text'
            label='Apellido paterno'
            variant='outlined'
            value={form.paternalsurname}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />

          <MuiTextField
            name='maternalsurname'
            type='text'
            label='Apellido materno'
            variant='outlined'
            value={form.maternalsurname}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />
      </FormWrapper>
  )
}
