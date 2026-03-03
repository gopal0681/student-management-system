import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ListStudents from "./Components/ListStudents";
import ViewStudent from "./Components/ViewStudent";
import CreateOrUpdateStudent from "./Components/CreateOrUpdateStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<ListStudents />} />
            <Route path="/add-student/:id" element={<CreateOrUpdateStudent />} />
            <Route path="/view-student/:id" element={<ViewStudent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;