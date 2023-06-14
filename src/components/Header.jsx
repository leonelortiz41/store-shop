import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiCart } from "@react-icons/all-files/bi/BiCart";
import { GiBuyCard } from "@react-icons/all-files/gi/GiBuyCard";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart";
import { RiAccountCircleLine } from "@react-icons/all-files/ri/RiAccountCircleLine";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { useModal } from "../hooks/useModal"
import { useState } from "react";
import { users } from "../assets/users";
import { searchProduct } from "../functions/functions";

export let resSearch = sessionStorage.getItem("search") || []

function Header() {
  const [isOpen, openModal, closeModal] = useModal();
  const [search, setSearch] = useState();
  let session = JSON.parse(localStorage.getItem("session")) || null;
  session = session != null ? session.id : null
  console.log()
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light header ">
        <div className="container-fluid d-flex justify-content-around" style={{ }} >
          <div className=" col-2 p-1  h-100">
            <img src={logo} className="h-100 logo" style={{maxHeight:"70px", maxWidth:"80px"}} onClick={() => window.location.href = "/"}></img>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse  justify-content-between navbar-collapse " id="navbarSupportedContent">

            <form className="col-5 d-flex justify-content-between my-auto search rounded px-1 "
              onSubmit={(e) => {
                e.preventDefault();
                if (search == undefined) {
                  window.location.href = "/"
                  return;
                }
                resSearch = searchProduct(search)
                sessionStorage.setItem("search", JSON.stringify(searchProduct(search)))
                window.location.href = "/search"
              }}>
              <input className="col-10 my-auto h-100 border-0" type="search" placeholder="Search" aria-label="Buscar" onChange={(e) => { setSearch(e.target.value); }} />
              <button className="btn d-flex justify-content-center" type="submit" ><BiSearchAlt /></button>
            </form>

            <ul className="navbar-nav btn-group  mb-2 mb-lg-0">
              <li className="nav-item btnNavChildren">
                <button className="btn nav-item" onClick={session == null ? openModal : () => {
                  window.location.href = "/myAccount"
                }} >
                  {(session == null) ? <RiAccountCircleLine className="m-1" /> : <img src={users[session].photo} className="rounded-circle m-1 " style={{ maxHeight: "25px" }} />}{(session == null) ? "account" : users[session].nameSurname}
                </button>
              </li>
              <li className="nav-item nav-item btnNavChildren">
                <a className="btn  nav-item" href="/shopingCart"><BiCart />Cart</a>
              </li>
              <li className="nav-item nav-item btnNavChildren dropdown">
                <a className="btn  nav-item" href="/favorites"><BiHeart />Favorites</a>
              </li>
            </ul>
            <LogIn isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </nav>
    </>
  )

}

export default Header
