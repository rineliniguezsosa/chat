import { FormInformationCard } from "../components/FormInformationCard"
import { FormWrapper } from "../components/FormWrapper"
import { MuiTextField } from "../components/MuiTextField"
import { ContactviewProps } from "../types/Index"


export const AdicionalFormview = ({form,handleInputChange,handleKeyDown}:ContactviewProps) => {
  const fullname = form.name && form.middlename && form.paternalsurname && form.maternalsurname; 
  const dateofbirth = form.day && form.month && form.year

  return ( 
    <>
        <FormWrapper title='¿Cual es tu nombre?'>
          <MuiTextField
              name='name'
              type='text'
              label='Nombre'
              variant='outlined'
              value={form.name}
              sx={{ width: '100%', marginBottom: '1rem' }}
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown}
            />
            
          <MuiTextField
              name='middlename'
              type='text'
              label='Segundo nombre'
              variant='outlined'
              value={form.middlename}
              sx={{ width: '100%', marginBottom: '1rem' }}
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown}
            />

          <MuiTextField
              name='paternalsurname'
              type='text'
              label='Apellido paterno'
              variant='outlined'
              value={form.paternalsurname}
              sx={{ width: '100%', marginBottom: '1rem' }}
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown}
            />

          <MuiTextField
              name='maternalsurname'
              type='text'
              label='Apellido materno'
              variant='outlined'
              value={form.maternalsurname}
              sx={{ width: '100%', marginBottom: '1rem' }}
              onChange={handleInputChange} 
              onKeyDown={handleKeyDown}
              />
        </FormWrapper>

        { fullname && (
            <FormInformationCard>
                <p>{form.name+" "+form.paternalsurname}</p>
            </FormInformationCard>
        )
        }

        <FormWrapper title='¿Cúal es tu fecha de nacimiento?'>
              <MuiTextField
                  name='day'
                  type='text'
                  label='Día'
                  variant='outlined'
                  value={form.day}
                  sx={{ width: '100%', marginBottom: '1rem' }}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  InputProps={{
                    inputProps:{
                      pattern: "\\d{2}",
                      maxLength: 2
                    }
                  }}
                />

              <MuiTextField
                  name='month'
                  type='text'
                  label='Mes'
                  variant='outlined'
                  value={form.month}
                  sx={{ width: '100%', marginBottom: '1rem' }}
                  onChange={handleInputChange} 
                  onKeyDown={handleKeyDown}
                  InputProps={{
                    inputProps:{
                      pattern: "\\d{2}",  
                      maxLength: 2
                    }
                  }}
                />

              <MuiTextField
                  name='year'
                  type='text'
                  label='Año'
                  variant='outlined'
                  value={form.year}
                  sx={{ width: '100%', marginBottom: '1rem' }}
                  onChange={handleInputChange} 
                  onKeyDown={handleKeyDown}
                  InputProps={{
                    inputProps:{
                      pattern: "\\d{4}",  
                      maxLength: 4
                    }
                  }}
              />
        </FormWrapper>

        { dateofbirth && (
            <FormInformationCard>
                <p>{form.day}/{form.month}/{form.year}</p>
            </FormInformationCard>
        )
        }
    </>
  )
}
