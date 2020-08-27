import * as React from "react";
import {GoogleLogout} from "react-google-login";
import * as secret from "./oauth2.keys"

const clientId = secret.secret.web.client_id;

function Logout() {
    const onSuccess = () => {
        console.log('Logged out!')
    }

    return (
        <div>
            <GoogleLogout clientId={clientId}
                          buttonText='Logout'
                          onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;