// import Ember from 'ember';

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

// export default Ember.Helper.helper(rentalPropertyType);

import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);