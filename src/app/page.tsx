import {Post, allPosts} from ".contentlayer/generated";
import {compareDesc} from "date-fns";
import {notFound} from "next/navigation";
import Link from "next/link";
import IconGithub from 'src/components/icon/Github';
import IconLinkedin from 'src/components/icon/LinkedIn';
import Image from "next/image";
import {PostCard} from '../components/PostCard'; // PostCard의 경로에 따라 수정

export default function Home() {
    const posts: Post[] = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    if (!posts) notFound();

    return (
        <main className="mx-auto max-w-5xl">
            <h1 className="my-8 text-center text-3xl font-bold">Next.js & ContentLayer Blog Example</h1>
            {posts.map((post) => (
                <PostCard key={post._id} post={post}/> // post prop을 명시적으로 전달
            ))}

            <div className="mx-auto w-full">
                <div className='flex justify-center gap-4'>
                    <Link href='https://github.com/mongsukim' target='_blank'>
                        <IconGithub
                            className='fill-foreground transition hover:fill-pink-600'
                            height={30}
                            width={30}
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/developermong2/' target='_blank'>
                        <IconLinkedin
                            className='fill-foreground transition hover:fill-pink-600'
                            height={30}
                            width={30}
                        />
                    </Link>
                </div>

                <a href='https://hits.sh/hits.sh/github.com/mongsukim/MoriBlog/'>
                    <Image
                        alt='Hits'
                        src='https://hits.sh/hits.sh/github.com/mongsukim/MoriBlog.svg?view=today-total&style=for-the-badge&label=visitors&extraCount=0&color=2A415F&labelColor=2A415F'
                    />
                </a>
                <div>
                    © 2024. <span className='font-semibold'>Hyesu Kim</span> all rights reserved.
                </div>
            </div>
        </main>
    );
}