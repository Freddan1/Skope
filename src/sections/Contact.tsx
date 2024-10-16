import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    
    const formRef = useRef<HTMLFormElement | null>(null);

    const [loading, setLoading] = useState<boolean>(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",

    })

    const handleChange = ({target: {name, value}}:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [name]: value})
    }
    // service_ejx3jmb
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
           await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID as string, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, {
                    from_name: form.name,
                    to_name: "Rickard",
                    from_email: form.email,
                    to_email:"richard@skope.se",
                    message: form.message
            }, import.meta.env.VITE_EMAILJS_USER_ID  as string)
            setLoading(false)
            alert("Your message has been sent")
            setForm({
                name: "",
                email: "",
                message:""
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert("Something went wrong")
        }
    }

  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex justify-center items-center flex-col'>
            <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen'/>
            <div className='contact-container'>
                <h3 className='head-text'>Let's Talk</h3>
                <p className="text-lg text-white-600">
                    If you need help measuring effects, designing strategies, or creating engaging content,
                    we are here to assist you. Don't hesitate to contact us to learn more about how we can support your success.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="John Doe" 
                            />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="johndoe@gmail.com" 
                            />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your message</span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I'm intrested in..." 
                            />
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact