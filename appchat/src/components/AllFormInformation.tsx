import { FormInformationProps } from "../types/Index"


export const AllFormInformation = ({children}:FormInformationProps) => {
  return (
    <div style={{width:'100%',border:'1px red solid',padding:'1rem'}}>
    <div style={{border:'1px green solid',width:'100%',height:'auto',padding:'1rem',backgroundColor:'#f174dc',borderRadius:'9px'}}>
      {children}
    </div>
  </div>
  )
}
