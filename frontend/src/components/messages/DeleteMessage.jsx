// import { useEffect, useState } from "react"

// const DeleteMessage = () => {
//     const [messages, setMessages] = useState([]);
//     const [selectedMessage, setSelecetedMesage] = useState(null);

//     useEffect(() => {
//         fetch("htt://localhost:3000/api/mesages")
//         .then((res) => res.json())
//         .then((data) => setMessages(data));

//         socket.on("messageDeleted", (messageId) => {
//             setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== messageId));
//         });
//     }, []);

//     const handleDelete = () => {
//         if(selectedMessage){
//             fetch(`http://localhost:3000/api/messages/${selectedMessage}`, {
//                 method: "DELETE",
//             })
//             .then(() => {
//                 socket.emit("deleteMessage", selectedMessage);

//                 setSelecetedMesage(null); 
//             }) .catch((err) => {
//                 console.error(err);
//             });
//         }
//     };

//     return (
//         <div className="chatzone">
//             <div className="message-list">
//                 {messages.map((msg) => (
//                     <div key={msg._id}
//                         className={`message ${selectedMessage === msg._id ? "selected" : ""} `}
//                         onClick={() => setSelecetedMesage(msg._id)}
//                     >
//                         {msg.text}
//                     </div>
//                 ))}
//             </div>

//             <button className="delete-button" onClick={handleDelete}
//                 disabled={!selectedMessage}
//             >
//                 Delete Selected Message
//             </button>
//         </div>
//     );
// };


// export default DeleteMessage;