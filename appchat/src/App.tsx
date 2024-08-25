import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiLinearProgress } from './components/MuiLinearProgress';
import { FormWrapper } from './components/FormWrapper';
import { MuiTextField } from './components/MuiTextField';
import { useForm } from './hooks/useForm';
import { FormInformation } from './components/FormInformation';
import { MuiButton } from './components/MuiButton';
import { useState,useEffect } from 'react';

function App() {
  const { form, handleInputChange } = useForm({
    email:'',
    telefono:'',
    nombre: ''
  })

  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    if (form.email && form.telefono) {
      setProgress(10)
    }

    if(form.nombre){
      setProgress(30)
    }
  },[form])
  // const [progress, setProgress] = useState<number>(0)
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
      {form.email && form.telefono && <MuiLinearProgress sx={{width:'100%'}} value={progress} variant='determinate'/>}

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
            name='telefono'
            type='tel'
            label='Teléfono celular'
            variant='outlined'
            value={form.telefono}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />
      </FormWrapper>

      {form.email && form.telefono &&
      <>
          <FormInformation>
              <p>Correo Electronico: {form.email}</p>
              <p>Telefono Celular: {form.telefono}</p>
          </FormInformation>

          <div style={{ width: '100%', border:'1px red solid', display: 'flex', justifyContent: 'end',marginTop:'1rem',padding:'1rem' }}>
              <div style={{ border: '1px green solid', width: '80%', height: 'auto', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '9px' }}>
                <span>Si tus datos son correctos porfavor de continuar</span>
              </div>
          </div>

          <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <MuiButton onClick={changeformView} variant='outlined' sx={{backgroundColor:'#f44283',color:'white',textTransform:'none',width:'90%'}}>
              <span>Continuar</span>
            </MuiButton>
          </div>
      </>
      }

      {/* <FormWrapper title='Datos de contacto'>
          <MuiTextField
            name='nombre'
            type='text'
            label='Nombre'
            variant='outlined'
            value={form.nombre}
            sx={{width:'100%',marginBottom:'1rem'}}
            onChange={handleInputChange}
          />
      </FormWrapper> */}
      {/* {form.email && form.telefono && <FormInformation></FormInformation>} */}
    </main>
  )
}

export default App
