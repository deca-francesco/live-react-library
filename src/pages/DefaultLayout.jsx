import { Outlet } from "react-router"
import MainMenu from "../components/MainMenu"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function DeafaultLayout() {


    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}