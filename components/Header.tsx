import Image from "next/image";

function Header() {
    return (
    <header>
        <Image src="https://drive.google.com/file/d/16xMvUGMX8H3orNaEkB7OG1OdqEgvdIPC/view?usp=sharing"
            alt="TaskSync Logo" width={300} height={100}
            className="w-44 md:w-56 pb-10 md:pb-0 object-contain"       
        />
        
    </header>
    );

}
export default Header