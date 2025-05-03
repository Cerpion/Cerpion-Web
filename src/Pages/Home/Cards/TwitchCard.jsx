import './TwitchCard.css';
import Logo from "../../../Components/Cards/Twicht.png";

function TwitchCard ()
{
    return(

        <div className='TwitchCard'>

        <div className='TwitchCard_ImageContent'>
            <img className="TwitchCard_Image" src={Logo}/>
        </div >

        <div className='TwitchCard_Email'>
            <h3>Join us Twitch</h3>
            <p>Follow us on Twitch to watch live streams of game development and 3D modeling.</p>
            <button className='TwitchButton' onClick={() => window.open('https://www.twitch.tv/cerpion', '_blank')}>Go Twitch</button>
            </div >


        </div>
    )
}
    
export default TwitchCard