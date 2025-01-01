import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

import { MdDeleteForever } from "react-icons/md";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="md:min-w-[380px] flex flex-col" >
          {!selectedConversation ? ( 
            <NoChatSelected /> 
        ) : (
            <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text">To:</span> {" "}
                <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                <div className="flex delete-button">
                    <MdDeleteForever className="w-6 h-12"/>
                </div>
            </div>

           

            <Messages />
            <MessageInput />
            </>
          )}  
        </div>
    );
};

export default MessageContainer;



const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋🏻 {authUser.fullName} ❄️</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}















// STARTER CODE FOR THIS FILE

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//     return (
//         <div className="md:min-w-[380px] flex flex-col" >
//             <>
//             {/* Header */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text">To:</span>
//                 <span className="text-gray-900 font-bold">Demo1</span>
//             </div>

//             <Messages />
//             <MessageInput />
//             </>
//         </div>
//     );
// };

// export default MessageContainer;