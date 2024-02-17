import Link from "next/link"

const Btn = ({ title, url }: { title : string, url : string }) => {
   return (
      <Link href={`${url}`} className='bg-orange transition-all ease-in-out hover:bg-[#9A5900] duration-500 text-white md:px-12 px-10 py-1.5 rounded-ss-[25px] rounded-br-[25px] font-semibold tracking-wide text-base md:text-2xl'>{title}</Link>
   )
}

export default Btn


