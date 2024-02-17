import Link from "next/link"

const Contact = () => {
   return (
      <>
         <div className="container">
            <div className="items_row gap-5">
               <div className="basis-1/2">
                  <div className="md:mb-0 mb-6">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1324973381843!2d110.33200307464055!3d-7.775772377141113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b575cdc5c7%3A0xd05458758734d193!2sMeetaza!5e0!3m2!1sid!2sid!4v1696649180078!5m2!1sid!2sid" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
               </div>
               <div className="basis-1/2">
                  <div className="md:mb-7 mb-4">
                     <p className="font-bold text-lg md:text-2xl text-black md:mb-2 mb-0">Contact Us</p>
                     <Link href={"#"} className="block font-medium text-lg md:text-[22px] hover:underline leading-relaxed">info@meetaza.com</Link>
                     <Link href={"#"} className="block font-medium text-lg md:text-[22px] hover:underline">0274-5026684</Link>
                  </div>
                  <div className="lg:w-5/6 w-auto">
                     <p className="font-bold text-lg md:text-2xl text-black">Location</p>
                     <Link href={"https://maps.app.goo.gl/dgGNvykXEFfMnpPQ9"} target="_blank" className="font-medium text-lg md:text-[22px] hover:underline md:leading-relaxed leading-normal">Jl. Nogosaren Baru No. 28, Banyuraden, Gamping, Sleman, D.I.Yogyakarta 55293</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact