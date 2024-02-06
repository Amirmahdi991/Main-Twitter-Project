import { HeartIcon } from "@heroicons/react/24/solid";

export default function SidebarTweetItem() {
    return (
        <div className="border p-2 rounded-lg mb-4">
            <div className="flex items-center justify-between gap-2">
                <p>Mahdi Sharifi</p>
                <div className="flex items-start justify-center gap-1">
                    <HeartIcon className="w-5 h-5 text-rose-600" />
                    <p className="text-sm text-rose-600">20</p>
                </div>
            </div>
            <p className="text-sm text-justify mt-1 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio praesentium.
            </p>
        </div>
    );
}
