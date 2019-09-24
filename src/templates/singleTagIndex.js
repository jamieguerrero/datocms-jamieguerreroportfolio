import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">Posts tagged with '{`${tagName}`}'</h1>
            <ul>
              {posts.map((post, index) => {
                return (
                  <li key={index}>
                    <Link to={`/works/${post.slug}`}>
                      {post.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
        </div>
    </article>
    </Layout>
  )
}

export default SingleTagTemplate
