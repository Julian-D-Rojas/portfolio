import './App.css'
import { Header } from './components/Header'
import { Porfile } from './components/Porfile'
import{Contact} from './components/Contact'
import { Proyects } from './components/Proyects'


function App() {

  return (
    <>
     <div className="App">
    <Header></Header>
    <Porfile></Porfile>
    <Proyects></Proyects>
    <Contact></Contact>
     </div>
    </>
  )
}

export default App
