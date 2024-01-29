import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {

  return (
    <MantineProvider>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </MantineProvider>
  )
}

export default App
