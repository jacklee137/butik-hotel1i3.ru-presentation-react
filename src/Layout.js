import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";

export default function Layout() {
    return (
        <>
            <div className="page" id="top">
            <div className="page__box">
                <Header />

                <Outlet />

                <Footer />
                </div>
                <a href="#top" id="scroll-top" className="page__btn js-anchor"></a>
            </div>
            <div className="body__popup popup" id="room_detail_popup" data-popup-name="room_detail">

            </div>
            <script>
          alert(214314)
          // document.getElementsByClassName

          document.addEventListener('DOMContentLoaded', function() {
            document.getElementsByClassName("header__address").innerHTML = "Hello JavaScript!"
          }, false);



        </script>
        </>
    );
}
