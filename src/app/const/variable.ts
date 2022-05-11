export const api = {
  2: '/api2',
  8: '/api8',
  5: '/api5',
  10: '/api10',
  camunda: '/engine-rest'
};

export const route = {
    form : 'form-detail',
    menu : 'dynamic',
    host : 'https://engage.difinite.com:4243/main.js'
};  

export const k: string = '/B?E(H+MbQeThWmZq4t6w9z$C&F)J@Nc';

export const pagePerOptions = [10,20,25];

export function compareSortRoleName(a,b) {    
  if ( a.role_name < b.role_name ){
      return -1;
  }
  if ( a.role_name > b.role_name ){
      return 1;
  }
  return 0;      
}

export function compareSortRoleName2(a,b) {    
  if ( a.name < b.name ){
      return -1;
  }
  if ( a.name > b.name ){
      return 1;
  }
  return 0;      
}

export function compareSort(a,b) {    
  if ( a < b ){
      return -1;
  }
  if ( a > b ){
      return 1;
  }
  return 0;      
}