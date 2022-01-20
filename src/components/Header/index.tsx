import Logo from "../../assets/logo.svg"
import { SContent, SHeader } from "./styles"

export function Header() {
  return (
    <SHeader>
      <SContent>
        <img src={Logo} alt="dt money logo" />
        <button type="button">Nova Transação</button>
      </SContent>
    </SHeader>
  )
}