export default function Books() {

    return (
        <>
            <header>
                <div className="logo">
                    <strong>LOGO</strong>
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                    <a href="/about">About</a>
                    <a href="/contacts">Contacts</a>
                </nav>
            </header>
            <main>
                <h1>Books Page</h1>
            </main>
            <footer>
                <span>&copy; {new Date().getFullYear()}</span>
            </footer>
        </>
    )
}