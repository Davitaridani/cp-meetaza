"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { assets_network, assets_home } from '../../asstes/images'
import Contact from '@/components/Contact'

const NetworkPage = () => {

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <>
         <section className="pt-32">
            <div className="container md:overflow-visible overflow-hidden ">
               <div className="text-center lg:w-[800px] w-auto mx-auto">
                  <h1 className="mb-5 md:mb-9">Cloud Platform</h1>
                  <p className="text_paragraf text-center">A cloud platform, often referred to as a cloud computing platform, is a set of infrastructure, services, and tools provided over the internet to enable users to build, deploy, and manage applications and services. These platforms are hosted and maintained by cloud service providers</p>
               </div>
            </div>
         </section>

         <section className='md:pt-24 pt-16 relative'>
            <div className="container relative overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <Image src={assets_network.cover_vps} alt='Cloud Computing' className='w-full md:h-auto h-[210px]  mb-12 md:mb-0' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" />
                  </div>
                  <div className="basis-1/2">
                     <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='pt-4 md:mb-3 mb-4 lg:text-[40px] text-3xl'>VPS / Cloud Computing</h1>
                        <p className='text_paragraf md:mb-[37px] mb-7'>Cloud computing is on-demand access, via the internet, to computing resources—applications, servers (physical servers and virtual servers),  data storage, development tools, networking capabilities, and more—hosted at a remote data center managed by a cloud services</p>
                     </div>
                     <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='md:text-[40px] text-3xl md:mb-5 mb-4'>Virtual Private Network (VPN)</h1>
                        <p className='text_paragraf'>A virtual private network, or VPN, is an encrypted connection over the Internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorized people from eavesdropping on the traffic and allows the user to conduct work remotely.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:relative">
               <div className="md:h-[260px] h-[240px] object-cover md:w-[30%] w-[40%] bg-orange absolute -z-10 md:-top-60 top-[49px]" />
            </div>
         </section>

         <section className='pt-5'>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='md:text-[40px] text-3xl md:pt-12 pt-8 mb-3 text-end'>Content Delivery Network (CDN)</h1>
                        <p className='text_paragraf md:mb-4 mb-8'>A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.</p>
                     </div>
                     <div className='md:mb-0 mb-8' data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='md:text-[40px] text-3xl mb-3 text-end'>Network Consultants</h1>
                        <p className='text_paragraf'>Network consultants are technological professionals who assist corporations and other organizations with designing, implementing, and maintaining efficient information technology networks. The design of the networks may include a wide range of recommendations regarding computer telephony equipment, service providers, software applications, and other components that make up a total Information Technology or IT infrastructure.</p>
                     </div>
                  </div>
                  <div className="basis-1/2">
                     <Image src={assets_network.cover_mob} alt='Content Delivery Network' className='w-full' data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300" />
                  </div>
               </div>
            </div>
         </section>

         <section className='md:pt-8 pt-12'>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <Image src={assets_network.cover_security} alt='Network Security' className='w-full' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" />
                  </div>
                  <div className="basis-1/2">
                     <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='md:text-[40px] text-3xl md:pt-6 pt-8 mb-3'>Network Security</h1>
                        <p className='text_paragraf md:mb-9 mb-4'>Network security is the protection of the underlying networking infrastructure from unauthorized access, misuse, or theft. It involves creating a secure infrastructure for devices, applications, users, and applications to work in a secure manner.</p>
                     </div>
                     <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='md:text-4xl text-3xl mb-2'>Co-Location</h1>
                        <p className='text_paragraf'>Co-location refers to the way IT equipment and resources are located or installed. This usually refers to the networking hardware resources owned by an organization, such as Web or database servers, which are located outside the vicinity of the organization's premises and "co-located" with another organization's hardware, usually an ISP or a service provider.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='pt-12 md:mb-14'>
            <div className="container">
               <div className="items_row">
                  <div className="basis-1/2">
                     <Image src={assets_network.shape_2} alt='Data Center' className='mb-6 md:mb-0' />
                  </div>
                  <div className="basis-1/2">
                     <div className="md:flex justify-between gap-4">
                        <div className='md:mb-14 mb-6 lg:min-w-fit w-auto '>
                           <h1 className='lg:text-[96px] text-3xl mb-2 md:mb-5'>Data Center</h1>
                           <div className="md:block flex justify-between">
                              <p className='md:text-lg text-base md:pl-3 md:mb-0 mb-8'>Dedicated Server <br className='md:hidden block' /> - Cloud Hosting <br className='md:hidden block' />  - Domain <br className='md:hidden block' /> - SSL</p>
                              <div className="md:pl-3 ">
                                 <p className='font-bold md:my-1 md:text-xl'>Location</p>
                                 <ul className='md:pl-1'>
                                    <li className='md:text-lg text-base'>Cyber 1 Building - Jakarta</li>
                                    <li className='md:text-lg text-base'>Nue Centrix Telkom - Jogja</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className='md:static relative md:block hidden'>
                           <Image src={assets_network.shape_3} alt='' className='md:static absolute top-10' />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute top-[-42px]  md:pb-0 pb-12">
                     <div className="items_center gap-24 ">
                        <div className="flex items-center gap-4 ">
                           <div className="bg-orange h-20 w-20" />
                           <p className='font-semibold md:text-lg text-base'>Main Power <br />
                              for Network <br />
                              Infrastructure</p>
                        </div>
                        <ul className='list-disc marker:text-orange md:ms-0 ms-5 md:mt-0 mt-[85px] space-y-1'>
                           <li className='text_paragraf'>Network devices (Switch, Router, Access point, etc)</li>
                           <li className='text_paragraf'>Network installation services.</li>
                           <li className='text_paragraf'>Backup / DRC (Disaster Recovery Center )</li>
                        </ul>
                     </div>
                     <div className="bg-orange border-b-4 border-orange lg:w-[105%] w-auto md:mt-[12px] mt-2 md:mb-1" data-aos-duration="2000" data-aos-offset="200" data-aos="fade-right" data-aos-easing="linear" />
                  </div>
               </div>
            </div>
         </section>

         <section className='md:pt-2 pt-12'>
            <div className="container ">
               <div className="items_row">
                  <div className="basis-2/5">
                     <div className="flex items-center md:gap-8 gap-5 md:mb-0 mb-36">
                        <h1 className='lg:text-[95px] text-5xl mb-4 md:pt-0 pt-3'>R&D</h1>
                        <p className='font-semibold lg:text-xl md:mb-4 '>Research and <br /> Development</p>
                     </div>
                     <ul className='md:space-y-0 md:pt-0 md:pb-0 pt-3 pb-2 text-base lg:text-xl'>
                        <li>IOT Device</li>
                        <li>IOT Platform</li>
                        <li>GPS Tracking</li>
                     </ul>
                     <div className='border-b-4 border-orange md:w-52 w-1/2 md:mt-1 md:mb-5 mb-4' data-aos-duration="2000" data-aos-offset="200" data-aos="fade-right" data-aos-easing="linear" />
                     <div>
                        <Image src={assets_home.logo_meetaza} alt='Meetaza' className='md:w-20 w-24 md:h-8 h-auto' />
                     </div>
                  </div>

                  <div className="basis-3/5 relative">
                     <div className="flex flex-col-reverse md:w-3/5">
                        <div className="md:pt-8 pt-14">
                           <h1 className='md:text-5xl md:text-center md:mb-6 mb-4'>Mail Service</h1>
                           <p className='text_paragraf'>An email service is a tools to send bulk emails and implement email marketing. Email services offer user-friendly features to manage mailing lists, email design, and metrics to monitor your success.</p>
                        </div>
                        <div className="absolute right-0 md:-top-8 -top-5 md:block flex justify-end">
                           <Image src={assets_network.shape_1} alt='' className='md:w-[280px] md:h-[280px] w-[110px] h-[110px]' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='md:pt-20 pt-14'>
            <Contact />
         </section>
      </>
   )
}

export default NetworkPage