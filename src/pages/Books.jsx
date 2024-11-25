import MainMenu from "../components/MainMenu";

export default function Books() {

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
                <div className="container">
                    <h1>Books Page</h1>
                </div>
            </main>
            <footer>
                <div className="container">
                    <span>&copy; {new Date().getFullYear()}</span>
                </div>
            </footer>
        </>
    )
}