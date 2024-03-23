

function filterData(data, filters) {
    return data.filter(item => {
      return filters.every(filter => {
        if (Array.isArray(item[filter.attribute])) {
          // If the attribute is a list
          return item[filter.attribute].some(value => filter.values.includes(value));
        } else {
          // If the attribute is not a list
          return filter.values.includes(item[filter.attribute]);
        }
      });
    });
  }
  

export {filterData};