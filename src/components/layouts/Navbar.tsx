import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import wayfareIcon from '../../assets/wayfare-icon.png';

export default function Navbar() {
    const navigationItems = [
        {
            id: 1,
            label: "Trips",
            url: '/trips'
        }
    ]
    return (
        <nav className="navigation w-full p-5 bg-surface-light">
            <div className="container flex flex-row justify-between items-center">
                <div className="navigation-brand">
                    <Link className="text-copy-primary flex flex-row gap-2.5 items-center" to="/">
                        <img src={wayfareIcon} alt="Wayfare icon" width={50} height={50} className="rounded-sm" />
                        {/* Wayfare */}
                    </Link>
                </div>
                <div className="navigation-items flex flex-row gap-5">
                    <ul className="hidden md:flex flex-row gap-5">
                        {navigationItems.map(item => (
                            <li><Link className="text-copy-primary" key={item.id} to={item.url}>{item.label}</Link></li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}