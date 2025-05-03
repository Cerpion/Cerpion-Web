import './GmailCard.css';
import Logo from "../../../Components/Cards/Gmail.png";

function GmailCard ()
{
    return(

        <div className='GmailCard'>

        <div className='GmailCard_ImageContent'>
            <img className="GmailCard_Image" src={Logo}/>
        </div>
        
        <div className='GmailCard_Email'>

            <h3>Join us Mail List</h3>
            <p>Subscribe to our mailing list and receive all the news about our projects:</p>

            <input className='GmailInputArea' placeholder='Write your email'></input>
            <button className='GmailButton'>Subscribe</button>
        </div>

        </div>
    )
}
    
export default GmailCard