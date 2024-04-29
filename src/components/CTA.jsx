import ctaPix from '../assets/images/cta.png'

const CTA = () => {
    return (
        <div className='w-full bg-[#E9F8F3] py-24 lg:px-20 px-10'>
            <div className='lg:max-w-[1025px] m-auto grid lg:grid-cols-2 gap-8 max-w-[600px] items-center px-4 lg:px-0'>
                <img src={ctaPix} className="w-[800px] mx-auto order-last"/>

                <div>
                    <h1 className='py-2  text-3xl font-semibold'>Join <span className='text-[#2863bb]'>
                        World&apos;s largest</span> learning platform today 
                    </h1>

                    <p className='py-2 text-base lg:text-lg text-gray-800'>
                        Start learning by registering for free
                    </p>
                    
                    <button className='w-full my-4 px-8 py-5 rounded-lg bg-[#2863bb] text-white'>
                        Sign Up For Free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTA