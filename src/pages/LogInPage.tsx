import UserPanel from "../components/UserPanel";



const LogInPage = () => {


    return (
        <div className="LogInPage">
            {/* index er om du vil logIn eller registerUser som funksjon
                page er tittelen som vises
                linkToPage er beskrivelse av hva den nederste knappen router til
                link er den faktiske lenken */}
            <UserPanel index={0} page="Logg inn" linkToPage="Opprett bruker" link="/registrering"/>
        </div>
    )
};

export default LogInPage;