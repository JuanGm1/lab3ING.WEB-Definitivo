import { gql } from 'apollo-server-micro';
import comentaryTypes from '@graphql/server/comentary/types';

const CommonTypes = gql``;

const globalTypes = [CommonTypes, comentaryTypes];

export { globalTypes };
