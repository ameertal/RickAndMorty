import ToggleTheme from "../../Shared/ToggleTheme/ToggleTheme";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			        <h1>Rick and Morty Characters</h1>
                    <ToggleTheme/>
        </div>
    );
}

export default Header;
