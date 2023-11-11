// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleCarouselItem from "./SingleCarouselItem";

// import SingleCarouselItem from "../CarouselCard/SingleCarouselItem";

export default ({ data }) => {
  console.log("Data from Swiper.jsx: ", data);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //   spaceBetween={50}
      //   slidesPerView={3}
      navigation
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {" "}
      {data &&
        data.map((item) => {
          console.log("inside the map!!!; ", item);
          const {
            id: movieId,
            poster_path: poster,
            title: title,
            release_date: date,
            vote_average: score,
            original_language: language,
          } = item;
          return (
            <>
              <SwiperSlide key={item.id}>
                {/* <div className="card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + item.poster_path
                    }
                    alt="image"
                    className="card-image"
                  />
                </div> */}
                <SingleCarouselItem data={item} />
              </SwiperSlide>

              {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
            </>
          );
        })}
      ...
    </Swiper>
  );
};
