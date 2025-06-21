// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // const foodImages = [
// //   {
// //     src: "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     name: "Burger",
// //   },
// //   {
// //     src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     name: "Pizza",
// //   },
// //   {
// //     src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     name: "Noodles",
// //   },
// //   {
// //     src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// //     name: "Pasta",
// //   },
// // ];

// // const ImageSlider = () => {
// //   const handleClick = (name) => {
// //     alert(`You clicked on ${name}`);
// //   };

// //   return (
// //     <Swiper
// //       modules={[Navigation, Pagination, Autoplay]}
// //       spaceBetween={20}
// //       slidesPerView={3}
// //       navigation
// //       autoplay={{ delay: 2000 }}
// //       pagination={{ clickable: true }}
// //       loop
// //     >
// //       {foodImages.map((item, index) => (
// //         <SwiperSlide key={index}>
// //           <img
// //             src={item.src}
// //             alt={item.name}
// //             className="rounded-xl cursor-pointer"
// //             onClick={() => handleClick(item.name)}
// //             style={{
// //               width: "300px", // Adjust as needed
// //               height: "250px", // Adjust as needed
// //               objectFit: "cover", // Ensures image fills the container without distortion
// //               borderRadius: "10px", // Optional rounded corners
// //             }}
// //           />
// //         </SwiperSlide>
// //       ))}
// //     </Swiper>
// //   );
// // };

// // export default ImageSlider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const foodImages = [
//   {
//     src: "https://freepngimg.com/thumb/food/9-2-food-png-file.png",
//     name: "Burger",
//   },
//   {
//     src: "https://tse1.mm.bing.net/th?id=OIP.M4dbGsGi6b1Fb8PuzJYXsgHaEr&pid=Api&P=0&h=180",
//     name: "Pizza",
//   },
//   {
//     src: "https://www.pngarts.com/files/10/Spicy-Food-Items-PNG-Photo-316x279.png",
//     name: "Noodles",
//   },
//   {
//     src: "https://tse4.mm.bing.net/th?id=OIP.TFVUU1QKBul0hdi36psuCgHaHh&pid=Api&P=0&h=180",
//     name: "Pasta",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.Q_BLR3y2PaKFyHNpuU2KVgHaEO&pid=Api&P=0&h=180",
//     name: "Salad",
//   },
//   {
//     src: "https://static.vecteezy.com/system/resources/previews/024/724/510/non_2x/hot-and-crispy-fried-chicken-isolated-on-transparent-background-fresh-pieces-of-crispy-fried-chicken-fast-food-generative-ai-png.png",
//     name: "Sushi",
//   },
//   {
//     src: "https://wallpapers.com/images/hd/classic-hamand-cheese-sandwich-xeh4lravzdwarxjq.png",
//     name: "Salad",
//   },
//   {
//     src: "https://www.pngarts.com/files/10/Spicy-Food-Items-Free-PNG-Image.png",
//     name: "Salad",
//   },
//   {
//     src: "https://www.nicepng.com/png/full/20-205440_shree-annapurnaa-veg-world-hotel-food-items-png.png",
//     name: "Salad",
//   },
//   {
//     src: "https://www.pngarts.com/files/10/Food-Items-PNG-Background-Image.png",
//     name: "Salad",
//   }
// ];

// const ImageSlider = () => {
//   const handleClick = (name) => {
//     alert(`You clicked on ${name}`);
//   };

//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={20}
//       slidesPerView={5} // Show 5 items
//       navigation
//       pagination={{ clickable: true }}
//       loop={false} // Disable looping
//     >
//       {foodImages.map((item, index) => (
//         <SwiperSlide key={index}>
//         <div>
//           <img
//             src={item.src}
//             alt={item.name}
//             className="rounded-xl cursor-pointer"
//             onClick={() => handleClick(item.name)}
//             style={{
//               width: "100%", // Use 100% to fill the slide
//               // height: "250px", // Adjust as needed
//               objectFit: "cover", // Ensures image fills the container without distortion
//               borderRadius: "10px", // Optional rounded corners
//             }}
//           />
//           <h6>{item.name}</h6>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ImageSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const foodImages = [
  {
    src: "https://freepngimg.com/thumb/food/9-2-food-png-file.png",
    name: "Special omlet",
  },
  {
    src: "https://tse1.mm.bing.net/th?id=OIP.M4dbGsGi6b1Fb8PuzJYXsgHaEr&pid=Api&P=0&h=180",
    name: "Veg thali",
  },
  {
    src: "https://www.pngarts.com/files/10/Spicy-Food-Items-PNG-Photo-316x279.png",
    name: "Burger",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.TFVUU1QKBul0hdi36psuCgHaHh&pid=Api&P=0&h=180",
    name: "Biryani",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.Q_BLR3y2PaKFyHNpuU2KVgHaEO&pid=Api&P=0&h=180",
    name: "Pizza",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/024/724/510/non_2x/hot-and-crispy-fried-chicken-isolated-on-transparent-background-fresh-pieces-of-crispy-fried-chicken-fast-food-generative-ai-png.png",
    name: "Fried Chicken",
  },
  {
    src: "https://wallpapers.com/images/hd/classic-hamand-cheese-sandwich-xeh4lravzdwarxjq.png",
    name: "Sandwich",
  },
  {
    src: "https://www.pngarts.com/files/10/Spicy-Food-Items-Free-PNG-Image.png",
    name: "Non-veg thali",
  },
  {
    src: "https://www.nicepng.com/png/full/20-205440_shree-annapurnaa-veg-world-hotel-food-items-png.png",
    name: "South Indian",
  },
  {
    src: "https://www.pngarts.com/files/10/Food-Items-PNG-Background-Image.png",
    name: "Samosa",
  }
];

const ImageSlider = () => {
  // const handleClick = (name) => {
  //   alert(`You clicked on ${name}`);
  // };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={5} // Show 5 items
      navigation
      // pagination={{ clickable: true }}
      loop={false} // Disable looping
    >
      {foodImages.map((item, index) => (
        <SwiperSlide key={index}>
          <div style={{ textAlign: "center" }}>
            <img
              src={item.src}
              alt={item.name}
              className="rounded-xl cursor-pointer"
              style={{
                width: "150px", // Fixed width for square shape
                height: "150px", // Fixed height for square shape
                objectFit: "contain", // Ensures the entire image is visible
                borderRadius: "10px", // Optional rounded corners
              }}
            />
            <h6 style={{ marginTop: "10px", fontWeight: "bold" }}>{item.name}</h6>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
