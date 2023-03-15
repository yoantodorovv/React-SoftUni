import { Routes, Route} from "react-router-dom"

import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { WomenCatalog } from "./components/WomenCatalog/WomenCatalog"
import { MenCatalog } from "./components/MenCatalog/MenCatalog"
import { Catalog } from "./components/Catalog/Catalog"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/women" element={<WomenCatalog />} />
                    <Route path="/men" element={<MenCatalog />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
