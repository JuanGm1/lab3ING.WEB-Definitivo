// import { gql } from 'apollo-server-micro';
import { comentaryTypes } from '@graphql/server/comentary/types';
import { userTypes } from '@graphql/server/user/types';
import { usersOnTravelsTypes } from '@graphql/server/usersOnTravels/types';

// const CommonTypes = gql``;

const globalTypes = [comentaryTypes,userTypes,usersOnTravelsTypes];

export { globalTypes };
