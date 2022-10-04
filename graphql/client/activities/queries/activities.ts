import { gql } from '@apollo/client';

const GET_ACTIVITY = gql`
  query GetActivity($getActivityId: ID) {
    getActivity(id: $getActivityId) {
      id
      description
      activityDate
    }
  }
`;

export default GET_ACTIVITY;
