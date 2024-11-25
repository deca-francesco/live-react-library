import MainMenu from "../components/MainMenu";

export default function Home() {

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
                    <h1>Home Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis placeat qui quasi nisi odio, sit itaque dolorem alias, modi, similique iusto saepe velit veniam dolorum vel doloribus! Quisquam, eos aspernatur?</p>
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