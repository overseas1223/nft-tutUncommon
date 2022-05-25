import { useState } from "react";
import Admin from "./admin";
import Login from "./password";

const Admin_role  = () => {
    const [isLogin, setIslogin] = useState(false);

    return (
        <>{isLogin ? <Admin /> :<Login setIsChecked={setIslogin}/>}</>
    )
}

export default Admin_role;