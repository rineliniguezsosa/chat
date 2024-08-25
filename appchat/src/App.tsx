import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiLinearProgress } from './components/MuiLinearProgress';
import { useForm } from './hooks/useForm';
import { FormInformation } from './components/FormInformation';
import { MuiButton } from './components/MuiButton';
import { useState,useEffect } from 'react';
import { AllFormInformation } from './components/AllFormInformation';
import { ContactFormview } from './views/ContactFormview';
import { AdicionalFormview } from './views/AdicionalFormview';

function App() {
  const { form, handleInputChange } = useForm({
    email:'',
    phone:'',
    name: '',
    middlename:'',
    paternalsurname:'',
    maternalsurname:'',
    day:'',
    month:'',
    year:''
  })

  const [progress, setProgress] = useState(0)
  const [changeContent, setChangeContent] = useState(true)

  useEffect(()=>{
    let newprogres:number = 0
    if (form.email && form.phone) {
      newprogres += 20
    }

    if(form.name && form.middlename && form.paternalsurname && form.maternalsurname){
      newprogres += 30
    }

    setProgress(newprogres)
  },[form])
  
  console.log(form);

  const changeformView = ()=>{
    setChangeContent(false)
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
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <AccessTimeIcon/><span>En menos de 5 minutos</span>
        </div>
      </header>
      {form.email && form.phone && <MuiLinearProgress sx={{width:'100%'}} value={progress} variant='determinate'/>}
      {/* 1er contenido */}
      { changeContent ? (
        <>
        <ContactFormview form={form} handleInputChange={handleInputChange}/>
        
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
              <MuiButton onClick={changeformView} variant='outlined' style={{backgroundColor:'#f44283',textTransform:'none',width:'80%'}}>
                <span style={{color:'white'}}>Continuar</span>
              </MuiButton>
            </div>
        </>
        }
        </>
      )
      : (
        <AdicionalFormview form={form} handleInputChange={handleInputChange}/> 
      )
      }

      <AllFormInformation>
        <p>Correo Electronico: {form.email}</p>
        <p>Telefono Celular: {form.phone}</p>
        <p>Nombre: {form.name}</p>
        <p>Segundo Nombre: {form.middlename}</p>
        <p>Apellido paterno: {form.paternalsurname}</p>
        <p>Apellido materno: {form.maternalsurname}</p>
        <p>Fecha de nacimiento: {form.day}/{form.month}/{form.year}</p>
      </AllFormInformation>
      {/* {form.email && form.telefono && <FormInformation></FormInformation>} */}
    </main>
  )
}

export default App
