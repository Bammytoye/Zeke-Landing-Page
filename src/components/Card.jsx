import StarRating from './StarRating'

const Card = ({ course }) => {
    return (
        <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl my-4 mr-2">
            <img src={course.linkImg} className="h-60 w-full object-cover" />

            <div className="p-5 border border-b">
                <h1 className="py-2">{course.title}</h1>
                <StarRating rating={course.rating} />
            </div>

            <h3 className="p-5 text-xl">{course.price}</h3>

            <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
                {course.category}
            </div>
        </div>
    )
}

export default Card
