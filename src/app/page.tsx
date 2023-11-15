import Image from 'next/image'
import PostList from "@/components/components/post-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <a className={'mb-5'} href={'/test'}>Test</a>
      <PostList/>
    </main>
  )
}
