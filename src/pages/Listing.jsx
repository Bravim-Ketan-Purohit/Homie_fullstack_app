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
            setShareLinkCopied(true)
            setTimeout(()=>{
              setShareLinkCopied(false)
            },2000)
          }}
        >
          <BsFillShareFill className="text-xl text-slate-800" />
        </div>
        {shareLinkCopied && (<p className='fixed top-[23%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-green-200 z-50 p-2  '>link copied !</p>)}
      </main>
    );
}

export default Listing