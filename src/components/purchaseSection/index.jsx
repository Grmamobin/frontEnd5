import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { useRef, useState } from "react";
// import SvgComponent from "../svgComponent";

import firstImg from '../../assets/images/Pic 1.png'
import secondImg from '../../assets/images/pexels-karolina-grabowska-8005452 1.svg'
import thirdImg from '../../assets/images/Tick Square.svg'
import fourthImg from '../../assets/images/Group 21.svg'
import fifthImg from '../../assets/images/Calendar.svg'
import sixthImg from '../../assets/images/bi_laptop-fill.svg'
import seventhImg from '../../assets/images/unsplash_1LyBcHrH4J8 (6).png'
import eighthImg from '../../assets/images/“.svg'
import ninthImg from '../../assets/images/Group 39.svg'
import play from "../../assets/images/pause.svg"
import tenthImg from '../../assets/images/Photo.svg'
import vector from "../../assets/images/Vector 2.svg"
import eleventh from '../../assets/images/feather_chevron-right.svg'

export default function Purchase(){
    const [more , setMore] = useState({
        0: false,
        1: false,
        2: false,
    });
    const learningInfo = [
        {
            label:"1-on-1 lessons in more than 150 languages" ,
            paragraph: "Learn from certified teachers with proven experience",
            moreParagraph:"and Learn from certified teachers with proven experience and Learn from certified teachers with proven experience"
        },
        {
            label:"Practice for free with the italki community" ,
            paragraph: "Develop your language skills by building connections with others",
            moreParagraph:"and Develop your language skills by building connections with others and Develop your language skills by building connections with others"
        },
        {
            label:"Take learning beyond the classroom" ,
            paragraph: "Learn from certified teachers with proven experience",
            moreParagraph:"and Learn from certified teachers with proven experience and Learn from certified teachers with proven experience "
        }
    ]
    const worksInfo = [
        {
            source : fourthImg,
            label: "Find a tutor",
            paragraph:"Choose your ideal teacher from over 10,000 qualified language tutors."

        },
        {
            source : fifthImg,
            label: "Book a lesson",
            paragraph:"Select a lesson time and add it to their calendar."

        },
        {
            source : sixthImg,
            label: "Start learning",
            paragraph:"Simple as that, you’re learning a language."

        }
    ];
    let sliderRef = useRef(null);
    const [count , setCount] = useState(2);

    const next = () => {
        console.log(count)
      sliderRef.slickNext();
      setCount(count => count + 1)
      if(count >= 5){
        setCount(1)
    }};
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        arrows: false
      };
    return(
        <>
{/* 1 */}
        <div className="purchase flex md:flex-row flex-col items-center mb-[77px]  md:justify-center  lg:gap-0 gap-[10px]">
        <div className="right-part">
            <p className="text-[30px] lg:text-[36px] tracking-widest mt-[15px] md:pt-20 lg:w-[586px]">Purchase your awesome lessons and find your tutors </p>
            <p className="text-[#90A3B4] text-[12px] lg:text-[18px] mt-[15px] mb-[15px] lg:w-[629px]">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem habitant a tincidunt cras
            accumsan integer suscipit. Libero accumsan
            eget aliquet.</p>

            <div className="button-section flex items-center gap-[20px] mb-[42px]">
                <button className="bg-[#FB9C46] rounded-2xl py-[10px] px-4  text-white text-[12px] lg:text-[16px] w-[153px] h-[47px] lg:w-[199px] lg:h-[61px]">Book Your Lessons</button>
                <button className=" rounded-2xl py-[10px] px-4 border-[3px] border-[#FB9C46] text-[#FB9C46] lg:w-[199px]  w-[153px] h-[47px] lg:h-[61px] text-[12px] lg:text-[16px]">Find Your Tutors</button>
            </div>
        </div>

        <div className="left-part  md:max-w-[600px] min-w-[300px] md:min-w-[200px]">
            <img src={firstImg} alt="" />
        </div>
        </div>
{/* 2 */}
        <div className="achievement flex md:flex-row flex-col-reverse md:gap-[100px] lg:h-[500px] md:h-[400px] h-[900px] md:mb-[200px]">
            
            <div className="left-part relative self-center">
                <div className="back absolute bg-[#EFD8C9] rounded-[49px] bottom-0 top-15 left-0 right-0 z-[-1]  w-[289px] md:max-w-[430px] md:max-h-[430px]  h-[289px]"></div>
                <img className="front rounded-[49px] mt-6 lg:mt-12 w-[334px]  md:max-w-[487px] md:max-h-[512px]"
                 src={secondImg}
                  alt="" />
            </div>

            <div className="right-part flex flex-col">
            <h1 className="text-[30px] lg:text-[36px] text-[#393939] leading-[160%] font-[600] tracking-wide mb-[10px] items-center md:self-start">What Will You <span className="text-[#058E6E]">Get </span>?</h1>
            <p className="text-[#90A3B4]  w-[313px] text-[12px] md:self-center md:w-full lg:text-[18px]">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id interdum dui mollis .
            Suspendisse nulla :</p>
            {learningInfo.map((select , index)=>{
                return (
                <div  key={select.label} className="flex box rounded-2xl shadow-[0px_-2px_128px_0px_rgba(5,142,110,0.14)] mt-4 pt-3 pb-5 px-3">
                    <img className="self-start mr-4" src={thirdImg} alt="" />
                    <div className="flex flex-col pt-1">
                    <h2 className="text-[12px] lg:text-[16px]">{select.label}</h2>
                    <li className="text-[10px] lg:text-[14px] pt-3 text-[#8D8D8D]">{select.paragraph}<span style={{display:more[index]? "none":"inline"}}>...</span>
                    <span style={{display:more[index]? "inline":"none"}}>{select.moreParagraph}</span>
                    <button onClick={()=>setMore({...more , [index]: true})} className="text-[#058E6E]" style={{display:more[index]? "none":"inline"}}>read more</button>
                    <button onClick={()=>setMore({...more , [index]: false})} className="text-[#058E6E] pl-1" style={{display:more[index]? "inline":"none"}}>read less</button>
                    </li>
                    
                    </div>
                </div>
                )
            })}
            </div>
        </div>

{/* 3 */}
<div className="how-to-use mt-[66px] lg:mt-[111px] flex md:flex-row flex-col gap-14 lg:items-end lg:mb-[100px] mb-[100px] justify-center items-center">
    <div className="left-part">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-[30px] tracking-wide font-[600] self-start lg:text-[36px] text-[#393939]">Here’s how it <span className="text-[#FB9C46]">works</span></h1>
        <p className="text-[#90A3B4] text-[12px] font-[400] pt-5 lg:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Lorem habitant a tincidunt cras accumsan
        integer suscipit. Libero accumsan eget aliquet.</p>
        </div>

 {worksInfo.map((info , index)=>{
    return(
        <div className="box flex rounded-2xl shadow-[0px_4px_357px_0px_rgba(255,146,47,0.15),0px_0.501px_44.702px_0px_rgba(255,146,47,0.08)] mt-5 pt-[16px] pb-[23px] px-[23px]" key={info}>
            {
                index == 0 && <img className="self-center"  src={info.source} alt="" />
            }
            {
                index == 1 && <img className="self-center rounded-full  h-[45px] bg-[#FB9C46]  p-2" src={info.source} alt="" />
            }
            {
                index == 2 && <img className="self-center rounded-full h-[45px] bg-[#FB9C46]  p-3" src={info.source} alt="" />
            }
        <div className=" flex flex-col pl-[35px]">
            <h1 className="text-[#FB9C46] text-[12px] lg:text-[18px]">{info.label}</h1>
            <p className="text-[#393939] font-[300] text-[10px] lg:text-[14px]">{info.paragraph}</p>
        </div>
    </div>
    )
 })}
     </div>
    <div className="relative w-full max-w-[512px]">
    <img className="rounded-2xl w-full" src={seventhImg} alt="" />
    <div className="absolute inset-0 flex items-center justify-center">
        <img className="w-16 h-16" src={play} alt="" />
    </div>
    <img 
        className="absolute sm:right-[-20px] sm:bottom-[-50px] sm:w-[200px] right-[-8px] bottom-[-30px]" 
        src={vector} alt="" 
    />
    </div>

</div>

{/* 4 */}
    <div className="timeless-skill flex flex-col lg:flex-row lg:gap-24">
        <div className="left-part mb-[37px]">
            <h1 className="text-[#FB9C46] text-[30px] lg:text-[36px] max-w-[463px] lg:min-w-[310px]">Edu Smart it{`'`}s about mastering a timeless skill</h1>
            <p className="text-[#90A3B4] lg:mt-8 mt-4 text-[12px] leading-[32px] font-DMsans lg:text-[16px]">cultivating new perspectives, and connecting with fascinating people
            from around the world. </p>
        </div>

        <div className="">
        <Slider
            ref={slider => {
                sliderRef = slider;
                }}
            {...settings}
            className="lg:w-[500px]"
            >
            {[...Array(5)].map((_,key)=>(
                <div key={key}>
            <div className="right-par flex ">
                <img className="self-start mr-5 w-[30px] pt-1" src={eighthImg} alt="" />
            <div className="flex flex-col mt-3">
                <img className="h-[18px] self-start mb-[14px]" src={ninthImg} alt="" />
                <p className="text-[#90A3B4] text-[12px] lg:text-[16px] font-DMsans italic">“With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students“</p>
                <div className="flex mt-5 items-center">
                      {/* {  count >= 2  && <img className="rounded-full min-w-[19px] bg-[#FB9C46]  rotate-180 self-start" onClick={prev}   src="src/assets/images/feather_chevron-right.svg" alt="" />} */}
                    <div className="flex">
                    <img src={tenthImg} alt="" />
                    <div className="flex flex-col ml-3 self-center">
                        <h2 className="text-[#FB9C46] text-[10px] lg:text-[20px] font-DMsans
                          font-bold">Jaquon Hart</h2>
                        <p className="text-[#90A3B4] text-[8px] lg:text-[16px] font-[400]">Digital Marketing Executive, Hypebeast</p>
                    </div>
                    </div>
                    <img className="rounded-full min-w-[19px] bg-[#FB9C46] lg:ml-[18px] ml-20" onClick={next} src={eleventh} alt="" />
                </div> 
            </div>
            </div>
            </div>
            ))}
                   
            </Slider>
        </div>
    </div>

        </>

    
    )
}