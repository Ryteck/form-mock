import { FC, useEffect, useState } from 'react';
import Image from 'next/image'
import * as tabs from '@radix-ui/react-tabs';
import { faker } from '@faker-js/faker'

import NewIssueComponent from '../components/NewIssueComponent' 
import AllIssueComponent from '../components/AllIssueComponent';

const Container: FC = ({children}) => (
  <div style={{
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}>
    {children}
  </div>
)

const Header: FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    setName(faker.name.findName())
    setUser(faker.phone.phoneNumber('050#####'))
  }, [])

  return (
    <header style={{
      width: '100%',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <section style={{
        marginLeft: '24px'
      }}>
        <Image 
          src='/logo.png' 
          height={80}
          width={80}  
        />
      </section>

      <section style={{
        marginRight: '24px'
      }}>
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >{name}</p>
        
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >{user}</p>
      </section>
    </header>
  )
}


const Main: FC = () => (
  <main style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 0 1px hsl(199 6.4% 17.9%)',
    gap: '24px',
    flex: 1,
  }}>
    <h2 style={{
      marginTop: '24px',
    }}>Atendimentos</h2>

    <tabs.Root defaultValue='new' style={{
      marginBottom: '24px',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <tabs.List style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        marginBottom: '40px'
      }}>
        <tabs.Trigger value='new' style={{
          height: '48px',
          width: '320px',
        }}>
          Abrir um novo chamado
        </tabs.Trigger>

        <tabs.Trigger value='all' style={{
          height: '48px',
          width: '320px',
        }}>
          Visualizar todos os chamados abertos
        </tabs.Trigger>
      </tabs.List>

      <tabs.Content value='new' style={{
        display: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}>
        <NewIssueComponent />
      </tabs.Content>

      <tabs.Content value='all' style={{
        display: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}>
        <AllIssueComponent />
      </tabs.Content>
    </tabs.Root>
  </main>
)

const Footer: FC = () => (
  <footer style={{
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <h3>
      &copy; {new Date().getFullYear()}
    </h3>
  </footer>
)

const MentiraPage = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>
)

export default MentiraPage