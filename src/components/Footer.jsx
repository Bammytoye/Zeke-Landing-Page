import { FaFacebookF, FaLinkedinIn, FaInstagram, } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-white py-24 px-5'>
            <div className='lg:max-w-[1025px] m-auto max-w-[600px] grid lg:grid-cols-5 max-[780px]:grid-cols-2  gap-8 px-4 lg:px-0'>
                <div className='col-span-2'>
                    <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                    <h3 className='py-2 text-[#6D737A]'>Call : +234 8169 885 711</h3>
                    <h3 className='py-2 text-[#6D737A]'>Lagos, <br></br> Nigeria.</h3>
                    <h3 className='py-2 text-[#363A3D]'>Email: bamigbalatoyese@mail.com</h3>
                    
                    <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{ color: '#2863BB' }} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{ color: '#2863BB' }} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{ color: '#2863BB' }} /></div>
                    </div>
                </div>

                <div>
                    <h3 className='text-2xl font-bold'>
                        Explore
                    </h3>
                        <ul className='py-6 text-[#6D737A]'>
                            <li className='py-2'>Home</li>
                            <li className='py-2'>About</li>
                            <li className='py-2'>Course</li>
                            <li className='py-2'>Blog</li>
                            <li className='py-2'>Contact</li>
                        </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-bold'>Category</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Design</li>
                        <li className='py-2'>Development</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Business</li>
                        <li className='py-2'>Lifestyle</li>
                        <li className='py-2'>Photography</li>
                        <li className='py-2'>Music</li>
                    </ul>
                </div>

                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-2xl font-bold'>Subscribe</h3>
                    <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                    
                    <form className='py-4'>
                        <input
                            className='bg-[#c3c4c5] p-4 w-full rounded outline-none placeholder:italic'
                            placeholder='Email here'
                        />
                        <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#2863BB] text-white font-medium'>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer