import { PerspectiveCamera } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"

const Hero: React.FC = () => {
  // const x  = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })
  const isSmall = useMediaQuery({maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Welcome to Skope <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Helping you with your communication plan for your company</p>
        </div>

        <div className="w-full h-full absolute inset-0">
          {/* <Leva/> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0, 0, 25]}/>
              <HeroCamera isMobile={isMobile}>
                <HackerRoom 
                  position={sizes.deskPosition} 
                  rotation={[0.2, -Math.PI , 0]}
                  scale={sizes.deskScale}
                />
              </HeroCamera>
              <group>
                {/* <Target position={sizes.targetPosition}/> */}
              </group>
              <ambientLight intensity={1}/>
              <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 z-10 c-space">
          <a href="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  ) 
}

export default Hero