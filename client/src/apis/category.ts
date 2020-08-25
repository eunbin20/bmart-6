import { Axios } from '../libs/axios';

export const getCategories = () => Axios.get('/category');
export const getSubcategories = (categoryId: number) => Axios.get(`/subcategory/${categoryId}`);
