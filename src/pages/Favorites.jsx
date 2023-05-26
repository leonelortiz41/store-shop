import { users } from "../assets/users";
import { phones } from "../assets/celulares"
export function Favorites() {
    let userSession = JSON.parse(localStorage.getItem("session")) || 0;
    userSession = userSession != 0 ? userSession.id : 0;
    let user;
    let shopCart = [], i = 0, total = 0;
    if (userSession != 0) {
        users.forEach((u) => { if (u.id == userSession) user = u })
        user.favorites.forEach((u) => {
            phones.forEach((cel) => {
                if (u == cel.id) {
                    shopCart.push(
                        <div key={i} className="col-sm-10 mx-auto card-favorite shadow-sm rounded m-1 d-flex">
                            <img src={cel.image} className="col-3" style={{ maxWidth: "80px" }}></img>
                            <h3 className="col-4 m-auto">{cel.name}</h3>
                            <h5 className="col-2 text-success m-auto">${cel.price}</h5>
                            <button className="col-2 m-auto h6  btn btn-red" >remove</button>
                        </div>
                    )
                    i++;
                    total += cel.price
                }
            })
        }
        )
    }
    else shopCart =
        <div className="col-md-10 border border-3 p-5 m-auto mt-5">
            <h1 className="m-auto text-center">No hay datos.</h1>
        </div>
    return (
        <>
            <div className="container mt-3">
                {shopCart}
            </div>
        </>
    )
}