import { useState, useRef } from "react";
import SplitText from "../components/SplitText";
import * as motion from "motion/react-client";
import logo from "../components/Love.png";
import song from "../components/song.mp3";
import Stack from "../components/CardRotate";
import one from "../assets/photos/1.png";
import two from "../assets/photos/2.png";
import three from "../assets/photos/3.png";
import four from "../assets/photos/4.png";
import five from "../assets/photos/5.png";
import six from "../assets/photos/6.png";
import seven from "../assets/photos/7.png";
import eight from "../assets/photos/8.png";
const images = [
  { id: 1, img: one },
  { id: 2, img: two },
  { id: 3, img: three },
  { id: 4, img: four },
  { id: 5, img: five },
  { id: 6, img: six },
  { id: 7, img: seven },
  { id: 8, img: eight },
];

export default function SectionOne() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const popUpVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    }
  };


  return (
    <div className="min-h-screen relative overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 overflow-hidden">
        <audio ref={audioRef} src={song} />
        <motion.img
          src={logo}
          alt="Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain cursor-pointer transition-all duration-300"
          initial="hidden"
          animate="visible"
          variants={popUpVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={handleClick}
        />
        <SplitText
          text="Hello My Love!"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center text-yellow-100 m-5 p-3"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={popUpVariants}
        >
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{
              width: 280,
              height: 350,
            }}
            cardsData={images}
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 xl:scale-100"
          />
        </motion.div>
      </div>
    </div>
  </div>
  );
}
