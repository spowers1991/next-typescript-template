import React from 'react';
import { FilteredItem } from './types/FilteredItem';
import FiltersCard from '@/components/filters/FiltersCard';

interface FilteredListingProps {
  filteredItems: FilteredItem[];
  //page: number;
}

const FilteredListing: React.FC<FilteredListingProps> = ({ filteredItems }) => {
  return (
    <>
      {filteredItems?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredItems.map(( filteredItem ) => (
              <FiltersCard key={filteredItem.id} filteredItem={filteredItem} />
            ))}
        </div>
      ) : (
        <div className="text-center text-lg">
          No project available for these filters...
        </div>
      )}
    </>
  );
};

export default FilteredListing;
