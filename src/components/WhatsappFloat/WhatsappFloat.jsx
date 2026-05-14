import { useState } from 'react'
import './WhatsappFloat.css'

function WhatsappFloat({ open: controlledOpen, setOpen: setControlledOpen }) {
  const [openState, setOpenState] = useState(false)
  const open = typeof controlledOpen === 'boolean' ? controlledOpen : openState
  const setOpen = setControlledOpen ?? setOpenState
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hello! I am FUROAN chatbot. How can I help you today?' }
  ])
  const [input, setInput] = useState('')

  const handleToggle = () => setOpen(prev => !prev)
  const handleClose = () => setOpen(false)

  const handleSend = (event) => {
    event.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: messages.length + 1, from: 'user', text: input.trim() }
    const botMsg = {
      id: messages.length + 2,
      from: 'bot',
      text: `You said: ${input.trim()}. I'm here to help with FUROAN services.`
    }

    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="whatsapp-float-group">
      {open && (
        <div className="whatsapp-chat-card">
          <div className="whatsapp-chat-header">
            <div>
              <strong>FUROAN Chat Bot</strong>
              <p>Ask me about products or services.</p>
            </div>
            <button className="whatsapp-chat-close" onClick={handleClose} aria-label="Close chat">
              ×
            </button>
          </div>
          <div className="whatsapp-chat-messages">
            {messages.map(message => (
              <div
                key={message.id}
                className={`whatsapp-chat-message whatsapp-chat-message--${message.from}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form className="whatsapp-chat-form" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <a
        href="https://wa.me/9471355566"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp"
        className="whatsapp-float whatsapp-float--whatsapp"
      >
        <svg className="whatsapp-float-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.942 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.672-1.611-.921-2.207-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2.002C6.478 2.002 2 6.48 2 12.006c0 2.117.66 4.082 1.8 5.706L2 22l4.4-1.155a9.96 9.96 0 0 0 5.6 1.556h.004C17.526 22.4 22 17.922 22 12.006 22 6.48 17.526 2.002 12.004 2.002zm0 18.145h-.002a8.235 8.235 0 0 1-4.238-1.153l-.304-.18-2.611.686.696-2.548-.197-.32A8.212 8.212 0 0 1 3.77 12.008c0-4.538 3.692-8.23 8.234-8.23 4.54 0 8.232 3.692 8.232 8.23 0 4.538-3.69 8.233-8.226 8.233z" />
        </svg>
      </a>
      <button className="whatsapp-float whatsapp-float--chat" onClick={handleToggle} aria-label="Open chat">
        <svg className="whatsapp-float-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v12H5.17L4 17.17V4zm0-2c-.55 0-1 .45-1 1v16l4-4h13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4z" />
        </svg>
      </button>
    </div>
  )
}

export default WhatsappFloat
