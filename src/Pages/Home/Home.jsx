import './Home.css';
import DiscordCard from './Cards/DiscordCard';
import GmailCard from './Cards/GmailCard';
import TwitchCard from './Cards/TwitchCard';
import SlideProyects from './SlideProyects/SlideProyects';

const Home = () =>{
    return(
        <div className='HomeContainer'> 
        {/*  */}
            <SlideProyects></SlideProyects>
            <GmailCard></GmailCard>
            <DiscordCard></DiscordCard>
            <TwitchCard></TwitchCard>
           
        </div>
    )
 }

export default Home