import { useState } from 'react'
import { Models } from './models'
import Popup from './components/Popup'
import Msg from './components/Msg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModel, setModel] = useState(Models[0]);
  const [inputValue, setInputValue] = useState("");

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  function textareaSize(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value)
    const textarea = event.target;
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  } 

  return (
    <div className='bg-stone-900 h-screen w-full text-white'>
      
      <div className='flex flex-col h-full gap-4 p-4'>
        <div className='flex flex-col items-center flex-1'>
          <div className='flex flex-col gap-5 bg-stone-800 border border-stone-600 rounded-3xl w-1/2 h-full p-10 overflow-y-scroll'>
            <Msg msg={`Ceci est un message`}/>
            <Msg msg={`Ceci est un autre message`}/>
            <Msg msg={`Ceci est un message trèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèès long`}/>
          </div>
        </div>
        <div className='flex self-center items-center rounded-3xl text-white bg-stone-800 border border-stone-600 p-2 gap-4 w-2/5 relative'>
          <textarea  
            className='overflow-y-auto flex-1 bg-transparent outline-none text-lg placeholder-stone-500 resize-none max-h-[10lh] p-5'
            placeholder={`Demander à ${activeModel}...`}
            onChange={textareaSize}
            rows={1}
            value={inputValue}
          />
          <div className='w-px h-[90%] bg-stone-600'></div>
          <button 
            className='bg-[#ffffff10] hover:bg-[#ffffff20] text-white rounded-full cursor-pointer px-6 py-2 text-base border border-[#ffffff20] transition-colors whitespace-nowrap' 
            onClick={handleMenu}
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