import {BsArrowUpRight} from 'react-icons/bs'

const CategoryCard = ({icons, title}) => {
    return (
        <div className='category-card bg-white lg:p-4 p-2 flex items-center gap-4 justify-between rounded-2xl border-b border-l border-black border-transparent hover:border-[#4a5ab3] hover:cursor-pointer group/edit'>
            <div className='flex gap-4'>
                {icons}
                
                <h1 className='md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10' >
                    {title}
                </h1>
            </div>
        
            <div className='group-hover/edit:bg-[#7481f3] rounded-lg p-3'>
                <BsArrowUpRight 
                    size={30}
                    style={{color:'#7481f3'}}
                    className='arrow-icon'
                />
            </div>
        </div>
    )
}

export default CategoryCard