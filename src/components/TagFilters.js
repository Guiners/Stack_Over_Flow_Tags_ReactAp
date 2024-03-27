import React, { useEffect, useState } from 'react';

const TagFilters = ({ tags, setTagsList }) => {
  
  const ascTagFiler = () => {
    const filteredTags = tags.sort((tag1, tag2) => tag1.name.localeCompare(tag2.name));
    setTagsList(filteredTags);
  }

  const descTagFiler = () => {
    const filteredTags = tags.sort((tag1, tag2) => tag1.name.localeCompare(tag2.name));
    setTagsList(filteredTags);
  }

  useEffect(() => {

  }, []);

  return (
      null
  );
};
  
export default TagFilters;