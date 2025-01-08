import { Cross as Hamburger } from 'hamburger-react';
import { Dispatch, SetStateAction } from 'react';

interface HamburgerMenuProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, setOpen }) => {
    return (
        <div className='border border-primary/10 rounded-xl flex items-center justify-center w-14 h-14'>
            <Hamburger toggled={isOpen} toggle={setOpen} color='#F3951D' direction='right' />
        </div>
    );
};

export default HamburgerMenu;
