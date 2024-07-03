import Curve from './Curve';
import './About.css';

function About(){
    return (
        <>
        <Curve/>
        <div id='about' className="about">
            <div className="info">
            <h1>About Us</h1>
                    <p className='para-about'>Welcome to our coding club, where passion for programming 
                        meets endless creativity. Whether you're a developer or just 
                        started your journey into the coding world, this is the perfect
                         place for you. Our main goal with this club is to collaborate 
                         with different people like you who have a variety of ideas to 
                         bring to life. Together, we will work on different projects, 
                         uniting our talents and knowledge. We'll provide both practical 
                         and theoretical learning about coding concepts. So join our club 
                         and let's enhance your coding skills together.</p>
            </div>
        </div>
        </>
    );
}

export default About;