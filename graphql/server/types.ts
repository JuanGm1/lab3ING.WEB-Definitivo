// import { gql } from 'apollo-server-micro';
import { comentaryTypes } from '@graphql/server/comentary/types';
import { travelTypes } from '@graphql/server/travel/types';
import { destinationTypes } from '@graphql/server/destination/types';
import { userTypes } from '@graphql/server/user/types';
import { replyTypes } from '@graphql/server/reply/types';
import { activityTypes } from '@graphql/server/activity/types';
import { budgetTypes } from '@graphql/server/budget/types';
import { entryTypes } from '@graphql/server/entry/types';
import { likeTypes } from '@graphql/server/like/types';

// const CommonTypes = gql``;

const globalTypes = [
  comentaryTypes,
  travelTypes,
  destinationTypes,
  userTypes,
  replyTypes,
  activityTypes,
  budgetTypes,
  entryTypes,
  likeTypes,
];

export { globalTypes };
