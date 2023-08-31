import path from 'path';
import { promises as fs } from 'fs';
import { NextApiResponse } from "next/types";
import { NextRequest, NextResponse } from 'next/server';
import { BlogPosts } from '@/types/posts';

export async function GET(req: Request | NextRequest, res: NextApiResponse) {
  //@ts-ignore
  const url = new URL(req.url)

  const q = url.searchParams.get("q")
  const page = parseInt(url.searchParams.get("page") as string) || 1
  const category = url.searchParams.get("category")
  const limit = parseInt(url.searchParams.get("limit") as string) || 10

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/blog.json', 'utf8');

  const parsedData: BlogPosts = JSON.parse(fileContents);

  // Filter posts based on query and category
  const filteredPosts = parsedData.posts.filter((post) => {
    let titleCondition = true;
    let categoryCondition = true;

    if (q) {
      titleCondition = post.title.toLowerCase().includes(q.toLowerCase());
    }
    if (category) {
      categoryCondition = post.categories.includes(parseInt(category));
    }
    
    return titleCondition && categoryCondition;
  });

  // Pagination logic
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  parsedData.posts = filteredPosts.slice(startIndex, endIndex);
  parsedData.total = filteredPosts.length;

  //Return the content of the data file in json format
  return NextResponse.json(parsedData);
}