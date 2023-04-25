import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Create } from "./Create";
import { Contacts } from "./Contacts";
import { BlogDetails } from "./BlogDetails";
import { NotFound } from "./NotFound";


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
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
