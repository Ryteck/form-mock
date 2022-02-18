import {useEffect, useState} from 'react';
import { styled, keyframes } from '@stitches/react';
import { Cross2Icon, EnterIcon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { faker } from '@faker-js/faker'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'hsl(0 0% 0% / 0.439)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'hsl(195 7.1% 11.0%)',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay  />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: 'hsl(256 6.0% 93.2%)',
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: 'hsl(253 4.0% 63.7%)',
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = Content;
const DialogTitle = StyledTitle;
const DialogDescription = StyledDescription;
const DialogClose = DialogPrimitive.Close;

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'hsl(250 95.0% 76.8%)',
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',

  '&:hover': { backgroundColor: 'hsl(252 40.1% 22.5%)' },
  '&:focus': { boxShadow: `0 0 0 2px ${'hsl(250 46.8% 38.9%)'}` },
});


const DialogIsuueContent = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(faker.name.findName())
  }, [])

  return (
    <>
      <h3>Descrição:</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, perspiciatis cupiditate animi assumenda reprehenderit accusantium praesentium, id aliquam commodi ad itaque dolores est sit ducimus quia illo dicta vero optio?</p>
      <br />
      <br />
      <li>Categorição.</li>
      <li>Novo responsável: {name}</li>
      <li>Mudança de status: <span className='andam'>Em andamento</span></li>
      <li>Seu usuário não possuía os contextos corretos, poderia validar?</li>
      <li>Mudança de status: <span className='aguar'>Aguardando retorno</span></li>
    </>
  )
}

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="btn-chamados" style={{
        height: "48px",
        width: '96px'
      }}>
        <p>Visualizar</p>
        <EnterIcon />
      </button>
    </DialogTrigger>
    <DialogContent >
      <DialogTitle>Chamado: 763362</DialogTitle>
      <DialogDescription>
        Não consigo acessar o site.
      </DialogDescription>
      <DialogIsuueContent />
      <DialogClose asChild>
        <IconButton>
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;
