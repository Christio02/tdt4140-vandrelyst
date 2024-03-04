import { Navbar } from "react-bootstrap";
import LogInPanel from "../components/UserPanel";
import Footer from "../components/Footer";


const RegisterUserPage = () => {


    return (
        <div className="LogInPage">
            <LogInPanel index={1} page="Registrer deg" linkToPage="Tilbake til innlogging" link='/logginn'/>
        </div>
    )

}

export default RegisterUserPage;