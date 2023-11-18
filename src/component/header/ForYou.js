



import React from 'react'
import Post from './Post'
import {posts} from '../../data/posts'

function ForYou() {
  return (
    <div>
      {posts.map((post) => <Post post={post} key={post.id}/>)}
    </div>
  )
}

export default ForYou