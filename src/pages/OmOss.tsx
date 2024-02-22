import React from 'react';
import Logo from '../assets/logo_hele.png';
import Plane from '../assets/fly.png';
import Jorda from '../assets/globe.png';
import { Link } from 'react-router-dom';
import "../style/OmOss.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faPhone, faMailBulk, faGlobe, faGlobeAmericas, faPlaneDeparture, faPlaneCircleCheck, faPaperPlane, faPlane, faGlobeAfrica, faGlobeAsia, faGlobeEurope, faPeopleArrowsLeftRight} from '@fortawesome/free-solid-svg-icons';

const OmOss: React.FC = () => {
    return (
        <div >
            <LogoBilde />
            <LinkToText />
            <Linje />
            <Fly />
            <HEV />
            <Om />
            <Om />
            <Globe />
            <VA />
            <ARBEID/>
            <KO />
            <Knapper />
        </div>
    );
};

const Linje = () => {
    return(
        <div className='linje'>
            <hr></hr> 
        </div>    
    );
};

const LogoBilde = () => {
    return (
      <div className="logoBilde">
        <img src={Logo} alt="logo" />
      </div>
    );
};


const LinkToText = () => {
    return(
        <div className = "linkToText">
            <a href = "#h" style={{textDecoration: 'none', color: 'black'}}>
                Hvem er vi?
                </a> 
            <a href = "#va" style={{textDecoration: 'none', color: 'black'}}>
                Vårt arbeid
                </a>
            <a href = "#ko" style={{textDecoration: 'none', color: 'black'}}>
                Kontakt oss
                </a>
        </div>
    );
};

const Fly = () => {
    return (
      <div className="fly">
        <img src={Plane} alt="plane" />
      </div>
    );
};

const HEV = () => {
    return(
        <div id = "h" className='hev'>
            Hvem er vi?
        </div>
    );
};

const Om = () => {
    return(
        <div className='om'>
            Lorem ipsum dolor sit amet. Sed fugit exercitationem non optio ducimus qui corporis ducimus sed perferendis omnis vel laudantium molestiae. Aut quibusdam 
            accusantium id reprehenderit rerum aut corporis suscipit. Id dolore accusamus ut magni omnis ut rerum sint sit temporibus ipsam. Qui galisum quia et nihil consectetur est officiis
            omnis ut dolorum dolores At nihil magni est dolor explicabo. Qui enim mollitia et dolore dolor hic numquam dolores. Id saepe Quis in molestias officiis et odit Quis? Aut optio nihil
            non debitis aspernatur eum omnis nostrum rem natus assumenda.Lorem ipsum dolor sit amet. Sed fugit exercitationem non optio ducimus qui corporis ducimus sed perferendis omnis vel laudantium molestiae. Aut quibusdam 
            accusantium id reprehenderit rerum aut corporis suscipit. Id dolore accusamus ut magni omnis ut rerum sint sit temporibus ipsam. Qui galisum quia et nihil consectetur est officiis
            omnis ut dolorum dolores At nihil magni est dolor explicabo. Qui enim mollitia et dolore dolor hic numquam dolores. Id saepe Quis in molestias officiis et odit Quis? Aut optio nihil
            non debitis aspernatur eum omnis nostrum rem natus assumenda.
        </div>
    );
};

const Globe = () => {
    return(
        <div className="globe">
        <img src={Jorda} alt="jorda" />
      </div>
    );
};

const VA = () => {
    return(
        <div id = "va" className='hev2'>
            Vårt arbeid
        </div>
    );
};



const ARBEID = () => {
    return(
        <div className='om'>
            Lorem ipsum dolor sit amet. Sed fugit exercitationem non optio ducimus qui corporis ducimus sed perferendis omnis vel laudantium molestiae. Aut quibusdam 
            accusantium id reprehenderit rerum aut corporis suscipit. Id dolore accusamus ut magni omnis ut rerum sint sit temporibus ipsam. Qui galisum quia et nihil consectetur est officiis
            omnis ut dolorum dolores At nihil magni est dolor explicabo. Qui enim mollitia et dolore dolor hic numquam dolores. Id saepe Quis in molestias officiis et odit Quis? Aut optio nihil
            non debitis aspernatur eum omnis nostrum rem natus assumenda.
        </div>
    );
};

const KO = () => {
    return(
        <div id="ko" className ='hev1'>
            Kontakt oss
        </div>
    );
};

const Knapper = () => {
    return(
        <div className='knapper'>
        <div>
            <button><FontAwesomeIcon icon={faMailBulk} /></button>
            <p>
                vandre@gmail.com
            </p>
            <p>
                sjef@gmail.com
            </p></div>
        <div>
            <button><FontAwesomeIcon icon={faPhone} /></button>
            <p>
                dag - dag:
                </p>
            <p>
                xx:xx - xx:xx 
                </p>
            <p>
                (+47)*** ** ***
                </p></div>
            
        <div>
            <button><FontAwesomeIcon icon={faEarthAmericas} /></button>
            <p>
                Trondheim,
            </p>
            <p>
                Norge
            </p></div>
        </div>
    );
};

export default OmOss;
