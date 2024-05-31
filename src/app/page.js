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
    <div><div className="text-[#b4996e] text-xl font-bold absolute top-5 left-5 "><Link href="/info"><IoMdInformationCircleOutline /></Link></div></div>
    <div className="font-semibold text-5xl sm:text-7xl flex items-center mr-2 text-slate-800 ml-10">
    
    <div>{!isOpen? <div>FOCUS BEATS</div> : null}<div className="text-base mr-4">{!isOpen? <div>24 Hour Boom Bap Focus Beats - Click to Listen</div> : null}</div>
    
    
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
    


    
    </>)
}

export default Page



