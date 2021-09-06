import React from "react"
import { Redirect} from "react-router-dom"

const url = ""

const loginGoogle = () => {
    return <Redirect to="http://localhost:3001/user/googleLogin" />;
}

export default loginGoogle