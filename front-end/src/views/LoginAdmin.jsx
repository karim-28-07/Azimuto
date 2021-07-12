import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios'

const LoginAdmin = (props) => {

  let history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validLoginAdmin = async () => {
    try {
      console.log("je suis validLoginAdmin")
      console.log("email", email)
      console.log("password", password)

      const response = await axios.post("http://localhost:8080/login/loginadmin", { email: email, password: password })

      console.log("Login User response", response)

      if (response.data.error) {

        alert("Email or password incorrect")

      } else {
        const token = response.data.token
        // const email = response.data.validUser.email

        console.log("token", token)
        // console.log("email :", email)

        localStorage.setItem("token", `${token}`)

        props.connectUser()

        console.log("localStorage :", localStorage.getItem("token"));

        history.push("/modification")
      }
    } catch (error) {
      alert("Email or password incorrect")
      console.error("error :", error)
    }
  }



  return (
    <MDBContainer>
      <MDBRow >
        <MDBCol className="row my-5">
          <MDBCard className="offset-3 col-6">
            <MDBCardBody>
              <>
                <p className="h4 text-center py-4">LoginAdmin</p>
                <div className="grey-text">

                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn to="/modification" color="cyan" type="submit" onClick={validLoginAdmin}>
                    Login Admin
                  </MDBBtn>
                </div>
              </>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginAdmin;