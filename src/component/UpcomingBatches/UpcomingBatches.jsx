import React from 'react'

function UpcomingBatches() {
  return (
    <div className={`capitalize px-[9%] py-[5%]  overflow-hidden `}>
      <div className="space-y-5 ">
        <h2 className="text-3xl  text-zinc-800">
          Upcoming batches
        </h2>

        <div>
            <p className='text-lg text-zinc-800 pb-3'> select a branch </p>
            <select name="branch" id="" className='border text-zinc-600 px-3 py-2 w-60 rounded-md ms-6 focus:ring-[2.5px] outline-none ring-blue-200 '>
                <option value="all"> all </option>
                <option value="all"> Noida sector 16 </option>
                <option value="all"> sector 63, noida </option>
                <option value="all"> pitampura </option>
                <option value="all"> gurugram </option>
                <option value="all"> ghaziabad </option>
                <option value="all"> south ex. </option>
            </select>
        </div>
    </div>
    </div>
  )
}

export default UpcomingBatches