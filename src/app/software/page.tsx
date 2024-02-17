"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { assets_software } from '../../asstes/images'
import Contact from '@/components/Contact'

const SotwarePage = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <>
         <section className="pt-28">
            <div className="container md:overflow-visible overflow-hidden">
               <div className="text-center lg:w-[800px] w-auto mx-auto">
                  <h1 className="md:mb-7 mb-5">Software Development</h1>
                  <p className="text_paragraf text-center">Software development is the process of designing, coding, testing, and maintaining software systems or applications. It involves a series of steps and activities aimed at creating high-quality software that meets specific user or business requirements. </p>
               </div>
            </div>
         </section>

         <section className='md:pt-24 pt-16'>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <Image src={assets_software.cover_web} alt='' className='mx-auto md:mb-0 mb-8' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" />
                  </div>
                  <div className="basis-1/2">
                     <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='mb-5 tracking-tighter mt-0 md:mt-3'>Web Application</h1>
                        <p className='text_paragraf mb-5'>Web Application (web apps) is an application program that is stored on a remote server and delivered over the internet through a browser interface. Web services are web apps by definition and many, although not all, websites contain web apps.</p>
                     </div>
                     <p className='text_paragraf' data-aos="fade-left" data-aos-duration="2000"
                        data-aos-delay="150" data-aos-offset="300">Developers design web applications for a wide variety of uses and users, from an organization to an individual for numerous reasons. Commonly used web applications can include webmail, online calculators or e-commerce shops. While users can only access some web apps by a specific browser, most are available no matter the browser.</p>
                  </div>
               </div>
            </div>
         </section>

         <section className='md:pt-24 pt-16'>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2 md:mb-0 mb-8">
                     <div className="" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='text-end md:pt-8 md:mb-7 mb-5 tracking-tighter'>Mobile Application</h1>
                        <p className='text_paragraf mb-4 md:mb-6'>
                           Mobile Application (also called a mobile app) is a type of application designed to run on a mobile device, which can be a smartphone or tablet computer. Even if apps are usually small software units with limited function, they still manage to provide users with quality services and experiences.
                        </p>
                     </div>
                     <p className='text_paragraf' data-aos="fade-right" data-aos-duration="2000"
                        data-aos-delay="150" data-aos-offset="300">Contrary to applications designed for desktop computers, mobile applications move away from integrated software systems. Instead, each mobile app provides an isolated and limited functionality. For example, it can be a game, a calculator, or a mobile web browser.
                     </p>
                  </div>
                  <div className="basis-1/2">
                     <div className="md:mb-0 mb-12">
                        <Image src={assets_software.cover_mob} alt='' className='w-full' data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className=''>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <Image alt='' src={assets_software.cover_dekstop} className='w-full' data-aos="fade-right" data-aos-duration="2000"
                        data-aos-offset="300" />
                  </div>
                  <div className="basis-1/2">
                     <div data-aos="fade-left" data-aos-duration="2000"
                        data-aos-offset="300">
                        <h1 className='md:mb-5 mb-4 md:pt-10 pt-8'>Desktop Application</h1>
                        <p className='text_paragraf md:mb-6 mb-4 text-justify'>Desktop application is a software program that can be run on a standalone computer to perform a specific task by an end-user.</p>
                     </div>
                     <p className='text_paragraf text-justify' data-aos="fade-left" data-aos-duration="2000"
                        data-aos-offset="300" data-aos-delay="150">Some desktop applications such as word editor, photo editing app and media player allow you to perform different tasks while other such as gaming apps are developed purely for entertainment. When you purchase a computer or a laptop, there is a set of apps that are already installed on your desktop.</p>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="container overflow-hidden">
               <div className="items_row gap-5">
                  <div className="basis-1/2">
                     <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300">
                        <h1 className='text-end pt-10 md:mb-6 mb-5'>System Integration</h1>
                        <p className='text_paragraf md:mb-4 mb-6'>The process of creating a complex information system that may include designing or building a customized architecture or application, integrating it with new or existing hardware, packaged and custom software, and communications. Most enterprises rely on an external contractor for program management of most or all phases of system development.</p>
                     </div>
                     <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" data-aos-delay="150" className='md:mb-0 mb-8'>
                        <h1 className='text-end md:mb-6 mb-4'>Mail Service</h1>
                        <p className='text_paragraf'>An email service is a  tools to send bulk emails and implement email marketing. Email services offer user-friendly features to manage mailing lists, email design, and metrics to monitor your success.</p>
                     </div>
                  </div>
                  <div className="basis-1/2">
                     <Image src={assets_software.cover_system} alt='System Integration' className='w-full' data-aos="fade-left" data-aos-duration="2000" data-aos-offset="300" />
                  </div>
               </div>
            </div>
         </section>

         <section className='pt-14'>
            <Contact />
         </section>
      </>
   )
}

export default SotwarePage