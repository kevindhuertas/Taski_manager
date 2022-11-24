import React, { useRef, useEffect, useState } from "react";
import history from "../../context/history";
import { CaptionCard } from "./CaptionCard";
import Animate from "../wrappers/AnimationWrapper";


export default function AppCard({ animate, caption, img, onChange, type }) {
  const ref = useRef(null); //Nos da las coordenadas x,y  de la card en la ventana
  const [direction, setdirection] = useState("topRight");

  useEffect(() => {
    const setDimensions = () => {
      const y = ref.current.offsetTop > window.innerHeight ? "bot" : "top";
      const x =
        ref.current.offsetLeft * 2 < window.innerHeight ? "Left" : "Right";
      setdirection(y + x);
    };

    setDimensions();
    //Cada vez que se redimencione la ventana se va a ejecutar la funcion
    window.addEventListener("resize", setDimensions);

    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  },[ref]);

  const onClick =()=>{
    if(type){
        onChange(type)
    }else{
        onChange()

        setTimeout(()=>{
            history.push({pathname:"/app",state:{img,caption}})
        },700)
    }
  }

  return(
    <Animate
        animate={animate}
        ref={ref}
        direction={direction}
        className="animate-col"
    >


    </Animate>
  )

}

AppCard.defaultProps = {
    animate:false,
    caption: "yout caption",
    img: null,
    onChange:null,
    type:null
}

