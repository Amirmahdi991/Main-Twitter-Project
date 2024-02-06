import SidebarTweetItem from "./SidebarTweetItem";

export default function SidebarTweets() {
    return (
        <div className="mt-2 h-full overflow-auto no-scrollbar">
            <p className="text-sm text-gray-400 mb-2">Tweets</p>
            {Array.from(Array(10).keys()).map((item) => (
                <SidebarTweetItem key={item} />
            ))}
        </div>
    );
}
