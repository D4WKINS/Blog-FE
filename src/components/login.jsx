import React from "react"
import {Form,Button} from "react-bootstrap"
import {Component} from "react"
import {withRouter,Link} from "react-router-dom"
import styled from "styled-components"

const FormContainer =styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

    @media (max-width: 768px){
            width:600px;
    }
`

class Login extends Component {
    
    render() { 
        return(
            <FormContainer>
             <Form className="pt-5">
           <div className="text-center">Dont have an account?<Link to="/signup"> Sign Up Here</Link></div>
            <div className="text-center my-2">or</div>

            <a href="http://localhost:3001/users/googleLogin" className="d-block text-center p-2" style={{border:"solid 2px lightgrey",width:"100%"}}>Login with Google</a>
               
                <h3 className="text-left mt-3">Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </FormContainer>
        )
    }
}

export default withRouter(Login) ;