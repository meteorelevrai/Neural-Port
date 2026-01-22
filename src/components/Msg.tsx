function Msg({msg}: {msg: string}) {
    return (
        <div className="flex w-max max-w-full h-max bg-[#ffffff10] rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 items-start break-all">
            <span>{msg}</span>
            <span>{msg}</span>
        </div>
    )
}

export default Msg