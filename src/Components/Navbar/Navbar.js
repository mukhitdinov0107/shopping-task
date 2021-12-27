import "./Navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <div className="upbar">
                <img src={"/img/logo.png"} alt="" className={"logo"} width={"125px"} height={"125px"}/>
                <input type="text" className={"search"}/>
                <a className={"icon cart"}>Cart <i className="fas fa-shopping-cart"/></a>
                <a className={"icon user"}>Log in <i className="fas fa-user"/></a>
            </div>
            <div className="downbar">
                <ul className="downbar_items">
                    <li><a href="">ELECTRONICS</a></li>
                    <li><a href="">FASHION</a></li>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SPORTS</a></li>
                    <li><a href="">GROCERY</a></li>
                    <li><a href="">BEAUTY & FRAGNANCE</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;