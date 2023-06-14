import { phones } from "../assets/celulares"
import { useParams } from "react-router-dom"
export function Products() {
    const params = useParams();
    console.log(params)
    const id = params.id;
    return (
        <div className="col-12 d-block col-md-10 m-auto task-background">
            <div className="  mx-auto d-sm-flex mt-3 justify-content-center">
                <div className="m-auto col-sm-5 align-center">
                    <img className="m-auto d-block" style={{ maxWidth: "230px" }} src={phones[id].image}></img>
                </div>
                <div className="col-sm-6 p-3 ">
                    <h1 className="text-center mt-3 text-uppercase">{phones[id].name}</h1>
                    <h5>califaction</h5>
                    <h5>characteriscs: {phones[id].capacity}</h5>
                    <h3 className=" text-success">${phones[id].price}</h3>
                    <p>shipping</p>
                    <button className="btn btn-add d-block mx-auto p-2">Add to shoping cart</button>
                    <button className="btn btn-buy d-block mx-auto p-2">buy</button>
                </div>
            </div>
            <div>
                <h5>Release year: {phones[id].year}</h5>
                <h5 className="mt-10">Description: {phones[id].description}</h5>
            </div>

        </div>
    )
}