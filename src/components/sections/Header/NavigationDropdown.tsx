import Container from "@/components/ui/Container"
import LogoComponent from "../../elements/Common/LogoComponent"
import { MenuItem } from "./MenuItem"

const NavigationDropdown = () => {
    return (
        <Container className="grid content-between h-full pb-4">
            <nav className="mb-12 2xl:mb-28">
                <ul>
                    {menuItems.map((item, i) => (
                        <MenuItem key={i} title={item.title} path={item.path} />
                    ))}
                </ul>
            </nav>
            <LogoComponent />
        </Container >
    )
}

export default NavigationDropdown

const menuItems = [
    {
        title: "Who We Are",
        path: ""
    },
    {
        title: "Why Choose Us",
        path: ""
    },
    {
        title: "Services",
        path: ""
    },
    {
        title: "Clients",
        path: ""
    },
    {
        title: "Contact Us",
        path: "/contact"
    }
]