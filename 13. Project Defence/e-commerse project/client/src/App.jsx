import { Routes, Route} from "react-router-dom"

import { NotFound } from "./components/NotFound/NotFound"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { WomenCatalog } from "./components/Catalog/WomenCatalog/WomenCatalog"
import { MenCatalog } from "./components/Catalog/MenCatalog/MenCatalog"
import { Catalog } from "./components/Catalog/Catalog"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/women" element={<WomenCatalog />} />
                    <Route path="/catalog/men" element={<MenCatalog />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
