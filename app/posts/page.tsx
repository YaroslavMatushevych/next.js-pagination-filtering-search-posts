import clsx from 'clsx'
import Link from 'next/link'
import { Suspense } from 'react'
import { v4 as uuid } from 'uuid'

import { getPosts } from '@/lib/services/posts'

import Search from './search'
import PostList from './postList'
import Await from './await'
import Skeleton from './skeleton'
import Pagination from './pagination'
import Filter from './filter'

const Page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10
  const category =
    typeof searchParams.category === 'string' ? searchParams.category : ""
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : ""

  // this done just for skeleton lazyloading, and suspense(demonstration)
  const promise = getPosts({ page, limit, category, query: search }) // dedupe
  const data = await getPosts({ page, limit, category, query: search }) //dedupe

  return (
    <section className='py-24' key={uuid()}>
      <div className='container'>
        <div className='mb-12 flex items-center justify-between gap-x-16'>
          <h1 className='text-3xl font-bold'>Blog Posts</h1>

          <div className='grow'>
            <Search search={search} />
          </div>

          <div className='grow'>
            <Filter options={data.data.categories} selectedOption={category} />
          </div>

          <div className='flex space-x-6'>
            <Pagination category={category} search={search} page={page} total={data.data.total} />
          </div>
        </div>

        <Suspense fallback={<Skeleton />}>
          <Await promise={promise}>
            {({ data }) => <PostList data={data} />}
          </Await>
        </Suspense>
      </div>
    </section>
  )
}

export default Page
