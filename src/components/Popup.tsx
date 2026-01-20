import { Models } from '../models';

interface PopupProps {
    closeMenu: () => void;
    changeModel: (modelName: string) => void;
}

function Popup({closeMenu, changeModel}: PopupProps) {
    return (
        <div className='object-center bg-white rounded-xl content-center z-99999 inset-0 fixed h-1/2 w-1/2 m-auto text-align'>
            <div className='rounded-xl'>
              {Models.map((modelName) => (
                <div 
                    className='cursor-pointer text-black w-full h-max' 
                    key={modelName} 
                    onClick={() => {
                        changeModel(modelName);
                        closeMenu();
                    }}
                >
                  {modelName}
                </div>
              ))}
            </div>
        </div>
    )
}

export default Popup