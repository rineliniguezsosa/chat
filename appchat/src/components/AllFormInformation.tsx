import { FormInformationProps } from "../types/Index"


export const AllFormInformation = ({children}:FormInformationProps) => {
  return (
    <div style={{width:'100%',padding:'1rem'}}>
    <div style={{width:'100%',height:'auto',padding:'2rem',backgroundColor:'#f174dc',borderRadius:'9px',fontFamily: '"Roboto", sans-serif',fontWeight:500,fontStyle:'normal'}}>
      {children}
    </div>
  </div>
  )
}
