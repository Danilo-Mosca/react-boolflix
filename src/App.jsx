import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import { GlobalProvider } from './contexts/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <HeaderComponent />
      <MainComponent />
    </GlobalProvider>
  )
}

export default App