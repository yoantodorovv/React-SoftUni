import { MainAbout } from "./components/About/MainAbout"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { MainMenu } from "./components/MainMenu/MainMenu"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <MainMenu />
                <MainAbout />
            </main>
            <Footer />
        </div>
    )
}

export default App
