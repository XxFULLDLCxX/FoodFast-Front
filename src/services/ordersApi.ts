import instance from './api';

export default async function getCategories() {
  return (await instance.get('/categories')).data;
}
