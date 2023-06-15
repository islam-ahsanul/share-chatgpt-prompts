'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

// Card List component
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

// Feed component
const Feed = () => {
  const [searchText, setsearchText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
      console.log(data);
    };

    // console.log(data);
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          className="search_input peer"
          type="text"
          placeholder="Search for a tag or user"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardList data={posts} handleClick={() => {}} />
    </section>
  );
};

export default Feed;
