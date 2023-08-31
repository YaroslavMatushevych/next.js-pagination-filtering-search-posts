import clsx from 'clsx'
import Link from 'next/link'

interface PaginationProps {
  search: string
  page: number
  total: number
  category: string
}

const Pagination: React.FC<PaginationProps> = ({ search, category, page, total }) => {
  return (
    <>
      {/* <p></p> */}
      <Link
        href={{
          pathname: '/posts',
          query: {
            ...(search ? { search } : {}),
            ...(category ? { category } : {}),
            page: page > 1 ? page - 1 : 1
          }
        }}
        className={clsx(
          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          page <= 1 && 'pointer-events-none opacity-50'
        )}
      >
        Previous
      </Link>
      <Link
        href={{
          pathname: '/posts',
          query: {
            ...(search ? { search } : {}),
            ...(category ? { category } : {}),
            page: page + 1
          }
        }}
        className={clsx(
          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          11 > total / page && 'pointer-events-none opacity-50'
        )}
      >
        Next
      </Link></>
  )
}

export default Pagination
