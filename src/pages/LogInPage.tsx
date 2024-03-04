import { Navbar } from "react-bootstrap";
import LogInPanel from "../components/UserPanel";
import Footer from "../components/Footer";


const LogInPage = () => {


    return (
        <div className="LogInPage">
            <LogInPanel index={0} page="Logg inn" linkToPage="Opprett bruker" link="/registrering"/>
        </div>
    )
};

export default LogInPage;