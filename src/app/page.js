"use client";
import React from 'react'
import Link from 'next/link'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { IoMdInformationCircleOutline } from "react-icons/io";

import { useState } from 'react';

import "./styles.css";


const Page = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState(`./audio/lofi128/track1.mp3`);
  const [root, setRoot] = useState(`./audio/lofi128/`);
  const [currentShow, setCurrentShow] = useState("loading");

  const [blogInfo, setBlogInfo] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

  // fetch('https://develop.dailyoperation.uk/focusmusic/wp-json/wp/v2/posts?_embed&per_page=10')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   // Work with the received post data
  //   setBlogInfo(data)
  //   setIsLoaded(true);
    
    
    
    
  // })
  // .catch(error => {
  //   console.error('There was a problem with the fetch operation:', error);
  // });

    const nextTrack = () => {
      const time = new Date();
      const hour = time.getHours();
      console.log(hour);
      (hour>8 && hour<10)? (setRoot(`./audio/lofi128/`), setCurrentShow("The Quality Control Show")): setRoot(`./audio/overnight128/`);
      (hour>9 && hour<12)? (setRoot(`./audio/lofi128/`), setCurrentShow("Lofi Funk Beat")): setRoot(`./audio/overnight128/`);
      (hour>11 && hour<14)? (setRoot(`./audio/lofi128/`), setCurrentShow("Worldwide Disco")): setRoot(`./audio/overnight128/`);
      (hour>13 && hour<16)? (setRoot(`./audio/lofi128/`), setCurrentShow("The Chilled Selection")): setRoot(`./audio/overnight128/`);
      (hour>15 && hour<18)? (setRoot(`./audio/lofi128/`), setCurrentShow("Hip Hop Instrumentals")): setRoot(`./audio/overnight128/`);
      (hour>17 && hour<20)? (setRoot(`./audio/lofi128/`), setCurrentShow("Boom Bap")): setRoot(`./audio/overnight128/`);
      (hour>19 && hour<22)? (setRoot(`./audio/lofi128/`), setCurrentShow("Dusty Grooves")): setRoot(`./audio/overnight128/`);
      (hour>21 && hour<24)? (setRoot(`./audio/lofi128/`), setCurrentShow("Late night Lo Fi")): setRoot(`./audio/overnight128/`);
      console.log(root);
      
      

      const ranNum = Math.floor(Math.random() * 24+1);
      setPath(`./audio/lofi128/track${ranNum}.mp3`);
      console.log(path);
      console.log(hour)

      
            
      
      }
    

  return (<>
  <div className="sm:bg-[#9a9488] bg-[#d3caab]">
    <div className="bg-[url('/retro_radio.jpg')] sm:bg-contain  bg-center bg-no-repeat h-screen bg grid grid-cols-2">
    <div>
    {/* <div className="text-black text-xl font-bold absolute top-5 left-5 "><Link href="/info"><IoMdInformationCircleOutline /></Link></div> */}
    <div className="tooltip tooltip-closed tooltip-right" data-tip="click for more information">
    <Link href="#faq">
  <button className="btn btn-ghost bg-[#9a9488] text-xl font-bold"><IoMdInformationCircleOutline /></button>
  </Link>
</div>
    </div>
    <div className="font-semibold text-5xl sm:text-7xl flex items-center mr-2 text-slate-800 ml-10">
    
    <div>{!isOpen? <div>FOCUS RADIO</div> : null}<div className="text-base mr-4">{!isOpen? <div>24 Hour Boom Bap Focus Beats - Click to Listen</div> : null}</div>
    
    
    <div className="flex">
    {/* <div className='text-3xl'>Listen Live</div> */}
    <AudioPlayer src={path} onEnded={nextTrack} showJumpControls={false} customProgressBarSection={[]}
        customAdditionalControls={[]} customVolumeControls={[]} className="rounded-xl" />
    </div>
    <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" text-sm text-[#b4996e]">Current Show - {currentShow}</div>
  
  
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-[#d3caab] text-[#b4996e] rounded-box w-52 text-sm">
    {/* <li> Up Next - The Beats Show</li> */}
    <li ><a onClick={() => setIsOpen(!isOpen)}>{isOpen? "Close" : "Full Show Times"}</a></li>
    
  </ul>
  </div>{isOpen? <div className="overflow-x-auto">
  <table className="table-sm text-slate-800 table mt-10">
    {/* head */}
    <thead>
      <tr>
        
        <th>Time (GMT)</th>
        <th>Show</th>
        <th>Style</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='text-slate-700'>
        
        <td>8.00 - 10.00</td>
        <td>The Quality Control Show</td>
        <td>Lo-fi</td>
      </tr>
      {/* row 2 */}
      <tr className='text-slate-700'>
        
        <td>10.00 - 12.00</td>
        <td>Lofi Funk Beats</td>
        <td>Funk</td>
      </tr>
      {/* row 3 */}
      <tr className='text-slate-700'>
        
        <td>12.00 - 14.00</td>
        <td>Worldwide Disco</td>
        <td>Disco</td>
      </tr>

      {/* <tr className='text-slate-700'>
        
        <td>12.00 - 14.00</td>
        <td>The Chilled Selection</td>
        <td>Beats</td>
      </tr> */}

      <tr className='text-slate-700'>
        
        <td>14.00 - 16.00</td>
        <td>Hip Hop Instrumentals</td>
        <td>Hip Hop</td>
      </tr>

      <tr className='text-slate-700'>
        
        <td>16.00 - 18.00</td>
        <td>Boom Bap</td>
        <td>Hip Hop</td>
      </tr>

      <tr>
        
        <td>18.00 - 20.00</td>
        <td>Dusty Grooves</td>
        <td>Beats</td>
      </tr>

      <tr>
        
        <td>20.00 - 22.00</td>
        <td>Late night Lo Fi</td>
        <td>Lo Fi</td>
      </tr>

      <tr>
        
        <td>22.00 - 24.00</td>
        <td>Jazz Grooves</td>
        <td>Jazz Beats</td>
      </tr>

      

      
    </tbody>
  </table>
</div>:null}
</div>

</div>
    
        
        
    </div>
    
    </div>
    <div className='bg-[#9a9488] '>
        <h1 id="faq" className="pt-6 text-center text-slate-800 text-xl font-bold">Focus Radio FAQ</h1>
     <div className="mx-auto pt-6 sm:w-2/3">
     <div className="collapse bg-[#fbf9e6] shadow-xl m-2">
  <input type="radio" name="my-accordion-1"  /> 
  <div className="collapse-title text-xl   font-medium">
    What Is Focus Radio
  </div>
  <div className="collapse-content"> 
    <p>Focus Radio helps you stay productive by minimizing distractions. Listening to low-tempo, vocal-free lofi music has consistently been proven to help people block out daily distractions and concentrate on their tasks. This site curates beats and playlists designed to be the perfect soundtrack for your workday (or night), supporting your work-life balance every single day. New tracks are added daily to ensure you remain focused and avoid getting too absorbed in familiar patterns and sounds you have heard before on your last listen.</p>
  </div>
</div>
<div className="collapse bg-[#fbf9e6] shadow-xl m-2">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    The Team
  </div>
  <div className="collapse-content"> 
    <p>Our team is made up of DJs music professionals and of course music fans, each one curates the very best beats to their own taste to make up the show.  Every beat has been selected to work with our sound and have a great feel. It has taken years of listening and buying records to build up a powerful team of tastemakers and playlist builders. In the coming months, we plan to give more information and features on our team members along with mixes curated by them and for you, gradually building the focus radio network.</p>
  </div>
</div>
<div className="collapse bg-[#fbf9e6] shadow-xl m-2">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    Submit Your Music
  </div>
  <div className="collapse-content"> 
    <p>It is easy to submit your music to us just send a link to hello@focusradio.uk . Make sure these tracks fit out the remit of Lofi book bap sounds and also make sure they are 100% percent original, we do not want our listeners having to pay expensive licenses to enjoy our music. The best links for us are SoundCloud or the equivalent, please do not send us mp3 files or WAVs as they will not get through to our listeners as they are big.</p>
  </div>
</div>



     </div>

     <div className="pt-6">
     <h1 className="pb-6 text-center text-xl font-bold">The ultimate guide to focus Music</h1>
    
    
    <div className="mt-4">
    <div className="mx-auto card w-96 md:w-2/3 bg-[#fbf9e6] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Enhance Your Productivity with Focus Music</h2>
      <p>Ever get stuck watching the first 30 seconds of YouTube videos to find you have just wasted the best part of the morning, well it is so easy to do. That is why we decided to make playlists of our favorite beats to focus our minds and attention on our work. But sadly this takes time, and I mean a lot of time! So the next option was to get on YouTube and listen to one of the numerous channels promising to keep us focussed but in the time it takes to settle into a lofi-focused state the next advert appears completely side-tracking our thoughts and train of communication. To help us beat this never-ending cycle is focus radio, made solely of beats you can focus on. </p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
    </div>
    </div>

    {/* -------------------POST CODE */}

    <div className="mt-4">
    <div className="mx-auto card w-96 md:w-2/3 bg-[#fbf9e6] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">BBC sounds focus beats</h2>
      <p>Let's be honest we love focus beats and it really does set the standard for what we do here in the UK. So how have we made what we do different? Well first up our beats are all coordinated to play sounds you like and may have heard before but never in the same order so each show is different. The issue will relax and listening to focus beats in a set recorded order over and over means gradually you start to recognise the tracks, this is not a bad thing in itself but losing focus becomes more of an issue as your mind wanders to the recorded show streamed. Our system means every show is unique and built by our team of playlist curators and style tastemakers. Sticking to the traditional style of changing radio shows and music taste building a playlist that works for each style is used as a quality control plus adds some humanizing to the feel and sound of each show. All that said we have nothing but great things to say about BBC focus beats and we all love it we just feel there is more space in the market for new models for the world to use, to keep their focus! Our framework and system are continually adding fresh new music to keep your daily work focus at its absolute maximum and work with you to work towards your goals and achievement on a daily basis. Having said that just listening for pleasure can happen too.</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
    </div>
    </div>

    {/* ---------------------END POST CODE */}

    {/* -------------------POST CODE

    <div className="mt-4">
    <div className="mx-auto card w-96 md:w-2/3 bg-[#fbf9e6] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">TITLE</h2>
      <p>CONTENT</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
    </div>
    </div>

    ---------------------END POST CODE */}

    {/* -------------------POST CODE

    <div className="mt-4">
    <div className="mx-auto card w-96 md:w-2/3 bg-[#fbf9e6] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">TITLE</h2>
      <p>CONTENT</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
    </div>
    </div>

    ---------------------END POST CODE */}

    {/* -------------------POST CODE

    <div className="mt-4">
    <div className="mx-auto card w-96 md:w-2/3 bg-[#fbf9e6] shadow-xl">
    <div className="card-body">
      <h2 className="card-title">TITLE</h2>
      <p>CONTENT</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
    </div>
    </div>

    ---------------------END POST CODE */}
    
    


            
  </div>
    </div>

    


    
    </>)
}

export default Page



