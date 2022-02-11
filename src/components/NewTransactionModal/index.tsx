import Modal from 'react-modal'
import * as S from './styles'

import { FormEvent, useState } from 'react'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModal: () => void;
}

const NewTransactionModal = ({isNewTransactionModalOpen, handleCloseNewTransactionModal}: NewTransactionModalProps ) => {
  const {createTransaction} = useTransactions()

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    handleCloseNewTransactionModal()
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
  }

  return (
    <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type='button' 
          onClick={handleCloseNewTransactionModal} 
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal"></img>
        </button>
        <S.Container onSubmit={handleCreateNewTransaction}>
         <h2>Cadastrar Transação</h2>

        <input 
          type="text" 
          placeholder='Título' 
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          type="text"
          placeholder='Valor'  
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
        </S.Container>
      </Modal>
  )
}

export default NewTransactionModal