import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';
import {form} from '../../scripts/form';



export default function Login() {

    useEffect(() => {
        form();
    });

    return (
        <>
            <head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>Login</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                // <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />
            </head>
            <div className="container">
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="myRightCtn">
                                <div className="box">
                                    <Image src="/static/img.png" width={85} height={85} alt="Picture of login" />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Page de connexion au systeme</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="myLeftCtn">
                                <form className="myForm text-center">
                                    <header>
                                        <h2 className="login">LOGIN</h2>
                                    </header>

                                    <div className="FormContent">
                                        <div className="md-form mb-0">
                                            <input type="text" name="username" className="form-control Thin js-input" id="1" />
                                            <label id="label-1">Username</label>
                                        </div>
                                        <div className="md-form mb-0">
                                            <input type="password" name="password" className="form-control Thin js-input" id="2" />
                                            <label id="label-2">Password</label>
                                        </div>
                                        <div className="md-form mb-0">
                                            <label>
                                                <input id="check_1" name="check_1" type="checkbox" required /><small>    Garder ma session ouverte</small>
                                                <div className="invalid-feedback"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="FormFooter">
                                        <div className="md-form mb-0">
                                            <a href="#" className="passForgot">Mot de passe oublié ?</a>
                                        </div>
                                        <div className="md-form mb-0">
                                            <input type="submit" className="butt text-center ml-4" value="   LOGIN NOW  &#x27F6;" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
