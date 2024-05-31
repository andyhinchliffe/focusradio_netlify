import React from 'react'

const page = () => {
  return (<>
    <div className='bg-[#d3caab] h-screen'>
        <h1 className="pt-6 text-center text-xl font-bold">Focus Radio FAQ</h1>
     <div className="mx-auto pt-6 sm:w-2/3">
     <div className="collapse bg-base-200 m-2">
  <input type="radio" name="my-accordion-1"  /> 
  <div className="collapse-title text-xl   font-medium">
    What Is Focus Radio
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200 m-2">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    The Team
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200 m-2">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    Submit Your Music
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
     </div>
    </div>
    </>
  )
}

export default page