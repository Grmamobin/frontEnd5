import Header from "../header";
import './index.css'

import firstImg from '../../assets/images/pexels-andrea-piacquadio-3799837 1.svg'
import secondImg from '../../assets/images/unsplash_mVsouITdpRs.svg'
import thirdImg from '../../assets/images/Group 4.svg'
import fourthImg from '../../assets/images/unsplash_ZN2UhBtlrIY.svg'
import fifthImg from '../../assets/images/Group 3.svg'
import sixthImg from '../../assets/images/Chart.svg'
import seventhImg from '../../assets/images/Group.svg'
import eighthImg from '../../assets/images/Group 326.svg'
import ninthImg from '../../assets/images/Group 325.svg'
import tenthImg from '../../assets/images/Group 327.svg'
import eleventhImg from '../../assets/images/Group 328.svg'
import twelveImg from '../../assets/images/Group 329.svg'
import thirtheenImg from '../../assets/images/Group 330.svg'
import arrow from '../../assets/images/Arrow - Down 3.svg'


export default function HomeSection(){
    return(
    <>
    <Header></Header>

    <div className="home mb-[120px]  flex lg:flex-row flex-col lg:mt-[95px]">
    <div className="left-part pb-[71px]  lg:mr-24">
        <div className="flex items-center gap-[18px]  mt-[35px]">
            <p className="text-[#FB9C46] text-[16px]">We are The Best</p>
            <div className="w-[85px]  border-t border-[#FF922F]"></div>
        </div>

        <h1 className="lg:text-[48px] text-[32px] tracking-widest mt-[15px] lg:mt-[37px] min-w-[355px] lg:max-w-[656px] lg:mb-[44px]">Learn Frome Home With <span className="text-[#FB9C46]">The Best</span> Online Languange Tutors</h1>

        <p className="text-[#90A3B4] lg:text-[#6C6C6C] text-[14px] lg:text-[18px] leading-7  mt-[15px] mb-[15px] lg:max-w-[642px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Id interdum dui mollis . Suspendisse nulla :</p>

        <button className="bg-[#058E6E] mt-4 text-white px-4 py-[10px] rounded-2xl w-[239px] lg:w-[290px] h-[70px] text-[18px] lg:text-[16px]">Try Free Lessons</button>
    </div>

    <div className="relative flex justify-center">
        <img className="bg-custom-gradient border-custom-gradient rounded-full w-[261px] lg:w-[553px] h-auto" src={firstImg} alt="" />

        <div className="animations-up-down absolute inset-0 flex items-center justify-center">
            <img className="absolute left-2/4 bottom-[92%] w-[50px] lg:w-[108px]" src={secondImg} alt="" />
            <img className="absolute left-2/4 top-[50%] transform translate-x-[105px] lg:translate-x-[195px] w-[50px] lg:w-[108px]" src={thirdImg} alt="" />
            <img className="absolute left-2/4 top-[20%] transform -translate-x-[150px] w-[50px] lg:w-[108px]  lg:-translate-x-[290px]" src={fourthImg} alt="" />
        
            <div className="absolute">
                <img className="relative bg-white rounded-[21px] shadow-2xl p-4 right-[120px] w-[112px] lg:w-[237px] lg:top-48 lg:right-48 top-24" src={fifthImg} alt="" />
                <p className="absolute top-[183%] text-[12px] left-[-38%] font-bold text-white lg:text-[30px] lg:left-[-8%] lg:top-[190%]">3+</p>
                <img className="absolute top-[110%] lg:top-[115%] lg:right-[165%] right-[185%] w-[30px] lg:w-[50px]" src={sixthImg} alt="" />
            </div>

        </div>
    </div>

    </div>

    <div className="home-bottom mt-[68px] lg:mt-[95px] flex flex-col lg:flex-row items-center mb-[60px] lg:mb-[92px] lg:gap-10 md:flex-wrap lg:flex-nowrap">
    <div className="home-Question w-full h-full">
    <p className="text-[#FB9C46]">What do you want to learn ?</p>
    <h1 className="text-[#393939] text-[30px] lg:text-[48px] tracking-widest pt-4">What We Offer</h1>
    <div className="flex items-center gap-[18px] pt-4">
        <p className="text-[#FB9C46]">I want to learn</p>
        <div className="w-[85px] lg:w-[178px] self-center border-t border-[#FF922F]"></div>
    </div>
    </div>
    <div className="right flex flex-wrap">
    <p className="text-[#90A3B4] mt-[15px] mb-[15px] text-[12px] lg:text-[14px]">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Donec urna nec faucibus ridiculus
    placerat ipsum. Volutpat eget ut vitae amet
    ullamcorper et, ante venenatis.</p>
<div className="mt-5 flex flex-col md:flex-row gap-8 flex-wrap">
    <div className="upper-side flex items-center gap-8">
        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600"  src={seventhImg} alt="" />

        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={eighthImg} alt="" />

        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={ninthImg} alt="" />

        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={tenthImg} alt="" />
    </div>

    <div className="lower-side flex items-center gap-8">
        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={eleventhImg} alt="" />
        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={twelveImg} alt="" />
        <img className="lg:w-[53px] w-[45px] rounded-full shadow-2xl shadow-gray-600" src={thirtheenImg} alt="" />
        <div className="flex gap-[8px]">
            <p className="text-[#FB9C46] text-[18px]"> View All</p>
            <img src={arrow} alt="" />

        </div>
    </div>
    </div>
    </div>

    </div>

    </>
    )
}