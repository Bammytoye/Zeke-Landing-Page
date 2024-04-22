import heroImg from '../assets/images/heroImg.png';
import  {AiOutlineSearch} from 'react-icons/ai'



const Hero = () => {
    return (
        <div className="p-10 w-full bg-white py-24">
            <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2">
                <div>
                    <p className='py-2 text-2xl text-[#502fe6] font-extrabold'>START TO SUCCESS</p>

                    <h1 className='md:leading-[60px] py-2 md:text-5xl text-4xl font-semibold'>Access To <span className='text-[#502fe6]'>5000+</span> Courses
                        from <span  className='text-[#502fe6]'>300</span> Instructors 
                        & Institutions
                    </h1>
                    
                    <p className='py-2 text-md text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

                    <form className='bg-white border max-w-[500px] p-3 input-box-shadow rounded-md flex justify-between'>
                        <input 
                            className='bg-white outline-none placeholder:italic rounded-lg'
                            type="text"
                            placeholder='What do want to learn?'
                        />

                        <button>
                            <AiOutlineSearch 
                                size={15}
                                className="icon"
                                style={{color:'#000'}}

                            />

                        </button>
                    </form>
                </div>

                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero