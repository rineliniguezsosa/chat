import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiLinearProgress } from './components/MuiLinearProgress';
import { FormWrapper } from './components/FormWrapper';
import { MuiTextField } from './components/MuiTextField';
import { useForm } from './hooks/useForm';
import { FormInformation } from './components/FormInformation';
import { MuiButton } from './components/MuiButton';
import { useState,useEffect } from 'react';
import { AllFormInformation } from './components/AllFormInformation';

function App() {
  const { form, handleInputChange } = useForm({
    email:'',
    phone:'',
    name: '',
    middlename:'',
    paternalsurname:''
  })

  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    let newprogres:number = 0
    if (form.email && form.phone) {
      newprogres += 10
    }

    if(form.name){
      newprogres += 10
    }

    setProgress(newprogres)
  },[form])
  
  console.log(form);

  const changeformView = ()=>{
    // setProgress(10)
  }
  
  return (
    <main>
      <header>
        <div style={{border:'2px green solid',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <div>
            <h1 style={{fontFamily:'sans-serif'}}>Crear usuario</h1>
         </div>
         <ContentPasteIcon style={{color:'white',fontSize:'5rem'}}/>
        </div>
        <div>
          <AccessTimeIcon/><span>En menos de 5 minutos</span>
        </div>
      </header>
      {form.email && form.phone && <MuiLinearProgress sx={{width:'100%'}} value={progress} variant='determinate'/>}

      <FormWrapper title='Datos de contacto'>
          <MuiTextField
            name='email'
            type='email'
            label='Correo electronico'
            variant='outlined'
            value={form.email}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />

          <MuiTextField
            name='phone'
            type='tel'
            label='Teléfono celular'
            variant='outlined'
            value={form.phone}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />
      </FormWrapper>

      {form.email && form.phone &&
      <>
          <FormInformation>
              <p>Correo Electronico: {form.email}</p>
              <p>Telefono Celular: {form.phone}</p>
          </FormInformation>

          <div style={{ width: '100%', border:'1px red solid', display: 'flex', justifyContent: 'end',marginTop:'1rem',padding:'1rem' }}>
              <div style={{ border: '1px green solid', width: '80%', height: 'auto', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '9px' }}>
                <span>Si tus datos son correctos porfavor de continuar</span>
              </div>
          </div>

          <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <MuiButton onClick={changeformView} variant='outlined' sx={{backgroundColor:'#f44283',color:'white',textTransform:'none',width:'80%'}}>
              <span>Continuar</span>
            </MuiButton>
          </div>
      </>
      }

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
      </FormWrapper>


      <AllFormInformation>
        <p>Correo Electronico: {form.email}</p>
        <p>Telefono Celular: {form.phone}</p>
        <p>Nombre: {form.name}</p>
      </AllFormInformation>
      {/* {form.email && form.telefono && <FormInformation></FormInformation>} */}
    </main>
  )
}

export default App
