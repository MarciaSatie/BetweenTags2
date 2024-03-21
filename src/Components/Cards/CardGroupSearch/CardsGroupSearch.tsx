import CardSingleStructure from "../CardSingleStructure"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from"./SearchBar"
import { useState,useEffect } from "react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CardsGroupSearch(props:any) {

  const content = [...props.contentList];

  const [results,setResults] = useState("none");
  let search = results;
  console.log(search);

  function childCallback (call:any){
    setResults(call);}
    console.log('setResult is:',setResults);

useEffect (()=>{
  content.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log('content is:', content);

},[content,search]);

  return (
    <>
        <SearchBar callback={childCallback}/>
        <div className= "relative z-0 shadow-lg p-4 mt-4 mb-4 rounded-3xl overflow-auto max-h-[350px] text-left ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
    >

          <div >

          {content.map((item) => {
          let str = item.title;
          let strToLower = str.toLowerCase().includes(search.toLowerCase());
          
          if(strToLower){
          return(
            <SwiperSlide>
              <div className="max-h-60 min-w-40 overflow-auto">
            <CardSingleStructure
              logo={item.logo}
              key={item.key}
              title={item.title}
              cardDate={item.date}
              text={item.cardContent}
            />
            </div>
            </SwiperSlide>
            );}else {return null;}
          })}

          </div>
      
  
      ...
    </Swiper>
        </div>

    </>

  )
}
