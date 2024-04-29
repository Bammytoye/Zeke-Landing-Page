import  achievement  from '../assets/images/achievement.png'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'

const Achievement = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='lg:max-w-[1025px] m-auto max-w-[600px] grid lg:flex justify-between px-20 lg:px-0'>   
                <div className='flex flex-col justify-center '>
                    <h1 className='lg:leading-[72px] text-2xl lg:text-4xl font-bold'>
                        Our <span className='text-[#2863bb]'>Achievements</span>
                    </h1>
                    
                    <p className='text-base md:text-lg text-gray-900'>
                        Various versions have evolved over the years, sometimes by accident.
                    </p>
                
                    <div className='grid lg:grid-cols-2 py-16'>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#2b2c2c] rounded-xl'>
                                <SlGraduation 
                                    size={30}
                                    style={{color:'#1A906B'}}
                                />
                            </div>
                        
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>300</h1>
                                <p className='text-[#6D737A]'>Instructor</p>
                            </div>
                        </div>
                    
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#aec5c5] rounded-xl'>
                                <FiVideo 
                                    size={30}
                                    style={{color:'#000'}}
                                />
                            </div>
                        
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>10,000+</h1>
                                <p className='text-[#6D737A]'>Video</p>
                            </div>
                        </div>
                    
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#aec5c5] rounded-xl'>
                                <SlGraduation 
                                    size={30}
                                    style={{color:'#ED4459'}}
                                />
                            </div>
                            
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>20,000+</h1>
                                <p className='text-[#6D737A]'>Student</p>
                            </div>
                        </div>
                    
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#2b2c2c] rounded-xl'>
                                <SlPeople 
                                    size={30}
                                    style={{color:'#0075FD'}}
                                />
                            </div>
                        
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>1,00,000+</h1>
                                <p className='text-[#6D737A]'>Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img  src={achievement} className="order-first lg:order-last" />
            </div>
        </div>
    )
}

export default Achievement