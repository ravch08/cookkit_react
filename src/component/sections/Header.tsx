import { Link } from "react-router-dom";
import { logo } from "../utils/helper";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          <Link to="/">
            <img src={logo} alt="logo" width={120} className="py-8" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
