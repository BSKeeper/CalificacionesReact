import './Testimonial.css';


function Testimonial ({img, name, stars, text}){
    return(
        <div className="TestimonialContainer">
            <div>
                <img className="TestimonialPhoto" src= {img} alt="profile" />
                <h2 className="TestimonialName">{name}</h2>
            </div>
            <div className='TestimonialContent'>
                <p className='TestimonialStars'>{stars}</p>
                <p className='TestimonialText'>{text}</p>
            </div>    
        </div>
    )
}

export default Testimonial;