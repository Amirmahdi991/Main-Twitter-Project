import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import TweetCard from "../components/TweetCard";
import API, { get, responseValidator } from "../utils/api";

export default function Home() {
    const [tweets, setTweets] = useState(undefined);

    useEffect(() => {
        get(API.tweet.list, (data, status) => {
            if (responseValidator(status)) {
                setTweets(data.data);
            }
        });
    }, []);

    return (
        <div className="h-full flex flex-col">
            <PageTitle title="Recent Tweets" />
            <div className="overflow-auto no-scrollbar">
                {!tweets
                    ? "loading"
                    : tweets.length > 0
                    ? tweets.map((tweet) => (
                          <TweetCard tweet={tweet} key={tweet.id} />
                      ))
                    : "No Tweets"}
            </div>
        </div>
    );
}
