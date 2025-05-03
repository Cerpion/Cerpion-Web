import './DiscordCard.css';
import Logo from "../../../Components/Cards/Discord.png";

function DiscordCard ()
{
    return(

        <div className='DiscordCard'>

        <div className='DiscordCard_ImageContent'>
            <img className="DiscordCard_Image" src={Logo}/>
        </div>

        <div className='DiscordCard_Content'>

            <h3>Join us Discord</h3>
            <p className='AjustText'>Join us on the Cerpion Discord server! Chat with us! Ask questions, and stay up to date with the latest news!</p>
            <button className='DiscordButton' onClick={() => window.open('https://discord.gg/HXXzn2TP', '_blank')}>Go Discord</button>
        </div>
        </div>
    )
}
    
export default DiscordCard