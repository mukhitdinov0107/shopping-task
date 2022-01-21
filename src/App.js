import {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Cart from "./Components/Cart/Cart";
function App() {
    const [cartOpened, setCartOpened] = useState(true);
    console.log(cartOpened)
    return (
        <div className="App">
            <Navbar onOpen={() => setCartOpened(false)}/>
            <Content/>
            <Cart opened = {cartOpened}/>
        </div>
    );
}

export default App;
