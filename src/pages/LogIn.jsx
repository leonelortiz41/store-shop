import { useState } from "react";
import { Modal } from "../components/Modal";
import { initSession } from "../functions/functions";
export function LogIn({ isOpen, closeModal }) {
    const [nameUser, setNameUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Modal tittle="Log In" isOpen={isOpen} closeModal={closeModal}>
            <form onSubmit={(e) => { e.preventDefault(); initSession(nameUser, password) }}>
                <input type="text" placeholder='user' className="btn m-auto mt-2" onChange={(e) => setNameUser(e.target.value)} />
                <input type="password" placeholder='password' className="btn m-auto mt-2" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="send btn m-auto mt-2 btn-outline-primary" value="Sign Up" />


                <div className="task-background  nota">
                    <p>Nota! puede ingresar con cuentas de ejemplo con los siguientes usuarios: <br />
                        username: pili <br />
                        password: 1234 <br />
                        <br />
                        username: leo <br />
                        password: 1234 <br />
                    </p>

                </div>
            </form>
        </Modal>
    )
}