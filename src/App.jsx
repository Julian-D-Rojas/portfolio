import './App.css'
import { Header } from './components/Header'
import { Porfile } from './components/Porfile'
import{Contact} from './components/Contact'
import { Proyects } from './components/Proyects'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
     <div className="App">
    <Header></Header>
    <Porfile></Porfile>
    <Proyects></Proyects>
    <Contact></Contact>
<Footer></Footer>
     </div>
    </>
  )
}

export default App
