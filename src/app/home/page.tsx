"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { assets_home } from '../../asstes/images'
import Btn from '@/components/Btn'
import { dataDevNetwork, imgClient } from "../../constants/index"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/free-mode';
import Contact from '@/components/Contact'
import BgCover from '@/components/BgCover'

const HomePage = () => {

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <section className='md:pt-36 pt-32'>
            <div className="container md:overflow-clip overflow-hidden">
               <div className="items_row">
                  <div className="basis-1/2 items_center">
                     <div className="">
                        <div className="bg-[#EBD3B3] w-fit h-20 mb-6">
                           <Image alt='' src={assets_home.icon_shape_2} className='w-10' />
                        </div>
                        <h1 className='font-semibold md:text-[64px] text-3xl md:mb-8 mb-5 md:tracking-wide tracking-tight text-[#1E1E1E] leading-tight md:leading-tight'>We're digital <br /> products creators.</h1>
                        <Btn title='Visit' url="/" />
                     </div>
                  </div>
                  <div className="basis-1/2">
                     <div className="items_center justify-end md:mt-0 mt-12">
                        <Image alt='herro' src={assets_home.hero} data-aos="fade-left" data-aos-duration="2000" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='md:pt-[90px] pt-16'>
            <BgCover styles='bg-orange md:h-[540px] h-[240px] md:w-[32%] w-[43%] absolute md:top-1.5 top-[17.5px] -z-10' />
            <div className="container md:overflow-clip overflow-hidden">
               <div className="items_row gap-5 py-8">
                  <div className="basis-1/2">
                     <Image alt='Software Development' src={assets_home.cover_software} className='rounded-[35px] w-full md:h-auto h-[210px] object-cover' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300" />
                  </div>
                  <div className="basis-1/2 md:mt-3 mt-8">
                     <h1 className='md:text-5xl text-3xl font-semibold tracking-tighter mb-[16px] md:mb-5'>Software Development</h1>
                     <p className='text_paragraf md:mb-6 mb-5'>Software development is the process of designing, coding, testing, and maintaining software systems or applications. It involves a series of steps and activities aimed at creating high-quality software that meets specific user or business requirements.</p>
                     <Btn title='Visit' url="/software" />
                  </div>
               </div>
            </div>
         </section>

         <section className='pt-8'>
            <div className="container md:overflow-clip overflow-hidden">
               <div className="items_row">
                  <div className="basis-2/5">
                     <Image className='md:mb-0 mb-8 md:w-auto md:h-auto h-60 w-fit' src={assets_home.icon_shape} alt='Development Network'
                        data-aos="fade-down-right" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-offset="300" />
                  </div>
                  <div className="basis-3/5 overflow-hidden">
                     <div className="items_center justify-end mb-14">
                        <h1 className='md:text-5xl text-3xl font-bold md:w-[600px] w-auto tracking-normal lg:leading-tight md:mb-0 mb-6' data-aos="fade-right" data-aos-duration="2000"
                        >DevOps Meetaza Experience</h1>
                        <div className="bg-orange text-white md:w-[165px] w-[155px] md:ms-0 ms-auto pe-6 pt-5 pb-4 ">
                           <h1 className='text-end md:text-8xl text-7xl mb-0 leading-[.8]'>5</h1>
                           <p className='capitalize text-end font-semibold'>year<span className='block font-light leading-[.9]'>experience</span></p>
                        </div>
                     </div>

                     <div className="flex flex-wrap md:ms-10 md:gap-0">
                        {dataDevNetwork && dataDevNetwork.map((item, index) => (
                           <div className="basis-1/2" key={index}>
                              <div className="items_center justify-end gap-4 mb-4 md:px-0 px-2" data-aos={item.dataAos} data-aos-duration="2000" data-aos-delay={index * 100}>
                                 <Image alt='' src={item.img} className='mb-3 md:mb-0 md:w-auto w-14 md:mx-0 mx-auto' />
                                 <p className='md:w-2/4 md:text-start text-center w-auto font-semibold lg:text-lg text-sm text-black leading-snug'>{item.title}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="md:pt-14 pt-10 relative">
            <BgCover styles='bg-orange md:block hidden md:h-[540px] md:w-[32%] h-[240px] w-[43%] end-0 absolute md:top-1.5 -z-10 top-96' />
            <div className="container  md:overflow-clip overflow-hidden">
               <div className="items_row gap-5 md:py-8">
                  <div className="basis-1/2 md:mb-0 mb-20">
                     <h1 className='text-end tracking-tighter md:text-5xl text-3xl font-semibold md:mb-[30px] mb-4 md:pt-4'>Cloud Platform</h1>
                     <p className='text_paragraf md:mb-7 mb-5 font-normal'>A cloud platform, often referred to as a cloud computing platform, is a set of infrastructure, services, and tools provided over the internet to enable users to build, deploy, and manage applications and services. These platforms are hosted and maintained by cloud service providers.</p>
                     <Btn title='Visit' url='/network' />
                  </div>
                  <div className="basis-1/2">
                     <div className="">
                        <Image alt='Network Infrastructure' src={assets_home.cover_network} className='rounded-2xl w-full md:h-auto h-[210px] object-cover' data-aos="fade-left" data-aos-duration="2500" data-aos-offset="300" />
                     </div>
                  </div>
               </div>
            </div>
            <BgCover styles='bg-orange md:hidden block md:h-[530px] md:w-[32%] h-[240px] w-[43%] end-0 absolute md:top-2.5 -z-10 -bottom-[15px]' />
         </section>

         <section className='md:pt-6 pt-16' id='client'>
            <div className="container">
               <h1 className='md:text-5xl text-4xl font-semibold'>Client</h1>
               <Swiper className="mySwiper"
                  freeMode={true}
                  modules={[FreeMode]}
                  breakpoints={{
                     768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                     },
                     1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                     },
                  }}>
                  {imgClient && imgClient.map((item, index) => (
                     <SwiperSlide className='' key={index}>
                        <div className="flex items-end">
                           <Image alt='logo client' src={item.imgClient} className='lg:h-72 h-52 object-contain' />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>

         <section className='pt-14' id='contact'>
            <Contact />
         </section>
      </>
   )
}

export default HomePage