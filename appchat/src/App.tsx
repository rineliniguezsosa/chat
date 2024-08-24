import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiLinearProgress } from './components/MuiLinearProgress';
import { FormWrapper } from './components/FormWrapper';
import { MuiTextField } from './components/MuiTextField';
import { useForm } from './hooks/useForm';

function App() {
  const { form, handleInputChange } = useForm({
    email:'',
    telefono:''
  })

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
      <MuiLinearProgress sx={{width:'100%'}} value={40} variant='determinate'/>

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
    </main>
  )
}

export default App
