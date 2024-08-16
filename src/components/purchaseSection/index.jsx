import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { useRef, useState } from "react";
// import SvgComponent from "../svgComponent";
export default function Purchase(){
    const [more , setMore] = useState({
        1: false,
        2: false,
        3: false,
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
            source : "src/assets/images/Group 21.svg",
            label: "Find a tutor",
            paragraph:"Choose your ideal teacher from over 10,000 qualified language tutors."

        },
        {
            source : "src/assets/images/Calendar.svg",
            label: "Book a lesson",
            paragraph:"Select a lesson time and add it to their calendar."

        },
        {
            source : "src/assets/images/bi_laptop-fill.svg",
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
        <div className="purchase flex md:flex-row flex-col items-center mb-20">
        <div className="right-part">
            <p className="text-normal32 tracking-widest mt-[15px] md:pt-20">Purchase your awesome lessons and find your tutors </p>
            <p className="text-[#90A3B4] mt-[15px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem habitant a tincidunt cras
            accumsan integer suscipit. Libero accumsan
            eget aliquet.</p>

            <div className="button-section flex items-center justify-between">
                <button className="bg-[#FB9C46] rounded-2xl py-[10px] px-4  text-white  h-[47px] ">Book Your Lessons</button>
                <button className=" rounded-2xl py-[10px] px-4 border border-[#FB9C46] text-[#FB9C46] w-[153px]">Find Your Tutors</button>
            </div>
        </div>

        <div className="left-part">
            <img src="src/assets/images/Group 15.svg" alt="" />
          
        </div>
        </div>
{/* 2 */}
        <div className="achievement flex md:flex-row flex-col-reverse md:justify-between items-center">
            
            <div className="left-part relative md:mb-0 mt-4">
                <div className="back absolute bg-[#EFD8C9] rounded-[49px] bottom-0 top-15 left-0 right-0 z-[-1]  w-[289px] md:max-w-[430px] md:max-h-[430px]  h-[289px]"></div>
                <img className="front rounded-[49px] w-[334px]  md:max-w-[487px] md:max-h-[512px]"
                 src="src/assets/images/pexels-karolina-grabowska-8005452 1.svg"
                  alt="" />
            </div>

            <div className="right-part flex flex-col">
            <h1 className="text-normal32 tracking-widest mt-[15px] mb-[10px] items-center self-center">What Will You <span className="text-[#058E6E]">Get ?</span></h1>
            <p className="text-[#90A3B4] self-end w-[313px] text-normal12 md:self-center">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id interdum dui mollis .
            Suspendisse nulla :</p>
            {learningInfo.map((select , index)=>{
                return (
                    <div  key={select.label} className="flex box rounded-2xl shadow-[0px_-2px_128px_0px_rgba(5,142,110,0.14)] mt-4  pt-3 pb-5 px-3">
                    <img className="self-start mr-4" src="src/assets/images/Tick Square.svg" alt="" />
                    <div className="flex flex-col">
                    <h2 className="text-normal12 ">{select.label}</h2>
                    <li className="text-normal10 text-[#8D8D8D]">{select.paragraph}<span style={{display:more[index]? "none":"inline"}}>...</span>
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
<div className="how-to-use mt-[111px] flex md:flex-row flex-col gap-14 lg:items-end lg:mb-[100px] mb-[100px] justify-center items-center">
    <div className="left-part">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-normal32 font-[16px] ">Here’s how it <span className="text-[#FB9C46]">works</span></h1>
        <p className="text-[#90A3B4] font-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing
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
            <h1 className="text-[#FB9C46] text-normal12">{info.label}</h1>
            <p className="text-[#393939] text-normal10">{info.paragraph}</p>
        </div>
    </div>
    )
 })}
     </div>
    <div className="right-part w-full flex justify-center items-center">
    <img className="rounded-r-2xl shadow-triangle" src="src/assets/images/unsplash_1LyBcHrH4J8.svg" alt="" />
    {/* <SvgComponent/> */}

    </div>
</div>

{/* 4 */}
    <div className="timeless-skill flex flex-col lg:flex-row lg:gap-24">
        <div className="left-part mb-[37px]">
            <h1 className="text-[#FB9C46] text-[36px]">Edu Smart it{`'`}s about mastering a timeless skill</h1>
            <p className="text-[#90A3B4] mt-8">cultivating new perspectives, and connecting with fascinating people
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
            {[...Array(5)].map((key)=>(
                <div key={key}>
            <div className="right-par flex ">
                <img className="self-start mr-5 " src="src/assets/images/“.svg" alt="" />
            <div className="flex flex-col mt-3">
                <img className="h-[18px] self-start mb-[14px]" src="src/assets/images/Group 39.svg" alt="" />
                <p className="text-[#90A3B4] font-[12px] italic">“With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students</p>
                <div className="flex mt-5 items-center">
                      {/* {  count >= 2  && <img className="rounded-full min-w-[19px] bg-[#FB9C46]  rotate-180 self-start" onClick={prev}   src="src/assets/images/feather_chevron-right.svg" alt="" />} */}
                    <div className="flex">
                    <img src="src/assets/images/Photo.svg" alt="" />
                    <div className="flex flex-col ml-3">
                        <h2 className="text-[#FB9C46] font-bold">Jaquon Hart</h2>
                        <p className="text-[#90A3B4]">Digital Marketing Executive, Hypebeast</p>
                    </div>
                    </div>
                    <img className="rounded-full min-w-[19px] bg-[#FB9C46] ml-[18px]" onClick={next} src="src/assets/images/feather_chevron-right.svg" alt="" />
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