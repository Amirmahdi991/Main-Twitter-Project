import { useDispatch } from "react-redux";
import { setSidebar } from "../redux/slices/layoutSlice";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function PageTitle(props) {
    const dispatch = useDispatch();

    const handleOpenSidebar = () => {
        dispatch(setSidebar(true));
    };
    return (
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
            <div className="md:hidden">
                <Bars3BottomRightIcon
                    className="w-8 h-8 text-gray-800"
                    onClick={handleOpenSidebar}
                />
            </div>
        </div>
    );
}
