import React, { useEffect, useState } from 'react';

const PostFilters = ({ tags, setTagsList }) => {

    const ascPostFiler = () => {
        console.log(tags)
        const filteredTags = tags.sort((tag1, tag2) => tag1.count - tag2.count);
        console.log(filteredTags)
        setTagsList(filteredTags);
    }

    const descPostFiler = () => {
        const filteredTags = tags.sort((tag1, tag2) => tag2.count - tag1.count);
        setTagsList(filteredTags);
    }

    const overMilionPostsFilter = () => {
        const filteredTags = tags.filter((tag) => tag.count > 1000000);
        setTagsList(filteredTags);
        // moze tu powinine ponownie wydrukowac rzeczy z tabeli?
    }

    const lessMilionPostsFilter = () => {
        const filteredTags = tags.filter((tag) => tag.count < 1000000);
        setTagsList(filteredTags);
    }


   useEffect(() => {
  }, [tags]);
  
    return (
        <div>  
            <label>
                ASC Post Filer
                <input 
                    type="checkbox"  
                    onClick={() => ascPostFiler()}
                />
            </label>
            <label>
                DESC Post Filer
                <input 
                    type="checkbox"  
                    onClick={() => descPostFiler()}
                />
            </label>
            <label>
                Over Milion Posts Filter
                <input 
                    type="checkbox"  
                    onClick={() => overMilionPostsFilter()}
                />
            </label>
            <label>
                Less Milion Posts Filter
                <input 
                    type="checkbox"  
                    onClick={() => lessMilionPostsFilter()}
                />
            </label>
        </div>
    );
  };
  
export default PostFilters;