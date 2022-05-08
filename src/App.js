import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// import "sweetalert2/src/sweetalert2.scss";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./componants/RequireAuth";
// import RequireAuth from "./componants/RequireAuth";
import Blog from "./componants/pages/Blog";
import Header from "./componants/Shared/Header/Header";
import Home from "./componants/pages/Home/Home/Home";
import ManageInventory from "./componants/pages/Inventory/ManageInventory/ManageInventory";
import AddInventoryItem from "./componants/pages/Inventory/AddInventoryItem/AddInventoryItem";
import AddItem from "./componants/pages/AddItem";
import ManageItem from "./componants/pages/ManageItem";
import MyItem from "./componants/pages/MyItem";
import NotFound from "./componants/pages/NotFound";
import SignUp from "./componants/Auths/SignUp";
import Inventory from "./componants/pages/Inventory/Inventory/Inventory";
import { ToastContainer } from "react-toastify";
import SignIn from "./componants/Auths/SignIn";
import Footer from "./componants/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addinventoryitem"
          element={
            <RequireAuth>
              <AddInventoryItem />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
        {/* <Route path="/inventory" element={<Inventory />}></Route> */}
        <Route
          path="/inventory/:itemId"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
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
