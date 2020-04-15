const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const { GraphQLUser } = require('./user-type')
const userResolver = require('../resolvers')


const GraphQLUserMutations = new GraphQLObjectType({
  name: 'UserMutations',
  fields: {
    login: {
      type: GraphQLUser,
      resolve: userResolver.login,
      description: 'User Login',
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Name Of The User'
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Email Of The User'
        },
        password: {
          type: GraphQLNonNull(GraphQLString),
          description: 'Password Of The User'
        }
      }
    }
  }
})

module.exports = {
  GraphQLUserMutations
}
