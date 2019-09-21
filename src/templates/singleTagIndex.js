import React from "react"
import { graphql, Link } from 'gatsby'

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <div style={{fontFamily: 'avenir'}}>
      <div>
        Posts about {`${tagName}`}
      </div>
      <div>
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
    </div>
  )
}

export default SingleTagTemplate
