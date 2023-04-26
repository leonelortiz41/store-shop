import { users } from "../assets/users"
import { phones } from "../assets/celulares";
export function initSession(user, password) {
    let found = false;
    let id;
    users.forEach(u => {
        if (user == u.nameUser && password == u.password) {
            id = u.id;
            found = true;
        }
    });
    if (found == true) {
        console.log("sesion iniciada")
        localStorage.setItem("session", `{"id":${id}}`)
        window.location.reload()
    }
    else {
        alert("Usuario o contraseña incorrecta")
    }
}

export function searchProduct(product) {
    let array = []
    let res = "";
    let pos = -1;
    phones.forEach(element => {
        pos = element.name.search(product);
        if (pos != -1 && product!=undefined) array.push(element.id);
        pos=-1;
    });
    return array;
}