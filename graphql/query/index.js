const {
    GraphQLObjectType,
} = require('graphql');

const user = require('../../src/user/graphql');

const userQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            user: {
                type: user.types.GraphQLUserQuery,
                description: 'User Queries',
                resolve: user.resolvers.root
            },
        };
    }
});
module.exports = userQuery;
