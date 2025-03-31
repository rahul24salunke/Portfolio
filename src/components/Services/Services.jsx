import { useRef } from "react";
import "./services.scss"
import {animate, motion, useInView } from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
function Services(){
    const ref=useRef()
    const isInView=useInView(ref,{margin:"-100px"})
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on learning new things <br />and making projects</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b >Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b>For Your</motion.b>Bussiness</h1>
                    <button>what we do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box">
                    <h2>brandibg</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed iste ea omnis. Amet soluta voluptate deleniti suscipit at illo, excepturi non similique et. Aliquid optio enim ab a atque?</p>
                    <button>go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>brandibg</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed iste ea omnis. Amet soluta voluptate deleniti suscipit at illo, excepturi non similique et. Aliquid optio enim ab a atque?</p>
                    <button>go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>brandibg</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed iste ea omnis. Amet soluta voluptate deleniti suscipit at illo, excepturi non similique et. Aliquid optio enim ab a atque?</p>
                    <button>go</button>
                </motion.div>
                <motion.div className="box" >
                    <h2>brandibg</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed iste ea omnis. Amet soluta voluptate deleniti suscipit at illo, excepturi non similique et. Aliquid optio enim ab a atque?</p>
                    <button>go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Services;