import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Create } from "./Create";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { BlogDetails } from "./BlogDetails";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
