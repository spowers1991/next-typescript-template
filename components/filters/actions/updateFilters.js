// Updated updateFilters function using propertyToSearch
export function updateFilters(itemsToFilter, filters, setFilteredItems) {
  const newFilteredStories = itemsToFilter.filter(item => {
    // Check if the item matches all filter criteria
    return Object.keys(filters).every(propertyToSearch => {
     // console.log(itemsToFilter)
      const filterValue = filters[propertyToSearch];
      const itemValue = item[propertyToSearch];
    
      if (Array.isArray(filterValue)) {
        // Filter values are arrays (e.g., tag_list)
        const itemPropertyArray = itemValue.map(item => item.title);
       // console.log(itemPropertyArray)
        return filterValue.length === 0 || filterValue.every(val => itemPropertyArray.includes(val));
      } else if (typeof filterValue === 'string') {
        // Filter values are strings (e.g., name)
        return itemValue.toLowerCase().includes(filterValue.toLowerCase());
      }
      return true;
    });
  });

  // Update the state with the filtered stories
  setFilteredItems(newFilteredStories);
}
