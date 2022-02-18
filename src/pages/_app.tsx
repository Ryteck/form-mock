import 'react-toastify/dist/ReactToastify.css';
import '../styles.css'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';


const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <ToastContainer 
      autoClose={3000}
      theme={'colored'}
    />
  </>
)

export default MyApp