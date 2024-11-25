import MainMenu from "./MainMenu"

export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <strong>LOGO</strong>
                </div>
                <MainMenu />
            </div>
        </header>
    )
}