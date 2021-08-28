const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

export const setSortBy = (sortType) => ({
  type: SET_SORT_BY,
  payload: sortType,
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex
});
