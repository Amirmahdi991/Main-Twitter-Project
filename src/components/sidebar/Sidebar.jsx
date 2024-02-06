import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import SidebarMenu from "./SidebarMenu";
import SidebarProfile from "./SidebarProfile";
import SidebarTweets from "./SidebarTweets";
import { useDispatch } from "react-redux";
import { setSidebar } from "../../redux/slices/layoutSlice";

export default function Sidebar(props) {
    const dispatch = useDispatch();

    const handleCloseMobileSidebar = () => {
        dispatch(setSidebar(false));
    };

    return (
        <div
            className={`flex flex-col flex-1 rounded-lg bg-white p-4 pb-0 h-full ${
                props.mobile ? "w-full" : "max-w-[280px]"
            }`}
        >
            <div
                className={`flex items-center mb-3 ${
                    props.mobile ? "justify-between" : "justify-center"
                }`}
            >
                <Logo />
                {props.mobile && (
                    <div onClick={handleCloseMobileSidebar}>
                        <XMarkIcon className="w-8 h-8 text-gray-800" />
                    </div>
                )}
            </div>
            <hr />
            <SidebarProfile />
            <hr />
            <SidebarMenu />
            <hr />
            <SidebarTweets />
        </div>
    );
}
