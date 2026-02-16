import Link from 'next/link'
import Image from "next/image";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data}= props
    const { title, image, urlGithub, urlDemo}= data
    
    return (
    <div className="p-4 border border-teal-50 rounded-xl ">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image product"
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        className="w-full h-auto max-w-[360px] sm:max-w-[300px] md:max-w-[240px] mx-auto rounded-2xl"
      />



      <div className="flex flex-wrap justify-center gap-5 mt-5">
        <Link href={urlGithub} target="_blank"
        className="p-2 transition duration-150
        rounded-lg bg-slate-500 hover:bg-slate-500/80">
            GitHub
            </Link>
            <Link href={urlDemo} target="_blank"
        className="p-2 transition duration-150
        rounded-lg bg-[#f5741c] hover:bg-orange-500">
            Demo
            </Link>
       
      </div>
      
    </div>
  );
}





export default PortfolioBox;