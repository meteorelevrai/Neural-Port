interface PopupProps {
    closeMenu: () => void;
    changeModel: (modelName: string) => void;
    availableModels: string[];
}

function Popup({ closeMenu, changeModel, availableModels }: PopupProps) {
    return (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/40 backdrop-blur-sm" onClick={closeMenu}>
            <div className='fixed inset-0 m-auto z-[9999] w-1/2 h-fit bg-[#ffffff40] backdrop-blur-md border border-[#ffffff80] rounded-xl p-8 flex flex-col gap-6 shadow-2xl'>
                <h1 className='text-2xl text-white font-bold text-center border-b border-white/20 pb-4'>
                    Sélectionnez un modèle
                </h1>
                <div className='grid grid-cols-2 gap-4'>
                    {availableModels.map((modelName) => (
                        <div 
                            key={modelName} 
                            onClick={() => {
                                changeModel(modelName);
                                closeMenu();
                            }}
                            className='p-4 text-center bg-[#ffffff20] hover:bg-[#ffffff40] border border-[#ffffff60] rounded-lg cursor-pointer text-white transition-all font-medium'
                        >
                            {modelName}
                        </div>
                    ))}
                </div>
                <button 
                    onClick={closeMenu}
                    className="mt-2 text-sm text-gray-300 hover:text-white underline self-center"
                >
                    Annuler
                </button>
            </div>
        </div>
    )
}

export default Popup