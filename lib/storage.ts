import { School } from './types';

export const getSchools = (): School[] => {
  if (typeof window === 'undefined') return [];
  const schools = localStorage.getItem('schools');
  return schools ? JSON.parse(schools) : [];
};

export const addSchool = (school: School) => {
  const schools = getSchools();
  schools.push(school);
  localStorage.setItem('schools', JSON.stringify(schools));
};