import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiLinearProgress } from './components/MuiLinearProgress';

function App() {
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
      <MuiLinearProgress value={40} variant='determinate'/>
    </main>
  )
}

export default App
