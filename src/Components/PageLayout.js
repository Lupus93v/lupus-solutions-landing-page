import React from "react"
import {Outlet} from "react-router-dom"
import Footer from "./Footer"


export default function PageLayout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}