import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Contact = () => {
    
    useGSAP(() => {
        gsap.from("#title-lets_talk", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#title-lets_talk",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });

        gsap.from("#full-name_contact", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#full-name_contact",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });
        gsap.from("#email_contact", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#email_contact",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });
        gsap.from("#your-message_contact", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#your-message_contact",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });
        gsap.from("#button_contact", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#your-message_contact",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });
    },[])
    
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
    <section id="contact" className='c-space my-20'>
        <div className='relative min-h-screen flex justify-center items-center flex-col'>
            <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen hidden lg:block'/>
            <div className='contact-container'>
                <h3 id="title-lets_talk" className='head-text'>Let's Talk</h3>
                <p id="title-lets_talk" className="text-lg text-white-600">
                    If you need help measuring effects, designing strategies, or creating engaging content,
                    we are here to assist you. Don't hesitate to contact us to learn more about how we can support your success.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span id="full-name_contact" className="field-label">Full Name</span>
                        <input 
                            id="full-name_contact"
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
                        <span id="email_contact" className="field-label">Email</span>
                        <input 
                            id="email_contact"
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
                        <span id="your-message_contact" className="field-label">Your message</span>
                        <textarea 
                            id="your-message_contact"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I'm intrested in..." 
                            />
                    </label>
                    <button id="button_contact" className="field-btn" type="submit" disabled={loading}>
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