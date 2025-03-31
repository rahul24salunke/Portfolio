import { animate, stagger,motion } from "framer-motion";
import "./Hero.scss"
function Hero(){
    const textVarients={
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1,
            }
        },
        scrollbutton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity,
            },
        },
    };
    const sliderVarients={
        initial:{
            x:0,
        },
        animate:{
            x:"-200%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20,
            }
        },
    };
    return(
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate">
                    <motion.h2 variants={textVarients}>Rahul salunke</motion.h2>
                    <motion.h1 variants={textVarients}>Web developer and tech enthuastic</motion.h1>
                    <motion.div className="buttons" variants={textVarients}>
                        <motion.button variants={textVarients}>see the latest works</motion.button>
                        <motion.button variants={textVarients}>contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textVarients} animate="scrollbutton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingtextContainer" variants={sliderVarients} initial="initial" animate="animate">
                write the containt
            </motion.div>
            <div className="imageContainer">
                <img src="\hero.png" alt="" />
            </div>
        </div>
    )
}
export default Hero;