import React, { useState } from 'react';
import axios from 'axios';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { prompts } from '../../txt/propts';

const Gpt = () => {
    const API_KEY = process.env.REACT_APP_API_KEY_OPEN_AI;

    const [messages, setMessages] = useState([
        {
            message: "Hola! soy rodo-bot y te contaré lo que necesites sobre Rodolfo",
            sender: "ChatGPT",
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
        setIsTyping(true);

        await processMesageToChatGPT(newMessages);
    };

    async function processMesageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => ({
            role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
            content: messageObject.message
        }));

        const systemMessage = {
            role: "system",
            content: prompts
        };

        const options = {
            method: "POST",
            url: "https://api.edenai.run/v2/text/chat",
            headers: {
                authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            data: {
                providers: ["openai"],
                text: chatMessages[chatMessages.length - 1].message,
                chatbot_global_action: "Act as an assistant",
                previous_history: [
                    systemMessage,
                    ...apiMessages
                ],
                temperature: 0.5,
                max_tokens: 150,
            },
        };

        try {
            const response = await axios.request(options);
            const botMessage = response.data.generated_text;
            setMessages([...chatMessages, {
                message: botMessage,
                sender: "ChatGPT"
            }]);
            setIsTyping(false);
        } catch (error) {
            console.error(error);
            setIsTyping(false);
        }
    };

    return(
        <div className="p-5 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-5 text-center">¿Quieres saber más de mí? ¡Chatea con el Rodo-bot!</h1>
            <div className='flex justify-center w-full'>
                <div style={{
                    position: "relative",
                    height: "600px",
                    width: "100%",
                    maxWidth: "900px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}>
                    <MainContainer style={{ height: "100%" }}>
                        <ChatContainer>
                            <MessageList 
                                scrollBehavior="smooth" 
                                typingIndicator={isTyping ? <TypingIndicator content="Rodo-bot está escribiendo" /> : null}
                                className="p-4"
                            >
                                {messages.map((message, i) => (
                                    <div 
                                        key={i} 
                                        className={`message ${message.sender === 'ChatGPT' ? 'message-gpt bg-blue-100 text-blue-900' : 'message-user bg-gray-100 text-gray-900'} p-3 rounded-lg mb-2`}
                                    >
                                        {message.message}
                                    </div>
                                ))}
                            </MessageList>
                            <MessageInput 
                                placeholder="Di algo..."
                                onSend={handleSend} 
                                attachButton={false}
                                className="p-2"
                            />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </div>
        </div>
    );
};

export default Gpt;
