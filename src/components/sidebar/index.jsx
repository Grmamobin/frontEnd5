import PropTypes from 'prop-types'
import { useEffect } from 'react';
export default function Sidebar({isOpen , setIsOpen}){
    useEffect(() => {
        function handleClickOutside(event) {
            if(isOpen){
                if (event.target.closest('.whole-page')) {
                    console.log('whole')
                    if(event.target.closest('aside')){
                        setIsOpen(true);
                        return;
                    }
                    if(event.target.closest('.whole-page .menu')){
                        setIsOpen(true);
                    }
                    else{
                        setIsOpen(false);
                    }

                }
            }
          }
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isOpen, setIsOpen]);
    return(
    <div className='z-10 lg:hidden bg-black/50 fixed flex justify-end bottom-0 top-0 left-0 right-0 ' style={{visibility: isOpen ? "visible" : "hidden"}}>
   <aside className="w-[200px] h-[100vh] bg-white flex flex-col">
        <button className='flex justify-end mt-[40px] mb-[40px] px-[20px]'  onClick={()=>{setIsOpen(false)}}>
            <img src="src/assets/images/icon-close.svg" alt="closeBtn" />
        </button>
         <nav className='flex flex-col items-end justify-end px-[20px] gap-4'>
        <ul className="flex items-center text-[#FF922F] flex-col">
            <li>
                <a className="" href="#">Home</a>
            </li>
            <div className="border  border-[#FF922F] w-[33px] bg-[#FF922F] h-1 mt-1 self-cent rounded-[5px]"></div>
        </ul>
        <ul className='hover:text-[#FF922F]'>
            <li>
                <a href="#">Lessons</a>
            </li>
        </ul>
        <ul className='hover:text-[#FF922F]'>
            <li>
                <a href="#">Find Tutors</a>
            </li>
        </ul>
        <ul className='hover:text-[#FF922F]'>
            <li>
                <a href="#">About Us</a>
            </li>
        </ul>
        <ul className="text-white bg-[#407F55] border rounded-lg py-2.5
        px-4">
            <li>
                <a href="#">Login</a>
            </li>
        </ul>
        <ul className="text-white bg-[#FB9C46] border rounded-lg py-2.5
        px-4">
            <li>
                <a href="#">Sign Up</a>
            </li>
        </ul>
    </nav>
    </aside>
    </div>
    )
}
Sidebar.propTypes = {
    isOpen: PropTypes.string,
    setIsOpen : PropTypes.func
  }
  