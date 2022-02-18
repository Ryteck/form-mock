import { FC } from "react";
import * as separator from '@radix-ui/react-separator';
import { ChatBubbleIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'

import DialogDemo from './dialog'

type ChamadoListItemPropsType = {
  chamado: string;
  assunto: string;
  status: 'Aguardando retorno' | 'Novo' | 'Em andamento' | 'Transferido';
  cometario: number;
  alert: boolean;
}

const ChamadoListItem: FC<ChamadoListItemPropsType> = ({chamado, assunto, status, cometario, alert}) => (
  <div
    style={{
      width: "90%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    }}
  >
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {chamado}
    </div>

    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {assunto}
    </div>

    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }}>
      {
        status === 'Aguardando retorno'
        ? <span className="aguar">{status}</span>
        : status === 'Novo'
          ? <span className="novo">{status}</span>
          : status === 'Em andamento'
            ? <span className="andam">{status}</span>
            : <span className="transf">{status}</span>
      }
      {' - '}
      <p>{cometario}</p>
      <ChatBubbleIcon height={24} width={24} />
      {
        alert ? <ExclamationTriangleIcon height={24} width={24} color="hsl(48 100% 47.0%)"/> : null
      }
    </div>

    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <DialogDemo />
    </div>
  </div>
)

const AllIssueComponent: FC = () => (
  <div style={{
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: '32px',
  }}>
    <header
      style={{
        width: "90%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <h4 style={{
        textAlign: "center",
      }}>Chamado</h4>

      <h4 style={{
        textAlign: "center",
      }}>Assunto</h4>

      <h4 style={{
        textAlign: "center",
      }}>Status</h4>

      <h4 style={{
        textAlign: "center",
      }}>Visualizar</h4>
    </header>

    <separator.Root orientation="vertical" style={{
      height: '1px',
      width: '90%', 
      backgroundColor: 'hsl(210 100% 66.1%)'
    }}/>

    <ChamadoListItem
      chamado="763362"
      assunto="Não consigo acessar o site."
      status="Aguardando retorno"
      cometario={4}
      alert={false}
    />

    <ChamadoListItem
      chamado="522461"
      assunto="Disciplinas não alocadas."
      status="Transferido"
      cometario={9}
      alert={true}
    />   

    <ChamadoListItem
      chamado="753463"
      assunto="Esqueci a senha."
      status="Em andamento"
      cometario={2}
      alert={true}
    />   

    <ChamadoListItem
      chamado="347263"
      assunto="Meus dados estão incorretos."
      status="Novo"
      cometario={0}
      alert={false}
    />   

    <ChamadoListItem
      chamado="993414"
      assunto="Chamado com assunto genérico."
      status="Em andamento"
      cometario={7}
      alert={true}
    />   

  </div>
)

export default AllIssueComponent