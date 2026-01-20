import { useState } from 'react'
import { Models } from './models'
import Popup from './components/Popup'

function App() {
  const [isOpen, setIsOpen] = useState(false);
    const [activeModel, setModel] = useState(Models[0])

  const Menu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='bg-transparent'>
      <div className='flex flex-col h-screen margin-5 gap-3 p-3'>
        <div className='rounded-xl border-2 border-white w-full h-9/10 text-white justify-center'>
          Hello World ! (Modèle actif : {activeModel})
        </div>
        <div className='flex flex-col rounded-xl border-2 border-white w-full h-1/10 text-white justify-center'>
          <input type="text" />
          <button className='bg-white text-black w-1/10 rounded-sm' onClick={Menu}>{activeModel}</button>
          {isOpen && (
            <Popup 
              closeMenu={() => setIsOpen(false)}
              changeModel={(modelName) => setModel(modelName)}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App