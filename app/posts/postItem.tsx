import { Post } from "@/types"
import Image from "next/image"

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <li key={post.id} className='relative'>
      <div className='group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100'>
        <Image
          src={post.imageUrl}
          alt={post.title}
          className='object-cover group-hover:opacity-75'
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <p className='mt-2 block truncate font-medium'>
        {post.title}
      </p>
      <p className='block text-sm font-medium text-gray-500'>
        {post.excerpt}
      </p>
    </li>
  )
}

export default PostItem
