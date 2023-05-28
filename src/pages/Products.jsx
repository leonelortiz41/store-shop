import { phones } from "../assets/celulares"
import { useParams } from "react-router-dom"
export function Products() {
    const params = useParams();
    console.log(params)
    const id = params.id;
    return (
        <>
            <div className="container-fluid mx-auto d-sm-flex mt-3 justify-content-center">
                <div className=" align-center">
                    <img className="m-auto d-block w-100" style={{ maxWidth: "180px" }} src={phones[id].image}></img>
                </div>
                <div className="col-sm-8 p-3 task-background">
                    <h1 className="text-center mt-3 text-uppercase">{phones[id].name}</h1>
                    <h5>Release year: {phones[id].year}</h5>
                    <h5>Storage capacity: {phones[id].capacity}</h5>
                    <h5 className="mt-10">Description: {phones[id].description}</h5>
                    <h3 className=" text-success">${phones[id].price}</h3>
                    <button className="btn btn-success d-block mx-auto p-2">Add to shoping cart</button>
                </div>
            </div>

        </>
    )
}