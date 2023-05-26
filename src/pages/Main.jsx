import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { phones } from '../assets/celulares.js'
import { users } from '../assets/users.js'
import iphone from '../assets/iphone.png'
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { BsFillHeartFill } from "@react-icons/all-files/bs/BsFillHeartFill";
import { ads } from '../assets/ad/ad.js'

const openNewWin = () => {
}
export function Main() {

  let session = JSON.parse(localStorage.getItem("session")) || null;
  session = session != null ? session.id : null
  let [kay, setKay] = useState(null)
  if (session != null)
    users[session].favorites.forEach((fav) => {
      phones.forEach((phone) => {
        if (fav == phone.id)
          phone.favorite = true;
      })
    });
  const card = phones.map((phone) => (
    <div className='col-11  product d-flex shadow-sm p-2 border-bottom rounded  mx-auto' key={phone.id} onClick={() => {
      window.location.href = `/products/${phone.id}`
      stop
    }}
      onMouseMove={() => {
        setKay(phone.id)
      }
      }
      onMouseOut={() => {
        setKay(null)
      }}
    >
      <img className="col-sm-3" style={{ maxWidth: "80px" }} src={phone.image}></img>
      <h2 className='col-6 m-auto'>{phone.name}</h2>
      <div className='col- m-auto d-sm-flex '>
        <h3 className=' text-success m-auto'>${phone.price}</h3>
        <button className='btn text-success' style={{ visibility: (kay == phone.id || phone.favorite == true) ? "visible" : "hidden" }}
          onClick={(e) => {
            e.stopPropagation();
            phone.favorite = true;
          }}>{(phone.favorite == undefined) ? <BiHeart className=' h2' /> : <BsFillHeartFill className='h2' />}</button>
      </div>
    </div>
  ))
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div style={{ maxHeight: "380px" }} className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block h-100 w-100" src={ads[0].img} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block h-100 w-100" src={ads[1].img} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block h-100 w-100" src={ads[2].img} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon  rounded-circle p-2 bg-dark m-auto" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon  rounded-circle p-2 bg-dark m-auto" aria-hidden="true"></span>
        </a>

      </div>
      <div className='container-fluid mt-3'>
        <div className='container col-md-10 mt-2 m-auto'>
          {card}
        </div>
      </div>
    </>
  )
}

