import "./App.css";
import Title from "./Title.jsx";
import "./Style.css";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Payment from "./Payment.jsx";
import Signup from "./Signup.jsx";
import Confirm from "./Confirm.jsx";
import Navbar from "./Component/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Routes/Contact";
import ChangeAddress from "./ChangeAddress.jsx";
import Dairypage from "./Dairypage.jsx";
import Snacks from "./Snacks.jsx";
import Coldrinkpage from "./Coldrinkpage.jsx";
import Fruitspage from "./Fruitspage.jsx";
import Petpage from "./Petpage.jsx";
import Freshpage from "./Freshpage.jsx";
import Pharmacypage from "./Pharmacypage.jsx";
import Menupage from "./Menupage.jsx";
import Panpage from "./Panpage.jsx";
import Desertpage from "./Desertpage.jsx";
import Attapage from "./AttaPage.jsx";
import Babypage from "./Babypage.jsx";
import Verificationpage from "./Verificationpage.jsx";
import Cashpage from "./Cashpage.jsx";
import Categorypage from "./Categorypage.jsx";

function App() {
//   return(
//     <div>
//       <Cashpage/>
//     </div>
//   );
// }
  
  const location = useLocation();

  return (
    <div>
      
      
      
      {location.pathname === "/" && <Login />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/title" element={<Title />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/changeAddress" element={<ChangeAddress/>} />
        <Route path="/dairypage" element={<Dairypage/>} />
        <Route path="/snacks" element={<Snacks/>} />
        <Route path="/coldrinkpage" element={<Coldrinkpage/>} />     
        <Route path="/Fruitspage" element={<Fruitspage/>} />
        <Route path="/Petpage" element={<Petpage/>} />
        <Route path="/freshpage" element={<Freshpage/>} />
        <Route path="/pharmacypage" element={<Pharmacypage/>} />
        <Route path="/menupage" element={<Menupage/>} />
        <Route path="/titlepage" element={<Title/>} />
        <Route path="/panpage" element={<Panpage/>} />
        <Route path="/desertpage" element={<Desertpage/>} />
        <Route path="/attapage" element={<Attapage/>} />
        <Route path="/babypage" element={<Babypage/>} />
        <Route path="/verificationpage" element={<Verificationpage/>} />
        <Route path="/confirm" element={<Title/>} />
         <Route path="/cashpage" element={<Cashpage/>} />
          <Route path="/categorypage" element={<Categorypage/>} />
           <Route path="/shopnow" element={<Menupage/>} />

      </Routes>
     
    </div>
  );
}

export default App;