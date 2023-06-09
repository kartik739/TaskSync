import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
    <header>
        <Image src="https://links.papareact.com/c2cdd5"
        alt="Trello logo"
        width={300}
        height={100}
        />
        <div>
            {/*search box */}
            <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex  ">
                <MagnifyingGlassIcon className="h-6 w-6  text-gray-400"/>
                <input type="text" placeholder="Search"/>
                <button hidden>Search</button>
            </form>
            {/*Avatar */}
        </div>
    </header>
    );

}
export default Header