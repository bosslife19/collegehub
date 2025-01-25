 
import Goods from '../../../../assets/good'

const Sub = () => {
  
  const subscribe =[
    { 
      title:"Free",
      price:"$0",
      subs:[
      { para1:"Voice messages anywhere",},
      {para2:"Voice messages anywhere"},
      {para3:"Voice messages anywhere"},
      ],
      btns:"Start now"
    },
    { 
      title:"Platinum",
      price:"$5.99",
     subs:[
      { para1:"Voice messages anywhere",},
      {para2:"Voice messages anywhere"},
      {para3:"Voice messages anywhere"},
     ],
      btns:"Buy now"
     },
    { 
      title:"Pro",
      price:"$0",
      subs:[
        { para1:"Voice messages anywhere",},
        {para2:"Voice messages anywhere"},
        {para3:"Voice messages anywhere"},
      ],
       btns:"Buy now"
    },
    { 
      title:"Platinum",
      price:"$5.99",
     subs:[
      { para1:"Voice messages anywhere",},
      {para2:"Voice messages anywhere"},
      {para3:"Voice messages anywhere"},
     ],
     btns:"Buy now"
     },
  ]

  return (
    <div className="px-4 md:px-[40px] py-8 bg-[#91447B]  font-poppins">
      <h3 className='text-center pb-[30px] md:text-[32px] font-inter text-[#fff] font-[600]'>Subscriptions</h3>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {subscribe.map((items, index)=>(
        <div key={index} className='flex w-full  bg-[#F4E2EF] justify-center border px-[25px] pt-[13px] pb-[0.3%] rounded-[25px] flex-col '>
           <h4 className='text-[18px] md:text-[20px] md:leading-[30px] font-[700]'>{items.title}</h4>
            <div className='flex'>
            <span className='mt-[0px] ml-[5px] text-[16px] md:text-[26px] leading-[30px] font-[700]'>{items.price}
            </span>
            <p className='md:mt-[10px] font-[400] text-[14px] md:text-[20px] leading-[36px]'>/mo</p>
            </div>
           {items.subs.length > 0 && (
             <ul className="pb-[10px] md:pb-[20px] gap-4 flex flex-col text-[#91447B] pt-[30px] md:pt-[25%] ">
             {items.subs.map((sub, linkIndex) => (
               <li key={linkIndex} className=' flex gap-[10px] font-[600] leading-[23.7px] text-[14px] md:text-[18px]'>
                  <Goods/>
                   {sub.para1}
                   {sub.para2}
                   {sub.para3}
                   
                 
                </li>
             ))}
           </ul>
          )}
            <button className='py-[8px] md:py-[12px] my-[15px] md:my-[30px] rounded-[4px] bg-[#C360A7] md:text-[18px] leading-[23.7px] font-[700] tracking-[1px]'>
                {items.btns}    
             </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Sub
