import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { SContainer } from "./styles";

export function Dashboard() {
  return (
    <SContainer>
      <Summary/>
      <TransactionsTable />
    </SContainer>
  )
}