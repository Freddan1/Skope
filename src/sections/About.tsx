import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const About = () => {

    useGSAP(() => {
        gsap.from("#about_us_title", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide up effect
            scrollTrigger: {
              trigger: "#about_us_title",
              start: "top 90%", // Start when title is 80% visible
              toggleActions: "play none none reverse",
            },
          });
      
          // Fade in for content
          gsap.from("#about_us_content", {
            opacity: 0,
            duration: 1,
            y: 50, // Slide down effect
            scrollTrigger: {
              trigger: "#about_us_content",
              start: "top 75%", // Start when content is 75% visible
              toggleActions: "play none none reverse",
            },
          });
      
          // Fade in for image and name
          gsap.from(["#about_us_img", "#about_us_name"], {
            opacity: 0,
            duration: 1,
            y: 50,
            stagger: 0.3, // Add a delay between img and name
            scrollTrigger: {
              trigger: "#about_us_img",
              start: "top 70%", // Start when image is 70% visible
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            },
          });
        }, []);

  return (
    <>
        <section id="about" className="min-h-screen w-full flex flex-col relative" >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p id="about_us_title" className="hero_tag text-gray_gradient">
                    About Us
                </p>
                <div className="w-full">
                    <p id="about_us_content" className="sm:text-2xl text-sm font-medium text-white text-center font-generalsans">
                        We have a modern perspective on communication and strive to stay one step ahead in the digital revolution.
                        Skopes' approach is based on the latest research in media and communication analysis and is carried out by communicators and analysts with academic degrees in the field.
                        A combination of innovative data science techniques and expertise in media and communication enables meaningful results and allows for a broad range of services.
                        Skope offers everything from basic analysis and diagnosis to "full-service" communication services, including the development of specific or general
                        communication plans and strategies, as well as follow-up on these.
                    </p>
                    <div className="w-full flex justify-center items-center mt-10">
                        <img id="about_us_img" className="w-52 sm:w-42 " src="assets/rickard.png" alt="headshot" />
                        <p id="about_us_name" className="sm:text-3xl text-md text-white ml-7">Richard Flygt Branje, <span className="text-orange-500">Owner</span></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About