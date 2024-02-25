import profilePic from './assets/image200.webp'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic}></img>
            <h2>Omer Gokbakar</h2>
            <p>Hi Im Omer. I am a Frontend Developper.</p>
        </div>
    );
}

export default Card