import Head from 'next/head'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import React from "react" 
React.useLayoutEffect = React.useEffect 

import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import Presentation from '../components/presentation'
import Prestation from '../components/prestation'
import SectionTop from '../components/sectionTop'


export default function Home() {
   const [width, height] = useWindowSize();
   const [view, setView] = useState(false)
   const [offset, setOffset] = useState(0);
   const [pos, setPos]  = useState({})

   const portfolioRef = useRef()
   const prestationRef = useRef()
   const contactRef = useRef()

   const changeView = () => {
      if(view) {
         setTimeout(() => {
            setView(!view)
         }, 800)
      } else {
         setView(!view)
      }
   }

   useEffect(() => {
      window.onscroll = () => {
         setOffset(window.pageYOffset)
      }
   }, [offset]);


   useEffect(() => {
      const timerPos = setTimeout(() => {
         setPos( {
            "posPortfolio" : portfolioRef.current?.offsetTop,
            "posPrestation" : prestationRef.current?.offsetTop,
            "posContact" : contactRef.current?.offsetTop,
         })
      }, 500)

      return () => clearTimeout(timerPos)
      
   },[height, view])

   
   return (
      <div className="home">
         <Head>
            <title>Precogs Dev</title>
            <link rel="icon" href="/favicon.ico" />
      
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap" rel="stylesheet"/>
         </Head>

         <Header position={pos} 
                 height={height} 
                 offset={offset}/>

         <main>
            <SectionTop/>

            <Presentation changeView={changeView} 
                        view={view} 
                        height={height}
                        offset={offset}/>

            <div ref={portfolioRef} >
               <Portfolio />
            </div>

            <div ref={prestationRef}>
               <Prestation width={width}/>
            </div>

            <div ref={contactRef}>
               <Contact />
            </div>
         </main>

         <Footer/>
      </div>
   )
}


function useWindowSize() {
   const [size, setSize] = useState([0, 0]);
   useLayoutEffect(() => {
     function updateSize() {
       setSize([window.innerWidth, window.innerHeight]);
     }
     window.addEventListener('resize', updateSize);
     updateSize();
     return () => window.removeEventListener('resize', updateSize);
   }, []);
   return size;
}