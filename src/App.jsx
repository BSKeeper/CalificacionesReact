import { useState } from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import Photo1 from './img/UrbanChampion.jpg';
import Photo2 from './img/Battletoads.jpg';
import Photo3 from './img/BtoadsDD.webp';


const Title = () => {
    
    return <h1>CALIFICACIONES</h1>
}

const Likes = () => {
    
    const [likes,setLikes]=useState(0);

    return <button className='LikesButton' onClick={()=> setLikes(likes+1)}>{likes} Likes</button>
}


function App (){

    return(

        

        <div className='MainContainer '> 

            <Title/>

            <Testimonial 
                img={Photo1} 
                name="Urban Champion"
                stars="⭐⭐⭐⭐"
                text="Lorem ipsum dolor sit amet. Eos 
                repellendus totam ab voluptas facilis est
                porro quos ut vitae rerum aut vero sint 
                aut quia facilis et quisquam aperiam! Ab 
                facilis illo ab corrupti ipsam sed expedita
                dolorem. 
                "/>

            <Testimonial 
                img={Photo2} 
                name="Battletoads"
                stars="⭐⭐⭐⭐⭐"
                text="Lorem ipsum dolor sit amet. Eos 
                repellendus totam ab voluptas facilis est
                porro quos ut vitae rerum aut vero sint 
                aut quia facilis et quisquam aperiam! Ab 
                facilis illo ab corrupti ipsam sed expedita
                dolorem. 
                "/>

                <Testimonial 
                img={Photo3} 
                name="Battletoads and Double Dragon"
                stars="⭐⭐⭐⭐⭐"
                text="Lorem ipsum dolor sit amet. Eos 
                repellendus totam ab voluptas facilis est
                porro quos ut vitae rerum aut vero sint 
                aut quia facilis et quisquam aperiam! Ab 
                facilis illo ab corrupti ipsam sed expedita
                dolorem. 
                "/>

            <Likes />
        </div>
        
    )
}

export default App;
