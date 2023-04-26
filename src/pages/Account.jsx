import { users } from "../assets/users"
export function Account() {
    let session = JSON.parse(localStorage.getItem("session")) || null;
    session = session != null ? session.id : null
    let user;
    users.forEach(users => {
        if (users.id == session) user = users;
    });
    return (
        <>
            <div className="container d-sm-flex justify-content-center m-auto mt-3">
                <div style={{ maxHeight: "250px", maxWidth: "250px" }} className=" w-100 h-100  m-auto  col-sm-3 p-0 shadow overflow-hidden rounded-circle ">
                    <img src={user.photo}  style={{ width: "100%" }}></img>
                </div>
                <div className="p-3 mt-3 ms-1 m-auto d-flex  flex-column rounded" style={{"backdrop-filter": "blur(2px)",background:"rgba(200,200,200,0.5)"}}>
                    <h2>{user.nameSurname}</h2>
                    <div className="d-flex mb-3 flex-column">
                        <p className="p-0 my-0">username: {user.nameUser}</p>
                        <p className="p-0 my-0">email: {user.email}</p>
                        <p className="p-0 my-0">age: {user.age}</p>
                        <p className="p-0 my-0">address: {user.address}</p>
                    </div>
                    <button className="btn btn-red m-auto" onClick={() => {
                        localStorage.removeItem("session")
                        window.location.href = "/"
                    }}>Sign off</button>
                </div>

            </div>
        </>
    )
}