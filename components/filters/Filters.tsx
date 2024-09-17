import React, { useState, useEffect } from 'react';
import { Product } from '@/lib/products/Product';
import Searchbar from "./selectors/Searchbar";
import Checkbox from './selectors/Checkbox';
import { updateFilters } from "./actions/updateFilters";
import FilteredListing from './FilteredListing'

interface FilterProps {
    itemsToFilter: Product[];
}

const Filters: React.FC<FilterProps> = ({ itemsToFilter }) => {
  
  const [filtersOptions, setFiltersOptions] = useState<Record<string, any[]>>({});

  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  // Set the filtering options based on the propertyToSearch
  const filtersHandler = (selectedOptions: string[], propertyToSearch: keyof Product) => {
    setFiltersOptions((prevFilters) => ({
      ...prevFilters,
      [propertyToSearch]: selectedOptions,
    }));
  };
  // Compare and update the filters
  useEffect(() => {
    updateFilters(itemsToFilter, filtersOptions, setFilteredItems);
    

  }, [filtersOptions, itemsToFilter]);


  return (
    <div className="container flex m-auto w-full pt-4 sm:pt-16">

      <div className="mt-6 flex flex-col gap-6">

        <Searchbar   
          label={"Title"}
          propertyToSearch={"title"}
          filtersHandler={filtersHandler}
        />

        <Checkbox   
          itemsToFilter={itemsToFilter}
          label={"collections"}
          propertyToSearch={"collections"}
          filtersHandler={filtersHandler}
        />

        <FilteredListing filteredItems={filteredItems} />

      </div>

    </div>
  );

};

export default Filters;
