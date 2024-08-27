import { useState } from "react"
import Group43 from '../../assets/images/Group 43.svg'
import Group42 from '../../assets/images/Group 42.svg'

import icon5 from '../../assets/images/Icon (5).svg'
import icon6 from '../../assets/images/Icon (6).svg'
import icon7 from '../../assets/images/Icon (7).svg'
import icon8 from '../../assets/images/Icon (8).svg'

import Vector1 from '../../assets/images/Vector (1).svg'
export default function Footer(){
    const [option , selectOption] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    })
    return(
        <>
        <div className="learn-more mt-[114px] rounded-lg bg-custom-gradient2
        text-white pl-[20px] pt-[64px] lg:p-0 flex flex-row lg:mx-[110px]">
            <div className="left-part absolute sm:relative lg:pl-[76px] lg:pb-[100px]">
                <div>
                    <h1 className="text-[30px] lg:text-[36px] max-w-[396px] lg:pt-[111px]">Learn more than
                    just a language 😍</h1>
                    <p className="text-[12px] lg:text-[14px] mt-5">Over 100,000 students join us monthly</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                <img src={Group43} alt="" />
                <ul className="underline text-[12px] lg:text-[14px]">
                    <li><a href="">and others</a></li>
                </ul>
                </div>

            </div>
            <div className="right-par ml-auto lg:mr-[50px] lg:mt-[80px] lg:mb-auto">
                <button className="relative rounded-[4px] bg-white text-[#FB9C46] py-[19px] px-[18px] bottom-[-280px] right-[100px] sm:top-[85px] sm:left-[60px] ml-[100px] specific:ml-0 sm:ml-0">Get your free lessons now</button>
                <img className="self-center lg:self-start sm:mt-[-50px] lg:mr-[-50px] lg:rigth-[400px]" src={Group42} alt="" />
            </div>
        </div>

        <footer className="mt-[108px] lg:mt-[125px] text-white bg-[#F2BF62] pt-12 lg:block flex flex-col lg:flex-row">
            <div className="flex flex-col ">

            <div className="flex flex-col lg:flex-row lg:pl-[151px]">
            <div className="first-col pl-[20px] pr-12 py-[9px]">
                <h1 className="lg:text-normal16 text-[24px]">Tutorify</h1>
                <p className="pt-5 lg:text-[14px] text-[12px] lg:pt-[46px] lg:max-w-[200px]">Learn more than just
                a language</p>
                <div className="link-imgs py-6 lg:pt-[32px]">
                    <button className="pr-2">
                        <img src={icon5} alt="" />
                    </button>

                    <button
                    className="pr-2">
                        <img src={icon6} alt="" />
                    </button>

                    <button className="pr-2">
                        <img src={icon7} alt="" />
                    </button>

                    <button>
                        <img src={icon8} alt="" />
                    </button>
                </div>
            </div>

            <div className="border-t"></div>

            <div className="second-col pl-[20px] pr-12">
                <div className="flex justify-between py-[9px]" onClick={()=>{selectOption({...option,[1]:!option[1]})}}>
                <h2 className="text-[14px] lg:text-normal16">Find Teacher</h2>
                <img src={Vector1} style={{transform: option[1]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </div>
                <div className={`flex flex-col gap-[9px] ${option[1] ? 'flex' : 'hidden'} lg:flex text-[14px] lg:pt-[32px]`}>

                <p className="lg:pt-2">English Teachers</p>
                <p className="lg:pt-2">Chinese Teachers</p>
                <p className="lg:pt-2">French Teachers</p>
                <p className="lg:pt-2">Spanish Teachers</p>
                <p className="pb-[9px] lg:pt-2">Other Teachers</p>
                </div>
            </div>

            <div className="border-t"></div>

            <div 
            className="third-col pl-[20px] pr-12">
                <div className="flex justify-between py-[9px]"onClick={()=>{selectOption({...option,[2]:!option[2]})}}>
                <h2 className="
                text-[14px] lg:text-normal16">Lessons</h2>
                <button onClick={()=>{selectOption({...option,[2]:!option[2]})}}>
                <img src={Vector1} style={{transform: option[2]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[2] ? 'flex' : 'hidden'} lg:flex text-[14px] lg:pt-[32px]`}>
                <p className="lg:pt-2">Learn English</p>
                <p className="lg:pt-2">Learn Chinese</p>
                <p className="lg:pt-2">Learn Spanish</p>
                <p className="pb-[9px] lg:pt-2">Learn More Languages</p>
                </div>
            </div>

            <div className="border-t"></div>
            <div className="fourth-col pl-[20px] pr-12">
            <div className="flex justify-between py-[9px]"onClick={()=>{selectOption({...option,[3]:!option[3]})}}>
                <h2 className="
                text-[14px] lg:text-normal16">Company</h2>
                <button onClick={()=>{selectOption({...option,[3]:!option[3]})}}>
                <img src={Vector1} style={{transform: option[3]? "rotate(180deg)":""}} className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[3] ? 'flex' : 'hidden'} lg:flex text-[14px] lg:pt-[32px]`}>
                <p className="lg:pt-2">About</p>
                <p className="lg:pt-2">How it Works</p>
                <p className="lg:pt-2">Term</p>
                <p className="pb-[9px] lg:pt-2">Privacy Policy</p>
                </div>
            </div>

            <div className="border-t"></div>

            <div 
            className="fifth-col pl-[20px] pr-12">
            <div className="flex justify-between py-[9px]" onClick={()=>{selectOption({...option,[4]:!option[4]})}}>
                <h2 className="
                text-[14px] lg:text-normal16">More</h2>
                <button onClick={()=>{selectOption({...option,[4]:!option[4]})}}>
                <img src={Vector1} style={{transform: option[4]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[4] ? 'flex' : 'hidden'} lg:flex text-[14px] lg:pt-[32px]`}>
                <p className="lg:pt-2">Documentation</p>
                <p className="pb-[9px] lg:pt-2">License</p>
                </div>
            </div>

            <div className="border-t"></div>
            </div>
            <p className="self-center py-[60px] lg:pt-[117px] lg:pb-[73px]">Copyright © 2021. Crafted with love.</p>
            </div>

        </footer>
        </>
    )
}