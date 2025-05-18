import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Navbar from "./Navbar";
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(serviceId, templateId, { name, email, message }, publicKey);
            alert("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (ex) {
            alert("Failed to send message. Please try again later.");
            console.error(ex.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="bg-[#1E1E1F] min-h-[600px] w-full lg:w-[70%] xl:w-[75%] p-6 rounded-3xl" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#282829',
                    borderRadius: '0rem 1.5rem 0rem 1.5rem'
                }}> <Navbar /></div>

                <h1 className="text-4xl font-bold mt-8 text-white">Contact</h1>
                <div className='border-b-4 mt-2 border-[#FEC864] w-[5%]'></div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-10 space-y-6 md:pr-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="w-full md:w-[50%]">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full text-lg p-4 rounded-xl bg-[#2E2E30] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FEC864]"
                            />
                        </div>

                        <div className="w-full md:w-[50%]">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full text-lg p-4 rounded-xl bg-[#2E2E30] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FEC864]"
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows={7}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message..."
                            className="w-full p-4 rounded-xl bg-[#2E2E30] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FEC864] text-lg"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={!isFormValid}
                        sx={{
                            minWidth: "211px",
                            minHeight: "50px",
                            borderRadius: '7px',
                            padding: '10px 20px',
                            backgroundColor: 'rgb(232, 138, 37)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            my: 2,
                            mx: 0.5,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgb(200, 120, 30)',
                                transform: 'scale(0.95)',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: '#555',
                                color: '#999',
                                cursor: 'not-allowed',
                            },
                            '& .MuiButton-endIcon svg': {
                                fontSize: '20px',
                            },
                        }}
                        variant="contained"
                        endIcon={!isLoading && <SendIcon />}
                    >
                        {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Send Message"}
                    </Button>
                </form>
            </div>
        </>
    );
}

export default ContactPage;
