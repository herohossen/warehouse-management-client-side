import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./componants/pages/Blog";
import Header from "./componants/Shared/Header";
import Home from "./componants/pages/Home";
import AddItem from "./componants/pages/AddItem";
import ManageItem from "./componants/pages/ManageItem";
import MyItem from "./componants/pages/MyItem";
import NotFound from "./componants/pages/NotFound";
import SignUp from "./componants/Auths/SignUp";
import { ToastContainer } from "react-toastify";
import SignIn from "./componants/Auths/SignIn";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/manageitem" element={<ManageItem />}></Route>
        <Route path="/myitem" element={<MyItem />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
