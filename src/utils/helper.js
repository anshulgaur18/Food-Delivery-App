export function filteredData(restaurants, search) {
const filterData = restaurants.filter((restaurant) =>
restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase())
);
console.log(filterData);
return filterData;
}
