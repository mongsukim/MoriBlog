import {Post} from ".contentlayer/generated";
import {format} from "date-fns";
import {parseISO} from "date-fns/fp";
import Link from "next/link";

interface PostCardProps {
    post: Post;
}

export function PostCard({post}: PostCardProps) {
    return (
        <Link href={post.url}>
            <div className="mb-4 flex flex-col bg-slate-100 p-5">
                <time dateTime={post.date}>{format(parseISO(post.date), "yyyy-MM-dd")}</time>
                <p className="font-bold text-2xl mb-1 text-green-600 hover:text-pink-600">{post.title}</p>
            </div>
        </Link>
    );
}