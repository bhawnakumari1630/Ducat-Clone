import React, { useEffect, useRef, useState } from "react";
import course from "../../data/CoursesData";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import SliderButton from "../SliderButton/SliderButton";

function Scroll({CardsToRender , gap, top}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollAmount, setScrollAmount] = useState("");
  // const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    const container = sliderRef.current;
    container.scrollLeft -= scrollAmount;
  };

  const handleNext = () => {
    const container = sliderRef.current;
    container.scrollLeft += scrollAmount;
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      // console.log(windowWidth)
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    const newScrollAmount = sliderRef.current
      ? Math.floor(sliderRef.current.clientWidth + 5)
      : 0;
    setScrollAmount(newScrollAmount);
  }, [windowWidth]);

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      function handleScroll() {
        setScrollPosition(container.scrollLeft);
        // setIsBeginning(container.scrollLeft === 0);
        setIsEnd( container.scrollLeft + container.clientWidth >= container.scrollWidth );
      }

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full bg-blac">
      <>
       <SliderButton top={top} handleNext={handleNext} handlePrev={handlePrev} />
       
       <div className={`absolute top-4 -right-2 h-[87%] min-w-9 max-w-16 w-[80%] bg-gradient-to-l from-zinc-100 from-40% to-zinc-200/20  blur-sm ${isEnd && 'hidden'} `} ></div>
      </>

      <div ref={sliderRef} className="scrollNone scroll-smooth transition-scroll duration-1000 ease-linear flex flex-col overflow-auto  pb-0  ps-[2%] ">
        <div  className={` h-full py-5 flex ${gap ? `gap-${gap}` : 'gap-5' } `}>
         {CardsToRender}
        </div>
      </div>  
    </div>
  );
}

export default Scroll;
