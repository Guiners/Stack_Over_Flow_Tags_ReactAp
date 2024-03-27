import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TagTable = ({ tags, currentPage, pageSize, totalCount}) => {
  const [tagsOnPage, setTagsOnPage] = useState([]);

 useEffect(() => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalCount);
  setTagsOnPage([]);
  setTagsOnPage(tags.slice(startIndex, endIndex));
//   console.log(startIndex, endIndex, currentPage, pageSize);
}, [tags, currentPage, pageSize, totalCount]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell align="right">Liczba postów</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tagsOnPage.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagTable;
