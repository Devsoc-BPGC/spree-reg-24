import { useState } from 'react'
import './App.css'
import RegTitle from './components/RegTitle'
import ModeSelector from './components/ModeSelector';
import Form from './components/Form';
import SportIndividual from './components/SportIndividual';
import SportTeam from './components/SportTeam';

function App() {
  const [mode, setMode] = useState("individual");
  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/universalBg.jpg')] bg-no-repeat bg-cover bg-center flex justify-evenly items-center flex-col">
      <div className="flex justify-evenly items-center w-4/5">
        <RegTitle />
        <ModeSelector setMode = {setMode}/>
      </div>
      <div className="flex justify-around items-center h-96 w-4/5">
        <Form />
        {mode=="individual" && <SportIndividual />}
        {mode=="team" && <SportTeam />}
      </div>
      <div className="flex justify-start items-center w-4/5">
        <div className="w-5/12 flex justify-center items-center">
          <button className="border-white border-2 rounded-lg text-white text-2xl px-5 py-2 font-Tourney font-black">REGISTER</button>
        </div>
      </div>
    </div>
  )
}

export default App
