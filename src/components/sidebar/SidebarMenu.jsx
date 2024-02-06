import {
    ArrowLeftOnRectangleIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
    {
        name: "Home",
        path: "/",
        icon: <HomeIcon className="w-5 h-5" />,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <UserIcon className="w-5 h-5" />,
    },
];

export default function SidebarMenu() {
    return (
        <div className="my-2">
            <p className="text-sm text-gray-400 mb-2">Menu</p>
            <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <SidebarMenuItem
                        key={item.path}
                        name={item.name}
                        path={item.path}
                        icon={item.icon}
                    />
                ))}
                <div className="text-gray-800 text-lg hover:bg-gray-100 py-2 px-4 rounded-lg flex items-center gap-2 cursor-pointer">
                    <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}
