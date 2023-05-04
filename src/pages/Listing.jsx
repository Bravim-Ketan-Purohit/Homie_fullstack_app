import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase'
import Spinner from '../components/Spinner'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import {BsFillShareFill} from 'react-icons/bs'
import { FaMapMarkerAlt, FaBed, FaBath, FaParking, FaChair } from "react-icons/fa";

const Listing = () => {
const params = useParams();  
const [listing,setListing] = useState(null)
const [loading,setLoading]= useState(true)
SwiperCore.use([Autoplay, Navigation, Pagination]);
const [shareLinkCopied,setShareLinkCopied] = useState(false);
useEffect(() => {
  async function fetchListing() {
    const docRef = doc(db, "listings", params.listingID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setListing(docSnap.data());
      setLoading(false);
      

    }
  }
  fetchListing();
}, [params.listingID ]);
if(loading){
  return <Spinner/>
}



    return (
      <main>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 3000 }}
        >
          {listing.imgUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full overflow-hidden h-[300px]"
                style={{
                  background: `url(${listing.imgUrls[index]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="fixed top-[13%] right-[3%] z-50 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setShareLinkCopied(true);
            setTimeout(() => {
              setShareLinkCopied(false);
            }, 2000);
          }}
        >
          <BsFillShareFill className="text-xl text-slate-800" />
        </div>
        {shareLinkCopied && (
          <p className="fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-green-200 z-50 p-2  ">
            link copied !
          </p>
        )}

        <div className=" m-4 flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 rounded-lg shadow-lg bg-white lg:space-x-5">
          <div className="w-full h-[200px] lg-[400px]">
            <p className="">
              {listing.name} - $
              {listing.offer
                ? listing.discountedPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {listing.type === "rent" ? "/month" : ""}
            </p>
            <p className="flex items-center mt-6 mb-3 font-semibold ">
              <FaMapMarkerAlt className="text-green-700 mr-1" />
              {listing.address}
            </p>
            <div className="flex justify-start items-center space-x-4 w-[75%] ">
              <p className="bg-red-800 w-full max-w-[200px] rounded-md p-1 text-white text-center font-semibold shadow-md">
                {listing.type === "rent" ? "Rent" : "Sale"}
              </p>
              {listing.offer && (
                <p className="w-full max-w-[200px] bg-green-800 text-white text-center font-semibold shadow-md p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountedPrice} Discount
                </p>
              )}
            </div>
            <p className="mt-3 mb-3">
              <span className="font-semibold ">Description </span>
              {listing.description}
            </p>
            <ul className="flex items-center space-x-2 sm:space-x-10 text-sm font-semibold">
              <li className="flex items-center whitespace-nowrap">
                <FaBed className="text-lg mr-1" />
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `1 Bed`}
              </li>

              <li className="flex items-center whitespace-nowrap">
                <FaBath className="text-lg mr-1" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : `1 Bath`}
              </li>

              <li className="flex items-center whitespace-nowrap">
                <FaParking className="text-lg mr-1" />
                {listing.parking 
                  ? `Parking spot`
                  : `No Parking`}
              </li>

              <li className="flex items-center whitespace-nowrap">
                <FaChair className="text-lg mr-1" />
                {listing.furnished 
                  ? `Furnished`
                  : `Not Furnished`}
              </li>
            </ul>
          </div>
          <div className="bg-blue-300 w-full h-[200px] lg-[400px] z-50 overflow-x-hidden"></div>
        </div>
      </main>
    );
}

export default Listing