interface Collection {
    handle: string; 
}

interface Item {
  collections: Collection[];  
  handle: string;  
}

const getProductUrl = (item: Item): string => {
    const url = `/products/${item.collections[0].handle}/${item.handle}`;
  return url;
};

export default getProductUrl;
  