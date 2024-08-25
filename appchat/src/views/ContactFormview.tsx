
import { FormWrapper } from '../components/FormWrapper';
import { MuiTextField } from '../components/MuiTextField';
import { ContactviewProps } from '../types/Index'

export const ContactFormview = ({form,handleInputChange,handleKeyDown}:ContactviewProps) => {
  
  return (
    <FormWrapper title='Datos de contacto'>
            <MuiTextField
              name='email'
              type='email'
              label='Correo electronico'
              variant='outlined'
              value={form.email}
              sx={{width:'100%',marginBottom:'1rem'}}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />

            <MuiTextField
              name='phone'
              type='tel'
              label='Teléfono celular'
              variant='outlined'
              value={form.phone}
              sx={{width:'100%',marginBottom:'1rem'}}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
        </FormWrapper>
  )
}
