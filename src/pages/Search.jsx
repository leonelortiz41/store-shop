import { resSearch } from "../components/Header";
import { phones } from "../assets/celulares";
export function Search() {
    let i = 0;
    let array = []
    let res=JSON.parse(resSearch)
    if(res.length==0) array =
    (<div>
        <h1>No se encontro lo que buscaba...</h1>
    </div>)

        res.forEach((res) => {
            phones.forEach((phone) => {
                if (res == phone.id) {
                    array.push(
                        <div className='col-11  product d-flex shadow-sm p-2 border-bottom rounded  mx-auto' key={phone.id} onClick={() => {
                            const link= document.createElement("a")
                            link.setAttribute("href",`products/${phone.id}`)
                            link.click();
                          }}>
                            <img className="col-sm-3" style={{ maxWidth: "80px" }} src={phone.image}></img>
                            <h2 className='col-sm-4 m-auto'>{phone.name}</h2>
                            <h3 className='col-sm-2 text-success m-auto'>${phone.price}</h3>
                          </div>
                    )
                }
            })
            i++;
        })
        return (
            <>
                {array}
            </>
        )
}