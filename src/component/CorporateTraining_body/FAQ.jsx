import React, { useState } from "react";
import FAQ_Data from "../../data/FAQ_Data";
import { FaChevronDown } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function FAQ() {

    const [singleSelect , setSingleSelect] = useState(null);

  function handleSingleSelect(currentId){
    setSingleSelect(singleSelect === currentId ? null : currentId);
  }
  return (
    <div className=" space-y-12 px-5 pb-16 md:px-[8%] pt-[5%] md:py-[5%] md:pb-[7%] ">
      <div className="text-center">
        <h2 className=" border-b-4 border-orange-400 inline  pb-1 text-3xl text-zinc-900 font-semibold capitalize ">
          FAQ's
        </h2>
      </div>
      <div className=" space-y-3">
      {
          FAQ_Data.map(data => <>
            <div onClick={()=>handleSingleSelect(data.id)} className="accordian border border-zinc-300 pt-3  tracking-wide rounded-md  ">
              <div className="ques text-blue-800 font-semibold px-3 pb-2.5 flex items-center justify-between ">
                {data.ques}
                <div className="text-sm  text-blue-700 ">
                    {
                        singleSelect == data.id ? <IoChevronUp /> : <IoChevronDown />
                    }
                </div>
              </div>
              
              {singleSelect === data.id && <div className="ans text-orange-600 px-6 pt-2.5 pb-3  border-t "> {data.ans} </div>
              }
            </div>
          </>)
        }
      </div>
    </div>
  );
}

export default FAQ;
