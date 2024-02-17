type StylesProps = {
   styles: string 
};

const BgCover = (data: StylesProps) => {
   return (
      <>
         <div className="relative" >
            <div className={data.styles} />
         </div>
      </>
   )
}

export default BgCover