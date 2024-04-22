import { useState } from 'react';
import zekeLogo from '../assets/images/zekelogo.png'
import { AiTwotoneUnlock, AiOutlineOrderedList } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);


    return (
        <div className="px-10 lg:px-0 w-full h-[80px] bg-white border-b">
            <div className="lg:max-w-[1025px] max-w-[600px] mx-auto w-full h-full flex justify-between items-center cursor-pointer">
                <img src={zekeLogo} alt="" className='mt-[15px] ml-[-152px] h-[225px]'/>
            
                <div className='hidden lg:flex items-center'>
                    <ul className='flex gap-4'>
                        <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>

                        <li>
                            Support
                        </li>

                        <li>
                            Platform
                        </li>

                        <li>
                            Pricing
                        </li>
                    </ul>
                </div>

                <div className='hidden lg:flex'>
                    <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                        <AiTwotoneUnlock />
                        Login
                    </button>

                    <button className='bg-blue-600 px-8 py-3 rounded-md text-white font-bold text-sm'>Sign Up For Free</button>
                </div>

                    {/* hamburger menu */}
                <div className='lg:hidden' onClick={handleClick}>
                    {toggle ? <GrClose className='text-3xl' /> : <AiOutlineOrderedList className='text-3xl' />}
                </div>
            
            </div>

        {/* responsive bar */}
            <div className={toggle ? 'absolute ml-[-40px] mt-9 z-10 h-screen bg-white w-full p-4 lg:hidden': 'hidden'}>
                <ul className='flex flex-col justify-center text-center'>
                        <li className='p-4 hover:bg-gray-100'>
                            Home
                        </li>

                        <li className='p-4 hover:bg-gray-100'>
                            About
                        </li>

                        <li className='p-4 hover:bg-gray-100'>
                            Support
                        </li>

                        <li className='p-4 hover:bg-gray-100'>
                            Platform
                        </li>

                        <li className='p-4 hover:bg-gray-100'>
                            Pricing
                        </li>

                        <div className='flex flex-col gap-4'>
                            <button className='border rounded-lg border-blue-400 flex justify-center items-center bg-transparent px-6 py-4 gap-2'>
                                <AiTwotoneUnlock />
                                Login
                            </button>

                            <button className='bg-blue-600 px-8 py-5 rounded-lg text-white font-bold'>Sign Up For Free</button>
                        </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar