import React, { useState } from 'react';
import CustomPagination from './components/Pagination';
import PageSizeSelector from './components/PageSizeSelector';
import Tags from './components/Tags';
import TagTable from './components/TagTable';
import PostFilters from './components/PostFilters';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [selectedPageSize, setSelectedPageSize] = useState(pageSize);
  const [tagsList, setTagsList] = useState([]);
  
  const [totalCount, setTotalCount] = useState(0);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setSelectedPageSize(newPageSize);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>ABCD</h1>
      <Tags setTagsList={setTagsList} setTotalCount={setTotalCount}/>
      <PostFilters tags={tagsList} setTagsList={setTagsList}/>
{/* tu powinny byc filtry */}
      <PageSizeSelector pageSize={selectedPageSize} onChange={handlePageSizeChange} />
      <CustomPagination onPageChange={handlePageChange} count={totalCount} page={currentPage} pageSize={selectedPageSize} />
      <TagTable tags={tagsList} currentPage ={currentPage} pageSize={selectedPageSize} totalCount={totalCount}/>
    </div>
  );
}

export default App;
