import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
    <header>
        <div className="flex felx-col md:flex-row items-row items-center p-5 bg-gray-500/10">
        <Image src="https://links.papareact.com/c2cdd5"
        alt="Trello logo"
        width={300}
        height={100}
        className="w-44 md:-56 pb-10 md:pb-0 object-contain"
        />
        <div>
            {/*search box */}
            <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial  ">
                <MagnifyingGlassIcon className="h-6 w-6  text-gray-400"/>
                <input type="text"
                 placeholder="Search"
                 className="flex-1 outline-none p-2"
                 />
                <button type="submit">Search</button>
            </form>
            {/*Avatar */}
        </div>
        </div>
    </header>
    );

}
export default Header