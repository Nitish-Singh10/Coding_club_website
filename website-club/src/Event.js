import './Event.css';

function Event(){
    return(
        <div id='event' className="event">
            <div className="card">
                <div className="sect">
                    <div className="sect1">
                        <img src="./event_img.png" alt="Event Img" />
                    </div>
                    <div className="sect2">
                    <h1>WEB CRAFT</h1>
                    <h2>Date:- 10th July 2024</h2>
                    <p>We will be Providing the Ui of the Website You have to desigh
                        in the given time.
                    </p>
                    <a href="#"><button>Register Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;