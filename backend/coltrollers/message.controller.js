import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
};


export const getMessages = async (req, res) => {
    try{

        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller", error.message);
        res.status(500).json({ error: "Internal server error"});
    };
};



// export const deleteMessages = async (req, res) => {
//     try{
//     const messageId = req.params.id;

//     if(!mongoose.Types.ObjectId.isValid(messageId)){
//         return res.status(400).json({ success: false, message: "Invalid messageId"});
//     }
    
//         const deleteMessage = await Message.findByIdAndDelete(messageId);

//         if(!deleteMessage){
//             res.status(404).json({ success: false, message:"Message not found"});
//         }

//         res.status(200).json({success: true, message: "Message deleted successfully"});

//     } catch (error) {
//         console.error("Error deleting message:", error);
//         res.status(500).json({ success: false, message: "Message was not deleted", error: error.message });
//     }
// };