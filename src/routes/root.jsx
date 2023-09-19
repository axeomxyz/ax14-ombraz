import App from "../App";
import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
    <Header></Header>
    <Navbar></Navbar>
    <div id="detail">
        <Outlet />
      </div>
    </>
        )}