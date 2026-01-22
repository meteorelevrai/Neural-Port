import { useState } from 'react'
import { Models } from './models'
import Popup from './components/Popup'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModel, setModel] = useState(Models[0]);

  const Menu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-stone-900 h-screen w-full text-white'>
      
      <div className='flex flex-col h-full gap-4 p-4'>
        <div className='bg-stone-800 border border-stone-600 rounded-3xl w-full flex-1 flex justify-center items-center p-10 overflow-hidden'>
          Faire div messages
        </div>
        <div className='flex self-center items-center rounded-full text-white bg-stone-800 border border-stone-600 p-2 gap-4 w-1/2 relative'>
          <input 
            type="text" 
            className='flex-1 bg-transparent outline-none text-lg ml-4 placeholder-stone-500' 
            placeholder={`Demander à ${activeModel}...`}
          />
          <div className='w-px h-8 bg-stone-600'></div>
          <button 
            className='bg-[#ffffff10] hover:bg-[#ffffff20] text-white rounded-full cursor-pointer px-6 py-2 text-base border border-[#ffffff20] transition-colors whitespace-nowrap' 
            onClick={Menu}
          >
            {activeModel} ⯆
          </button>
          {isOpen && (
            <Popup 
              closeMenu={() => setIsOpen(false)}
              changeModel={(modelName) => setModel(modelName)}
            />
          )}
          <button className='bg-[#ffffff10] hover:bg-blue-600 hover:border-blue-500 text-white rounded-full flex items-center justify-center border border-[#ffffff20] w-12 h-12 cursor-pointer transition-all'>
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}

export default App