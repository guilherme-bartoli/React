import './App.css'
import ButtonFatec from './components/button-fatec'
import InputFatec from './components/input-fatec'

  function App(){
  return (
    <div className='principal'>
      <h1>Entre em contato</h1>
      <hr />
      <div className='inputs'>
        <InputFatec type='text' placeholder='Nome'/>
        <InputFatec type='email' placeholder='E-mail'/>
        <InputFatec type='phone' placeholder='Telefone'/>
      </div>
      <hr />
      <ButtonFatec type='button' label='Fatec: Enviar mensagem'/>
    </div>
    )
  }

//const App = () => {}//

export default App
