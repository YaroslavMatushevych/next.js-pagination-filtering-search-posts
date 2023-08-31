import Image from 'next/image'
import { BlogPosts } from '@/types/posts'
import PostItem from './postItem'

export default function PostList({ data }: { data: BlogPosts | undefined }) {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8'
    >
      {(data && data.posts.length > 0) ?
        data.posts.map(post => (
          <PostItem key={post.id} post={post} />
        )) :
        <li className='relative'>
          <p className='mt-2 block truncate font-medium'>
            Sorry no data available!
          </p>
        </li>}
    </ul>
  )
}
