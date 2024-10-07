import profilepic from './assets/profile.jpg'
function Card(){
    return(
        <div  className="card">
            <img className="card-image" src={profilepic} alt="profile picture" ></img>
            <h2 className="card-title">Udaya Krishna</h2>
            <p className="card-text">I am a third year cse student</p>
        </div>
    );
}

export default Card