import { useState } from 'react'
import { Models } from './models'
import Popup from './components/Popup'
import Msg from './components/Msg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModel, setModel] = useState(Models[0]);
  const [inputValue, setInputValue] = useState("");
  const OLLAMA_URL = "http://localhost:11434";
  const [message, setMessage] = useState<any[]>([])

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  function textareaSize(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value)
    const textarea = event.target;
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey)
    {
      event.preventDefault();
      sendMessage();
    }
  }

  async function sendMessage() {
    try {
      if (inputValue === "") return;
      const user_msg = {role: "user", content: inputValue}
      setInputValue("")
      setMessage(prev => [...prev, user_msg])

      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          model: activeModel,
          messages: [{role: "user", content: inputValue}],
          stream: false
        })
      });
      const data = await response.json();
      const text = data.message.content
      const ollama_msg = {role: "IA", content: text};
      setMessage(prev => [...prev, ollama_msg])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-stone-900 h-screen w-full text-white'>
      <div className='flex flex-col h-full gap-4 p-4'>
        <div className='fixed flex-row self-end rounded-3xl bg-stone-800 border border-stone-600 h-max w-max p-2 pr-5 pl-5'>
          <h1 className='flex flex-col mr-0 ml-auto text-white font-mono text-3xl w-max'>Neural-Port</h1>
        </div>
        <div className='flex flex-col items-center flex-1 overflow-hidden'>
          <div className='flex flex-col gap-5 bg-stone-800 border border-stone-600 rounded-3xl w-1/2 h-full p-10 overflow-y-scroll'>
            {message.map((message, index) => (
              <Msg key={index} msg={message.content} />
            ))}
          </div>
        </div>
        <div className='flex self-center items-center rounded-3xl text-white bg-stone-800 border border-stone-600 p-2 gap-4 w-2/5 relative'>
          <textarea  
            className='overflow-y-auto flex-1 bg-transparent outline-none text-lg placeholder-stone-500 resize-none max-h-[10lh] p-5'
            placeholder={`Demander à ${activeModel}...`}
            onChange={textareaSize}
            onKeyDown={handleKeyDown}
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
          <button onClick={sendMessage} className='bg-[#ffffff10] hover:bg-blue-600 hover:border-blue-500 text-white rounded-full flex items-center justify-center border border-[#ffffff20] w-12 h-12 cursor-pointer transition-all'>
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}

export default App