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
            Vandrelyst er en innovativ app utviklet med mål om å inspirere unge studenter til å utforske verden rundt dem. Vi er et team av eventyrlystne utviklere som tror på kraften reiser har for å utvide horisonter, bygge broer mellom kulturer og skape livslange minner. Vår app tilbyr en unik plattform hvor studenter kan oppdage nye reisemål, dele sine erfaringer og finne inspirasjon til sitt neste eventyr.

            Ved hjelp av Vandrelyst kan brukerne få tilgang til ærlige og detaljerte anmeldelser av reisemål fra andre unge reisende, finne skjulte perler verden over og planlegge sine reiser med innsikt fra et fellesskap de kan stole på. Vi legger stor vekt på personalisering, slik at hver bruker får anbefalinger som matcher deres interesser, budsjett og reisestil.

            Vi forstår viktigheten av å ha pålitelig og oppdatert informasjon når man planlegger reiser. Derfor arbeider vårt team utrettelig for å sikre at Vandrelyst er en ressurs som ikke bare inspirerer, men også informerer og støtter studenter gjennom hele reiseplanleggingsprosessen.

            I Vandrelyst er vi mer enn bare en app; vi er en bevegelse mot å gjøre verden mer tilgjengelig for unge studenter. Ved å dele erfaringer, tips og råd, hjelper vi hverandre med å ta informerte valg og skape meningsfulle reiseopplevelser. Bli med oss på denne reisen, og la oss utforske verden sammen.
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
            <p>Under <strong>Vårt arbeid</strong> ønsker vi å gi et innblikk i prosessen og filosofien bak utviklingen av <em>Vandrelyst</em>. Vårt arbeid er drevet av en lidenskap for teknologi og reiser, samt et ønske om å skape en plattform som virkelig beriker studenters liv ved å gjøre det enklere og mer spennende å oppdage nye steder.</p>

            <section>
                <h2>Utviklingsprosess</h2>
                <p>Vårt team følger en smidig utviklingsmetodikk, som gjør oss i stand til raskt å tilpasse oss brukernes behov og feedback. Vi legger stor vekt på brukersentrert design, hvor vi kontinuerlig tester og forbedrer appen basert på tilbakemeldinger fra vårt fellesskap av unge reisende. Dette sikrer at <em>Vandrelyst</em> ikke bare møter, men overgår forventningene til brukerne våre.</p>
            </section>

            <section>
                <h2>Teknologi og Innovasjon</h2>
                <p>Vi benytter oss av de nyeste teknologiene for å sikre en sømløs og engasjerende brukeropplevelse. Fra avanserte algoritmer for personaliserte anbefalinger til robuste systemer for innholdsadministrasjon, alt vi gjør er med mål om å gjøre <em>Vandrelyst</em> til den mest pålitelige og inspirerende reisekameraten for studenter.</p>
            </section>

            <section>
                <h2>Fellesskap og Samarbeid</h2>
                <p>Kjernen i vårt arbeid ligger i å bygge et sterkt og støttende fellesskap. <em>Vandrelyst</em> er mer enn bare en app; det er et felleskap hvor unge reisende kan dele sine erfaringer, oppdage nye kulturer og skape forbindelser med likesinnede. Vi tror på kraften av deling og samarbeid, og vi arbeider aktivt for å fremme en inkluderende og velkommen atmosfære innenfor vårt fellesskap.</p>
            </section>

            <section>
                <h2>Bærekraft og Ansvar</h2>
                <p>Vi er dypt engasjerte i å fremme bærekraftige reisevaner og støtter lokale samfunn. Vårt arbeid inkluderer å fremheve destinasjoner og opplevelser som bidrar positivt til miljøet og de lokale økonomiene. <em>Vandrelyst</em> oppfordrer til ansvarlig turisme, hvor opplevelser beriker både reisende og de stedene de besøker.</p>
            </section>

            <p>Gjennom <strong>Vårt arbeid</strong> ønsker vi å vise hvordan teknologi, innovasjon og et sterkt fellesskap kan samarbeide for å skape meningsfulle og uforglemmelige reiseopplevelser for studenter. Vi er stolte av det vi har oppnådd så langt og ser frem til å fortsette reisen sammen med dere.</p>
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
                vandre@vandrelyst.com
            </p>
            <p>
                sjef@vandrelyst.com
            </p></div>
        <div>
            <button><FontAwesomeIcon icon={faPhone} /></button>
            <p>
                Mandag - Fredag:
                </p>
            <p>
                08:00 - 16:00 
                </p>
            <p>
                (+47)900 15 308
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
