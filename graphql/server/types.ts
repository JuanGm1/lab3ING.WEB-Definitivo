// import { gql } from 'apollo-server-micro';
import { comentaryTypes } from '@graphql/server/comentary/types';
import { travelTypes } from '@graphql/server/travel/types';
import { destinationTypes } from '@graphql/server/destination/types';
import { userTypes } from '@graphql/server/user/types';
import { replyTypes } from '@graphql/server/reply/types';

// const CommonTypes = gql``;

const globalTypes = [
  comentaryTypes,
  travelTypes,
  destinationTypes,
  userTypes,
  replyTypes,
];

export { globalTypes };
