import { Outlet } from "react-router"
import MainMenu from "../components/MainMenu"

export default function DeafaultLayout() {


    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <strong>LOGO</strong>
                    </div>
                    <MainMenu />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="container">
                    <span>&copy; {new Date().getFullYear()}</span>
                </div>
            </footer>
        </>
    )
}