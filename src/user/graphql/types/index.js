const { GraphQLUser } = require('./user-type')
const { GraphQLUserQuery } = require('./user-query-type')
const { GraphQLUserMutations } = require('./user-mutation-type')

module.exports = {
  GraphQLUser,
  GraphQLUserQuery,
  GraphQLUserMutations
}
