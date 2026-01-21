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
      <div className='flex flex-col h-screen gap-3 p-3'>
        <div className='bg-stone-800 border-1 border-stone-600 rounded-4xl w-full h-9/10 text-white justify-center p-10'>
          Hello World ! (Modèle actif : {activeModel})
        </div>
        <div className='flex self-center rounded-full text-white bg-stone-800 border-1 border-stone-600 p-4 gap-5 w-5/10'>
          <input type="text" className='flex-1 outline-none text-lg ml-5' placeholder={`Demander à ${activeModel}`}/>
          <div className='w-px h-full bg-stone-600'></div>
          <button className='bg-[#ffffff40] text-white rounded-full cursor-pointer pl-10 pr-10 text-base border-1 border-[#ffffff80]' onClick={Menu}>{activeModel}</button>
          {isOpen && (
            <Popup 
              closeMenu={() => setIsOpen(false)}
              changeModel={(modelName) => setModel(modelName)}/>
          )}
          <button className='bg-[#ffffff40] text-white rounded-full cursor-pointertext-base border-1 border-[#ffffff80] w-15 h-15'>➤</button>
        </div>
      </div>
    </div>
  )
}

export default App