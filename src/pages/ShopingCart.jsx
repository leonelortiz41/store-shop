import { users } from "../assets/users";
import { phones } from "../assets/celulares"
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd";

export function ShopingCart() {
    let userSession = JSON.parse(localStorage.getItem("session")) || -1;
    userSession= userSession!= -1 ? userSession.id : -1;
    let user;
    let shopCart = [], i = 0, total = 0;
    console.log(userSession)
    if (userSession != -1) {
    users.forEach((u) => { if (u.id == userSession) user = u })
        user.shopingCart.forEach((u) => {
            phones.forEach((cel) => {
                if (u == cel.id) {
                    shopCart.push(
                        <div key={i} className="border-3 border-bottom justify-content-between d-flex p-2">
                            <img src={cel.image} className="col-sm-3" style={{ maxWidth: "95px" }}></img>
                            <h3 className="col-sm-4 my-auto">{cel.name}</h3>
                            <div className="col-sm-3  justify-content-between tex-center my-auto d-flex">
                                <button className="btn rounded d-flex text-white" style={{ border: "none", background: "var(--skyblue2)" }} >+</button>
                                <output className="btn rounded d-flex">{1}</output>
                                <button className="btn rounded d-flex text-white" style={{ border: "none", background: "var(--skyblue2)" }} >-</button>
                            </div>
                            <h5 className="col-sm-2  my-auto">${cel.price}</h5>
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
        <div className="col-md-10  p-5 m-auto mt-5">
            <h1 className="m-auto text-center">There is not data.</h1>
        </div>
    return (
        <div className="container mx-auto mt-2 justify-content-center align-center d-md-flex">
            <div className=" task-background overflow-auto mx-auto" style={{ height: "480px" }}>
                {shopCart}
            </div>
            <div className="col-sm-3 m-auto">
                <h1 className="text-center">Total ${total}</h1>
                <button className="d-block m-auto p-2 btn btn-add col-sm-4">buy</button>
            </div>
        </div>
    )
}