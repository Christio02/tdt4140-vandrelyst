import RegisterPanel from "../components/RegisterPanel";


const RegisterUserPage = () => {


    return (
        <div className="RegisterPage">
            <RegisterPanel index={1} page="Registrer deg" linkToPage="Tilbake til innlogging" link='/logginn'/>
        </div>
    )

}

export default RegisterUserPage;