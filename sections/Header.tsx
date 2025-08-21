import MenuIcon from '@/assets/icons8-menu.svg'


export const Header = () => {
    return (
        <header>
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm"> 
            <p>Welcome to Zara's Portfolio</p>
        </div>
        <div className="py-5">
            <div className="container">
                <MenuIcon />
            </div>

        </div>
    </header>
    );
};