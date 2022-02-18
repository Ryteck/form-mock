import { FC, useMemo } from "react";
import Select from 'react-select';
import {CheckIcon} from '@radix-ui/react-icons'
import * as checkbox from '@radix-ui/react-checkbox'; 
import {useDropzone} from 'react-dropzone';
import { toast } from 'react-toastify';

import {QuestionsMock, SubQuestionMock} from "../../mocks/AllQuestionsMock";
import {CursosMcok, discMock, TurmasMock} from "../../mocks/ClassMock";

const Step1: FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}>
    <h3>Categoria</h3>
    <Select
      styles={{
        container: (styles) => ({
          ...styles,
          width: '400px'
        }),
        option: (styles) => ({
          ...styles,
          color: '#000',
        })
      }}
      options={QuestionsMock}
    />
  </div> 
)


const Step2: FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}>
    <h3>Sub-categoria</h3>
    <Select
      styles={{
        container: (styles) => ({
          ...styles,
          width: '400px'
        }),
        option: (styles) => ({
          ...styles,
          color: '#000',
        })
      }}
      options={SubQuestionMock}
    />
  </div> 
)

const Step3: FC = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  }}>
    <checkbox.Root id="checkId" style={{
      all: 'unset',
      backgroundColor: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <checkbox.Indicator style={{
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <CheckIcon style={{
          height: '24px',
          width: '24px',
        }}/>
      </checkbox.Indicator>
    </checkbox.Root>

    Já tentei seguir as instruções neste <span>link</span>
  </div>
)

const baseStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 4,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'solid',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const Step4: FC = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*', multiple: false});

  const file = acceptedFiles.map(file => (
    <p key={file.name}>
      {file.name} - {file.size} bytes
    </p>
  ));

  const dropStyle = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}> 
          <h4>Curso</h4>
          <Select
            styles={{
              container: (styles) => ({
                ...styles,
                width: '200px'
              }),
              option: (styles) => ({
                ...styles,
                color: '#000',
              })
            }}
            options={CursosMcok}
          />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}> 
          <h4>Disciplina</h4>
          <Select
            styles={{
              container: (styles) => ({
                ...styles,
                width: '280px'
              }),
              option: (styles) => ({
                ...styles,
                color: '#000',
              })
            }}
            options={discMock}
          />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}> 
          <h4>Turma</h4>
          <Select
            styles={{
              container: (styles) => ({
                ...styles,
                width: '200px'
              }),
              option: (styles) => ({
                ...styles,
                color: '#000',
              })
            }}
            options={TurmasMock}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}> 
        <h4>Anexos</h4>
        <div {...getRootProps({style: {flexDirection: 'column', ...dropStyle}})}>
          <input {...getInputProps()} />
          <p>Arraste e solte aqui ou clique para selecionar...</p>
        </div>
        {file}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '8px'
      }}> 
        <h4>Descrição</h4>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px'
        }}> 
          <textarea rows={10} cols={80} style={{resize: 'none'}} placeholder="Coloque a descrição detalhada do seu problema aqui..." />

          <button style={{
            height: '100px',
            width: '100px',
            color: 'hsl(206 98.0% 95.8%)',
            borderRadius: '16px'
          }}
           onClick={() => {
             Math.random() >= 0.5
             ? toast.success('Chamado aberto com sucesso, código 123456')
             : toast.error('Erro ao abrir o chamado')
           }}
          >Abrir chamado</button>
        </div>
      </div>
    </div>
  )
}

const NewIssueComponent: FC = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: '32px',
    }}>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </div>
  )
}

export default NewIssueComponent; 