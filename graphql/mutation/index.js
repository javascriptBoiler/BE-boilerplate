const { GraphQLObjectType } = require('graphql');

const user = require('../../src/user/graphql');


module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        user: {
            type: user.types.GraphQLUserMutations,
            description: 'User mutation',
            resolve: user.resolvers.root
        }
    }
});
