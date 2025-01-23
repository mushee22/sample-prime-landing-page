import Container from "@/components/ui/Container"
import LogoComponent from "@/components/elements/Common/LogoComponent"
import { MenuItem } from "@/components/sections/Header/MenuItem"

interface NavigationDropdownProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationDropdown = ({ setOpen }: NavigationDropdownProps) => {
    return (
        <div className="grid content-between h-full pb-4">
            <nav className="mb-12 2xl:mb-28">
                <ul>
                    {menuItems.map((item, i) => (
                        <MenuItem key={i} title={item.title} path={item.path} setOpen={setOpen} />
                    ))}
                </ul>
            </nav>
            <div className="fixed bottom-0 inset-x-0 h-fit"><LogoComponent /></div>
        </div >
    )
}

export default NavigationDropdown

const menuItems = [
    { title: "Who We Are", path: "/#who-we-are" },
    { title: "Why Choose Us", path: "/#why-choose-us" },
    { title: "Services", path: "/services" },
    // { title: "Clients", path: "/#clients" },
    { title: "Contact Us", path: "/contact" }
]