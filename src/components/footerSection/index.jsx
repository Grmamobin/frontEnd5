import { useState } from "react"

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
        text-white pl-[20px] pt-[64px] flex flex-row lg:mx-[110px]">
            <div className="left-part absolute sm:relative">
                <div>
                    <h1 className="text-normal32">Learn more than
                    just a language 😍</h1>
                    <p className="text-normal12 mt-5">Over 100,000 students join us monthly</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                <img src="src/assets/images/Group 43.svg" alt="" />
                <ul className="underline">
                    <li><a href="">and others</a></li>
                </ul>
                </div>

            </div>
            <div className="right-par ml-auto lg:mr-[50px] lg:mb-[50px]">
                <button className="relative rounded-[4px] bg-white text-[#FB9C46] py-[19px] px-[18px] top-[300px] sm:top-[150px]">Get your free lessons now</button>
                <img className="self-center lg:self-start sm:mt-[-50px] lg:mr-[-50px] lg:rigth-[400px]" src="src/assets/images/Group 42.svg" alt="" />
            </div>
        </div>

        <footer className="
        mt-32 text-white bg-[#F2BF62] pt-12 flex flex-col lg:flex-row">
            <div className="flex flex-col ">

            <div className="flex flex-col lg:flex-row">
            <div className="first-col px-12">
                <h1 className="text-normal16">Tutorify</h1>
                <p className="pt-5">Learn more than just
                a language</p>
                <div className="link-imgs py-6">
                    <button className="pr-2">
                        <img src="src/assets/images/Icon (5).svg" alt="" />
                    </button>

                    <button
                    className="pr-2">
                        <img src="src/assets/images/Icon (6).svg" alt="" />
                    </button>

                    <button className="pr-2">
                        <img src="src/assets/images/Icon (7).svg" alt="" />
                    </button>

                    <button>
                        <img src="src/assets/images/Icon (8).svg" alt="" />
                    </button>
                </div>
            </div>

            <div className="border-t"></div>

            <div className="second-col px-12">
                <div className="flex justify-between py-[9px]" onClick={()=>{selectOption({...option,[1]:!option[1]})}}>
                <h2 className="text-normal16">Find Teacher</h2>
                <img src="src/assets/images/Vector (1).svg" style={{transform: option[1]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </div>
                <div className={`flex flex-col gap-[9px] ${option[1] ? 'flex' : 'hidden'} lg:flex`}>

                <p>English Teachers</p>
                <p>Chinese Teachers</p>
                <p>French Teachers</p>
                <p>Spanish Teachers</p>
                <p className="pb-[9px]">Other Teachers</p>
                </div>
            </div>

            <div className="border-t"></div>

            <div 
            className="third-col px-12">
                <div className="flex justify-between py-[9px]"onClick={()=>{selectOption({...option,[2]:!option[2]})}}>
                <h2 className="
                text-normal16">Lessons</h2>
                <button onClick={()=>{selectOption({...option,[2]:!option[2]})}}>
                <img src="src/assets/images/Vector (1).svg" style={{transform: option[2]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[2] ? 'flex' : 'hidden'} lg:flex`}>
                <p>Learn English</p>
                <p>Learn Chinese</p>
                <p>Learn Spanish</p>
                <p className="pb-[9px]">Learn More Languages</p>
                </div>
            </div>

            <div className="border-t"></div>
            <div className="fourth-col px-12">
            <div className="flex justify-between py-[9px]"onClick={()=>{selectOption({...option,[3]:!option[3]})}}>
                <h2 className="
                text-normal16">Company</h2>
                <button onClick={()=>{selectOption({...option,[3]:!option[3]})}}>
                <img src="src/assets/images/Vector (1).svg" style={{transform: option[3]? "rotate(180deg)":""}} className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[3] ? 'flex' : 'hidden'} lg:flex`}>
                <p>About</p>
                <p>How it Works</p>
                <p>Term</p>
                <p className="pb-[9px]">Privacy Policy</p>
                </div>
            </div>

            <div className="border-t"></div>

            <div 
            className="fifth-col px-12">
            <div className="flex justify-between py-[9px]" onClick={()=>{selectOption({...option,[4]:!option[4]})}}>
                <h2 className="
                text-normal16">More</h2>
                <button onClick={()=>{selectOption({...option,[4]:!option[4]})}}>
                <img src="src/assets/images/Vector (1).svg" style={{transform: option[4]? "rotate(180deg)":""}}  className="lg:hidden" alt="" />
                </button>
                </div>
                <div className={`flex flex-col gap-[9px] ${option[4] ? 'flex' : 'hidden'} lg:flex`}>
                <p>Documentation</p>
                <p className="pb-[9px]">License</p>
                </div>
            </div>

            <div className="border-t"></div>
            </div>
            <p className="flex justify-center py-[60px]">Copyright © 2021. Crafted with love.</p>
            </div>

        </footer>
        </>
    )
}