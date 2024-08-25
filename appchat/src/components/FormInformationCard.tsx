import { FormInformationProps } from "../types/Index"


export const FormInformationCard = ({children}:FormInformationProps) => {
  return (
    <div style={{width:'100%',border:'1px red solid',display:'flex',justifyContent:'end',padding:'1rem'}}>
    <div style={{border:'1px green solid',width:'85%',height:'auto',padding:'1rem',backgroundColor:'#f174dc',borderRadius:'9px',fontFamily: '"Roboto", sans-serif',fontWeight:500,fontStyle:'normal'}}>
      {children}
    </div>
  </div>
  )
}
