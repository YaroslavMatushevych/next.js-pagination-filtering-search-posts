const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3000";

/// Posts ///
export const getPosts = async ({
  query,
  category,
  page = 1,
  limit = 10
}: {
  query?: string
  category?: string
  page: number
  limit: number
}) => {
  try {
    const response = await fetch(`${API_HOST}/api/posts?q=${query || ''}&page=${page}&limit=${limit}&category=${category || ''}`);

    await sleep(800)

    const result = await response.json();

    return { data: result }
  } catch (error) {
    return { error }
  }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
