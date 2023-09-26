import React from "react";

function Card({ imageSrc, title, items }) {
  return (
    <div className="parent flex flex-col md:flex-row justify-center sm:h-90 sm:w-90 ml-10 mr-10 shadow-md rounded-xl bg-white pl-10 pr-10 pt-5 border border-red-500 mt-3">
      <div className="child1 md:mr-6">
        <img src={imageSrc} alt="" className="img h-80 w-full md:w-90" />
      </div>
      <div className="child2 h-90 w-full md:w-101 mt-6 md:mt-0">
        <ul className="list">
          <li>
            <h1 className="head text-2xl mb-8 text-green-500 font-bold">{title}</h1>
          </li>
          {items.map((item, index) => (
            <li key={index} className="list2 flex gap-7 mb-3 mt-3 md:mt-0 md:mr-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png"
                alt=""
                className="imgs w-8 h-8"
              />
              <h3 className="text-xl">{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card1({ imageSrc, title, items }) {
  return (
    <div className="parent flex flex-col md:flex-row justify-center h-90 w-90 ml-10 mr-10 shadow-md rounded-xl bg-white pl-10 pr-10 pt-5 border border-red-500 mt-3 mb-6">
      <div className="child2 h-90 w-full md:w-101 mt-6 md:mt-0 md:ml-6">
        <ul className="list">
          <li>
            <h1 className="head text-2xl mb-8 text-green-500 font-bold">{title}</h1>
          </li>
          {items.map((item, index) => (
            <li key={index} className="list2 flex gap-7 mb-3 mt-3 md:mt-0 md:mb-0 md:ml-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png"
                alt=""
                className="imgs w-8 h-8"
              />
              <h3 className="text-xl">{item}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="child1 md:ml-6 md:mr-0">
        <img src={imageSrc} alt="" className="img h-80 w-full md:w-90" />
      </div>
    </div>
  );
}

function Addition() {
  return (
    <div>
      <div className="gparent">
        <Card
          imageSrc="https://img.freepik.com/premium-vector/online-grocery-store-supermarket-order-daily-necessities-food-via-app-illustration_2175-8098.jpg"
          title="Best Quality Healthy And Fresh Grocery"
          items={[
            "Best services than others",
            "100% Organic & Natural products",
            "100% Returns and refunds",
            "User friendly Mobile app"
          ]}
        />
        <Card1
          imageSrc="https://img.lovepik.com/photo/45014/8286.jpg_wh860.jpg"
          title="Why we're Best Quality Grocery Shopper"
          items={[
            "Extra Fastest Delivery",
            "Track and Manage Orders",
            "Customer Support",
            "Competitive Price"
          ]}
        />
      </div>
    </div>
  );
}

export default Addition;

// import React from "react";
// // import "./Addition.css";

// function Card({ imageSrc, title, items }) {
//     return (
//       <div className="parent flex flex-col md:flex-row justify-center h-90 w-90 ml-10 mr-10 shadow-md rounded-xl bg-white pl-10 pr-10  pt-5 border border-red-500 mt-3">
//         <div className="child1 ">
//           <img src={imageSrc} alt="" className="img h-80 w-full md:w-90" />
//         </div>
//         <div className="child2 h-90 w-50 sm:w-101 ml-6 ">
//           <ul className="list">
//             <li>
//               <h1 className="head text-2xl mb-8  text-green-500 md:ml-3 font-bold">{title}</h1>
//             </li>
//             {items.map((item, index) => (
//               <li key={index} className="list2 flex gap-7 mb-3 mt-3 md:mt-0 md:mr-3">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png"
//                   alt=""
//                   className="imgs w-8 h-8 "
                  
//                 />
//                 <h3 className="text-xl">{item}</h3>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
  
//   function Card1({ imageSrc, title, items }) {
//     return (
//       <div className="parent flex flex-col md:flex-row justify-center h-90 w-90 ml-10 mr-10 shadow-md rounded-xl bg-white pl-10 pr-10  pt-5 border border-red-500 mt-3 mb-6">
        
//         <div className="child2 h-90 w-101 mr-6 ">
//           <ul className="list">
//             <li>
//               <h1 className="head text-2xl mb-8  text-green-500  font-bold">{title}</h1>
//             </li>
//             {items.map((item, index) => (
//               <li key={index} className="list2 flex gap-7 mb-3 mt-3 mr-3 md:mt-0 md:mr-3">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/2203/2203239.png"
//                   alt=""
//                   className="imgs w-8 h-8 "
                  
//                 />
//                 <h3 className="text-xl ">{item}</h3>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="child1  ">
//           <img src={imageSrc} alt="" className="img h-80 w-90 " />
//         </div>
//       </div>
//     );
//   }

// function Addition() {
//   return (
//     <div>
//       <div className="gparent">
//         <Card
//           imageSrc="https://img.freepik.com/premium-vector/online-grocery-store-supermarket-order-daily-necessities-food-via-app-illustration_2175-8098.jpg"
//           title="Best Quality Healthy And Fresh Grocery"
//           items={[
//             "Best services than others",
//             "100% Organic & Natural products",
//             "100% Returns and refunds",
//             "User friendly Mobile app"
//           ]}
//         />
//         <Card1
//           imageSrc="https://img.lovepik.com/photo/45014/8286.jpg_wh860.jpg"
//           title="Why we're Best Quality Grocery Shopper"
//           items={[
//             "Extra Fastest Delivery",
//             "Track and Manage Orders",
//             "Customer Support",
//             "Competative Price"
//           ]}
//         />
//       </div>
//     </div>
//   );
// }

// export default Addition;
