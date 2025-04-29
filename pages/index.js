import React from "react" 
import Head from 'next/head'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'

React.useLayoutEffect = React.useEffect 

export default function Home() {
   const [_width, height] = useWindowSize();
   const [view, setView] = useState(false)
   const [offset, setOffset] = useState(0);
   const [position, setPosistion]  = useState({})

   const skillsRef = useRef()
   const portfolioRef = useRef()
   const contactRef = useRef()


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

   useEffect(() => {
      window.onscroll = () => { setOffset(window.pageYOffset) }
   }, [offset]);


   useEffect(() => {
      const timerPos = setTimeout(() => {
         setPosistion( {
            'posSkills' : skillsRef.current?.offsetTop,
            'posPortfolio' : portfolioRef.current?.offsetTop,
            'posContact' : contactRef.current?.offsetTop,
         })
      }, 500)

      return () => clearTimeout(timerPos)
      
   },[height, view])

   
   return (
      <div className="home">
         <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link rel="icon" href="images/favicon.ico" />
            
            <title>Florian Fort - Développeur web Frontend</title>
            <meta property= "og:title" content="Florian Fort - Développeur web Frontend"/>
            
            <meta name="description" content="Développeur web Frontend. Je développe des plateformes, sites web, applications web pour des sartups et des indépendants."/>
            <meta property="og:description" content="Développeur web Frontend. Je développe des plateformes, sites web, applications web pour des sartups et des indépendants."/>
            
            <meta name="robots" content="index"/>
            <meta name="keywords" content="Florian Fort, développeur web full stack, développeur web front end, développeur web freelance, développeur web Yvelines, développeur web Paris, développeur web ReactJS, site web Florian Fort, portfolio Florian Fort, développement site web, développement application web"/>
            
            <meta name="author" content="Florian Fort" />
            <meta property="og:url" content="https://www.florianfort-dev.fr"/>
            <meta property="og:image" content="https://www.florianfort-dev.fr/undraw_real-time_sync_o57k_1.svg"/>

            <meta name="google-site-verification" content="X8azdaoCkKKHDaJ9FPTokeuRFfCUbMWrhQHlfIXYEjM" />

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap" rel="stylesheet"/>
         </Head>

         <Header 
            position={position} 
            height={height} 
            offset={offset}
         />

         <main>
            <HeroSection />

            <div ref={skillsRef} >
               <Skills />
            </div>

            <div ref={portfolioRef}>
               <Portfolio />
            </div>

            <div ref={contactRef}>
               <Contact />
            </div>
         </main>

         <Footer/>
      </div>
   )
}


