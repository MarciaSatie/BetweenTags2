import CardSingleStructure from "./CardSingleStructure"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CardsGroup(props:any) {

  const content = [...props.contentList];
  const groupLogo = content[0]?.logo;


  return (
    <>

      <div className= "relative z-0 shadow-lg p-4 mt-4 mb-4 rounded-3xl overflow-auto max-h-[350px] text-left ">
        <div className="bg-pink-500 mt-9 flex pl-2 p-2 rounded-md">
          {groupLogo}
          <h1 className="font-mono font-bold text-xl pl-4 text-white ">{props.title}</h1>
        </div>
        
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

          {content.map((item) => (
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
          ))}

          </div>
      
  
      ...
    </Swiper>
        </div>

    </>

  )
}
