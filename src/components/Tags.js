import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow';

// const Tags = ({ setTagsList , setPageSize, setTotalCount}) => {
    const Tags = ({ setTagsList, setTotalCount}) => {
        const fetchData = async () => {
            try {
                const response = await axios.get(SERVER_URL);
                const newTagsList = response.data.items.map(tag => ({
                    name: tag.name,
                    count: tag.count
                }));
                setTagsList(newTagsList);
                // console.log(typeof newTagsList)
                // console.log(Object.values(newTagsList).length)
                setTotalCount(Object.values(newTagsList).length);
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return null;
};

export default Tags;
