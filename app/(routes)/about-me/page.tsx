import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";


const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                 <h1 className="text-2xl leading-tight pt-25 text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-[#f5741c]">
                        formación profesional
                    </span>
                </h1>
                {/*<CounterServices />*/}
                <TimeLine />
            </ContainerPage> 
           
        </>
        
    );
}
export default PageAboutMe