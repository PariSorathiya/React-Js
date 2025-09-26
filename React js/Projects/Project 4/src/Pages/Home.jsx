import React from 'react'
import Cards from '../District By Zomato/Cards'

export default function Home() {

    let arr = [
        {
            image : "/Image/Card1.jpg",
            time : "Fri, 26 Sep - Sun, 28 Sep, 7:30 PM",
            name : "Dandia Night | Float by Duty Free",
            title : "Float by Duty Free, Noida",
            price : "₹ 249 onewards"
        },
           {
            time : "22 Nov - 23 Nov, 3 PM",
            name : "Rolling Loud India | Hip-Hop Festival | Karan Aujla, Central Cee",
            title : "Loud Park, Kharghar, mUmbai",
            price : "₹ 7000 onewards"
        },
         {
            time : "Sat, 11 Oct, 12:00 PM",
            name : "Project Tyohar",
            title : "Spara Boutique Resort, Delhi/NCR",
            price : "₹ 1050 onewards"
        },
         {
            time : "Sat, 11 Oct, 12:00 PM",
            name : "Project Tyohar",
            title : "Spara Boutique Resort, Delhi/NCR",
            price : "₹ 1050 onewards"
        },
      ]
  return (
    <div>
      <>
      <div className='flex justify-around'>
        {
            arr.map((e,i)=> {
                return <Cards obj={e} />;
            })
        }

      </div>
      </>
    </div>
  )
}
