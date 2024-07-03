import './Nav.css';

function Navigation(){
    return(
        <div className="main">
            <div className="logo">
                <span>Coding Club</span>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#event">Event</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a className='cont' href="https://github.com/Nitish-Singh10"><button>Contribute</button></a>
            </div>
        </div>
    );
}

export default Navigation;