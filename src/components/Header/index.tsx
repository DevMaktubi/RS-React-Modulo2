import Logo from "../../assets/logo.svg"
import { SContent, SHeader } from "./styles"

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  
  return (
    <SHeader>
      <SContent>
        <img src={Logo} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
        
      </SContent>
    </SHeader>
  )
}