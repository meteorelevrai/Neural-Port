import Markdown from "react-markdown"

function Msg({msg}: {msg: string}) {
    return (
        <div className="flex flex-col w-full max-w-full bg-[#ffffff10] rounded-tr-xl rounded-br-xl rounded-bl-xl p-5 prose prose-invert">
            <Markdown>
                {msg}
            </Markdown>
        </div>
    )
}

export default Msg