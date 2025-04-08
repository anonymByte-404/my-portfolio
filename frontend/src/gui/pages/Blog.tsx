import React from 'react'
import blogData from './data/blogData.json'

interface BlogPost {
  id: number
  title: string
  summary: string
  date: string
  tags: string[]
}

const Blog: React.FC<{}> = () => {
  const sortedBlogData: BlogPost[] = blogData.sort((a: BlogPost, b: BlogPost) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section className='blog-section'>
      <div className='blog-header'>
        <h1>Blog</h1>
        <p className='subtitle'>Stories, lessons, and dev logs</p>
      </div>
      <div className='blog-grid'>
        {sortedBlogData.map((post: BlogPost) => (
          <div className='blog-card' key={post.id}>
            <h2>{post.title}</h2>
            <p className='date'>{post.date}</p>
            <p className='summary'>{post.summary}</p>
            <div className='tags'>
              {post.tags.map((tag, index) => (
                <span key={index} className='tag'>
                  {tag}
                </span>
              ))}
            </div>
            <button className='read-more'>Read more</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
