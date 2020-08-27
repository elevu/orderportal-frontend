import * as React from "react";
import {GoogleLogin} from "react-google-login";
import * as secret from "./oauth2.keys"

const clientId = secret.secret.web.client_id;

function Login() {
    const onSuccess = res => {
        console.log('success' + res.profileObj)
    }

    const onFailure = res => {
        console.log('failed')
    }

    return (
        <div>
            <GoogleLogin clientId={clientId}
                         buttonText="Login with Google"
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy={'single_host_origin'}
                         isSignedIn={true}
            />
        </div>
    )
}

export default Login;