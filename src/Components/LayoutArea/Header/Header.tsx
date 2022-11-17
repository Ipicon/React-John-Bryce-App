import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <AuthMenu />
			<h1>Northwind Traders</h1>
        </div>
    );
}

export default Header;
