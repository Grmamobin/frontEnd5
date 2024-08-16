import Header from "../header";
import './index.css'
export default function HomeSection(){
    return(
    <>
    <Header></Header>

    <div className="home mb-[120px] flex lg:flex-row flex-col lg:mt-5">
    <div className="left-part pb-[71px]">
        <div className="flex items-center gap-[18px] text-normal16 mt-[35px]">
            <p className="text-[#FB9C46]">We are The Best</p>
            <div className="w-[85px]  border-t border-[#FF922F]"></div>
        </div>

        <h1 className="text-normal32 tracking-widest mt-[15px]">Learn Frome Home With <span className="text-[#FB9C46]">The Best</span> Online Languange Tutors</h1>

        <p className="text-[#90A3B4] mt-[15px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Id interdum dui mollis . Suspendisse nulla :</p>

        <button className="bg-[#058E6E] mt-4 text-white px-4 py-2 rounded-2xl w-[239px] h-[70px] text-normal18">Try Free Lessons</button>
    </div>

    <div className="right-part flex ml-[110px] lg:mt-4 justify-end">
        <img className="absolute bg-custom-gradient border-custom-gradient rounded-full w-[261px]" src="src/assets/images/pexels-andrea-piacquadio-3799837 1.svg" alt="" />
        <img className="relative left-[250px] bottom-10 lg:w-[70px] w-[50px] lg:bottom-[180px] lg:left-[300px]" src="src/assets/images/unsplash_mVsouITdpRs.svg" alt="" />
        <img className="relative left-[260px] top-[160px] lg:w-[70px] w-[50px] lg:top-[3px] lg:left-[300px]" src="src/assets/images/Group 4.svg" alt="" />
        <img className="relative right-[40px] top-[50px] lg:w-[70px] w-[50px] h-[70px] lg:bottom-[3px]" src="src/assets/images/unsplash_ZN2UhBtlrIY.svg" alt="" />
        <img className="relative bg-white rounded-[21px] shadow-2xl p-4 top-[260px] right-[150px] w-[140px] h-[100px]" src="src/assets/images/Group 3.svg" alt="" />
        <p className="number3 relative top-[310px] left-[-190px] lg:top-[310px] lg:left-[-340px] font-bold text-white">3+</p>
        <img className="relative top-[210px] right-[310px] w-[30px] lg:top-[70px]" src="src/assets/images/Chart.svg" alt="" />
        
    </div>
    </div>

    <div className="home-bottom mt-[300px] lg:mt-[100px] flex flex-col lg:flex-row items-center mb-[50px]">
    <div className="home-Question w-full h-full">
    <p className="text-[#FB9C46] text-normal16">What do you want to learn ?</p>
    <h1 className="text-[#393939] text-normal32 tracking-widest pt-4">What We Offer</h1>
    <div className="flex items-center gap-[18px] text-normal18 pt-4">
        <p className="text-[#FB9C46]">I want to learn</p>
        <div className="w-[85px]  border-t border-[#FF922F]"></div>
    </div>
    </div>
    <div className="right flex flex-wrap">
    <p className="text-[#90A3B4] mt-[15px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Donec urna nec faucibus ridiculus
    placerat ipsum. Volutpat eget ut vitae amet
    ullamcorper et, ante venenatis.</p>
<div className="mt-10 flex flex-col lg:flex-row">
    <div className="upper-side flex items-center">
        <img className="w-16"  src="src/assets/images/Saint Barthélemy (BL).svg" alt="" />

        <img className="w-16" src="src/assets/images/Saint turk.svg" alt="" />

        <img className="w-16" src="src/assets/images/Saint Barthélemy (BL) copy.svg" alt="" />

        <img className="w-16" src="src/assets/images/Saint Barthélemy (BL) copy 2.svg" alt="" />
    </div>

    <div className="lower-side flex items-center">
        <img className="w-16" src="src/assets/images/Saint Barthélemy (BL) copy 3.svg" alt="" />
        <img className="w-16" src="src/assets/images/Saint Barthélemy (BL) copy 4.svg" alt="" />
        <img className="w-16" src="src/assets/images/Saint Barthélemy (BL) copy 5.svg" alt="" />
        <div className="flex gap-[8px]">
            <p className="text-[#FB9C46] text-[18px]"> View All</p>
            <img src="src/assets/images/Arrow - Down 3.svg" alt="" />

        </div>
    </div>
    </div>
    </div>

    </div>

    </>
    )
}