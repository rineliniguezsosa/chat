import { FormInformationProps } from "../types/Index"


export const FormInformation = ({title,value,children}:FormInformationProps) => {
  return (
    <div style={{width:'100%',border:'1px red solid',display:'flex',justifyContent:'end'}}>
    <div style={{border:'1px green solid',width:'85%',height:'auto',paddingBlock:'1rem',backgroundColor:'#f174dc',borderRadius:'9px'}}>
      {children}
    </div>
  </div>
  )
}
