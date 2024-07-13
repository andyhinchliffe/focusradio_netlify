"use client"

import { useState, useEffect } from 'react';

import Image from "next/image";

import {Howl, Howler} from 'howler';
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { FaList } from "react-icons/fa";






export default function Home() {

  
  const [artistDataWP, setArtistDataWP] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playing, setPlaying] = useState(null);
  const [artist, setArtist] = useState(null); 
  const [trackPath, setTrackPath] = useState(null);
  const [currentSound, setCurrentSound] = useState(null);
  const [frontPage, setFrontPage] = useState(true);
  const [startedSelection, setStartedSelection] = useState(false);
  
  const [artistDisplay, setArtistDisplay] = useState(null);
  const [artistDisplayInfo, setArtistDisplayInfo] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showinfo, setShowInfo] = useState(false);

  const {Howl, Howler} = require('howler');
  

  useEffect(() => {
    fetch('https://develop.dailyoperation.uk/streaming/wp-json/wp/v2/posts?_embed&per_page=16', {
      method: 'GET',
    })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the received post data
    setFrontPage(false);
    setArtistDataWP(data)
    setPlaying(data[3])
    const trackId = data[3].id;
    setTrackPath(`https://develop.dailyoperation.uk/audio/track${trackId}.mp3`)
    setIsLoaded(true);
    
    
    console.log("got it!")
    console.log(artistDataWP)
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  

  }, []);


  const fetchPost16 = () => {
    fetch('https://develop.dailyoperation.uk/streaming/wp-json/wp/v2/posts/16?_embed', {
      method: 'GET',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setPlaying(data);
      console.log("got it!");
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };
  // const updatePlaying = () => {

  //   setPlaying(post) 
  // }
  // const updatePath = () => {

  //   setTrackPath(`../audio/track` + `${playing.id}` + `.mp3`)
  //   console.log(trackPath)
  // }

  const handlePostClick = (post) => {
    setPlaying(post);
    handlePlay(post);
    setStartedSelection(true);
  };

  const handlePlay = (track) => {
    if (currentSound) {
      currentSound.stop();
    }

    const trackId = track.id;
    const newTrackPath = `https://develop.dailyoperation.uk/audio/track${trackId}.mp3`;
    setTrackPath(newTrackPath);

    const sound = new Howl({
      src: [newTrackPath],
      html5: true,
      onend: handleNextTrack
    });
    
    setCurrentSound(sound);
    sound.play();
  };

  const handleNextTrack = () => {
    const nextTrack = artistDataWP[Math.floor(Math.random() * artistDataWP.length)];
    setPlaying(nextTrack);
    handlePlay(nextTrack);
  };

  const handleStop = () => {

    currentSound.stop();
    
  };

  const stopAll = () => {
    Howler.unload();
  };

 

  


  // const getCategoryIDByName = async (categoryName) => {
  //   const response = await fetch('https://develop.dailyoperation.uk/streaming/wp-json/wp/v2/categories');
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch categories');
  //   }
  //   const categories = await response.json();
  //   const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
  //   return category ? category.id : null;
  // };

  
  // const fetchPostsByCategory = async (categoryID) => {
  //   const response = await fetch(`https://develop.dailyoperation.uk/streaming/wp-json/wp/v2/posts?categories=${categoryID}&_embed`, {
  //     method: 'GET',
  //   });
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   const posts = await response.json();
  //   return posts;
  // };
  

  


  
    
  return (<>
  
  <div>


   <div className='flex'>
<p className=' text-3xl pt-2 pl-4 font-semibold text-gray-400'>Focus Radio</p> 
  

<div className="ml-10 ">

   {/* Open the modal using document.getElementById('ID').showModal() method */}
   <button className="btn text-2xl bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaHome /></button>

</div>

   {/* Open the modal using document.getElementById('ID').showModal() method */}
   <button className="btn text-2xl bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_2').showModal()}><FaList fa-3/></button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Playlist</h3>
    <p className="py-4">Playlist feature coming soon.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

 {/* Open the modal using document.getElementById('ID').showModal() method */}
 <button className="btn text-2xl bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_3').showModal()}><CiSearch/></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Search</h3>
    <p className="py-4">Search feature coming soon.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

 {/* Open the modal using document.getElementById('ID').showModal() method */}
 <button className="btn text-2xl bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_4').showModal()}><CiCircleInfo /></button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Info</h3>
    <p className="py-4">More info coming soon</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>




</div>



<p className='pl-4   text-gray-400'>Lo-fi Boom Bap Focus Beats</p>







</div>
 {frontPage ?  <div className='flex justify-center text-white h-screen'><span className="loading text-white loading-ring loading-lg"></span> </div> : 
  

<div className="flex flex-wrap  md:columns-2 ">
<div className='hidden lg:block'>




<div class="flex h-screen flex-col justify-between  bg-slate-900">
  <div class="px-4 py-6">
    

    <ul class="mt-6 space-y-1">
      <li>
        <a
          href="#"
          class="block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-gray-700"
        ><div className='flex gap-2'><FaHome />Home</div>
          
        </a>
      </li>

      

      


      </ul>
<div>

  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaList />Playlist</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
      <div>

      
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_1').showModal()}><CiSearch />Search</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>



      
    

<div>    
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-slate-900 text-gray-500 border-slate-900" onClick={()=>document.getElementById('my_modal_1').showModal()}><CiCircleInfo />Info</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

</div>
  </div>

  <div className="sticky  inset-x-0 bottom-0 ">
    <a href="#" class="flex items-center gap-2 bg-slate-900 p-4 ">
      
      
      <div className='bg-slate-900'>
        <p class="text-xs">
          <strong className="block text-gray-400 font-medium">Focus Radio</strong>

          <span className="text-gray-400" > focusradio.uk </span>
        </p>
      </div>
    </a>
  </div>
</div>

</div>
<div className='mx-auto'>



{startedSelection && (
      <div className="flex h-44 m-6 w-72 md:w-96 bg-slate-500 lg:card-side shadow-xl rounded rounded-xl">
   
  <figure>
    <img className="rounded-lg w-44 h-44"
      src={playing._embedded?.['wp:featuredmedia']?.[0]?.source_url}
      alt="Album" />
  </figure>
  

  
  
  <div className="mx-auto  card-body bg-slate-500 rounded-xl">
  <h2 className="card-title">{playing.title.rendered}</h2>
    <p>{playing._embedded['wp:term'][0].map(term => (
                  term.taxonomy === 'category' ? term.name : ''
                )).filter(Boolean).join(', ')}</p>
                
    <div className="card-actions justify-end">
    

      <button onClick={handleStop} ><CiPause1 /></button>
    </div>
  </div>
</div>
)}
  
{!startedSelection && ( 
      <div className="flex h-44 m-6 w-72 md:w-96 bg-slate-500 lg:card-side shadow-xl rounded rounded-xl">
   
  <figure>
    <img className="rounded-lg w-44 h-44"
      src="stereo.jpg"
      alt="Album" />
  </figure>
  

  
  
  <div className=" pl-4 card-body bg-slate-500 rounded-xl">
  <h2 className="card-title">Select a track</h2>
  <p className='text-xs '>Click any track below to load</p>
    
                
    <div className="card-actions justify-end">
    
      {startedSelection &&(
      <button onClick={handleStop} >STOP</button>

    )}
    </div>
  </div>
</div>
)}


  {/* {artistDisplay && (
    <p className='text-3xl font-semibold text-gray-400'>{artistDisplay}</p>
    
  )} */}
    <div className="mx-6 pt-10 bg-slate-900 grid flex flex-wrap grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {artistDataWP.map(post => (
            <div key={post.id}>
            
            <Image onClick={() => handlePostClick(post)}  className='rounded-lg shadow-lg' src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url} alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text} width={150} height={150}/>
              <h2 className="text-slate-200">{post.title.rendered}</h2>
              <p onClick={() => setArtistDisplay(post._embedded['wp:term'][0].map(term => (
                  term.taxonomy === 'category' ? term.name : ''
                )).filter(Boolean).join(', ')) 
                } className="text-slate-200 font-base text-sm">
                {post._embedded['wp:term'][0].map(term => (
                  term.taxonomy === 'category' ? term.name : ''
                )).filter(Boolean).join(', ')}
              </p>
              
              <p>{post.id}</p>
              {/* <button onClick={() => setTrackPath("../audio/track" + post.id +".mp3")} className="text-slate-200">Play me</button> */}
              
              
              {/* <p className='text-slate-200'>{playing._embedded?.['wp:featuredmedia']?.[0]?.source_url}</p> */}
              
              
              
              
            </div>
          ))}
        </div>
      {/* <button className="text-slate-200" onClick={fetchPost16}>random</button>
      <button onClick={fetchPost16}>post16</button>
      <button onClick={handlePlay}>play</button>
      <button onClick={handleStop}>stop</button>
      <p className="text-slate-200">{trackPath}</p>
      <button onClick={stopAll}>STOP ALL</button> */}
      
          
      </div>   
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} Focusradio - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
      </div>
      

 }

  </>
  );
}
