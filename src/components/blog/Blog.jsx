import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookmark }) => {
    const { title, cover, reading_time, author, posted_date, author_img,
        hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=> handleAddToBookmark(blog)}
                        className='ml-2 text-red-600'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className="text-3xl">{title}</h3>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index} ><a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;