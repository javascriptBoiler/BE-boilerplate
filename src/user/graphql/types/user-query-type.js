const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql');
const { GraphQLUser } = require('./user-type');
const userResolver = require('../resolvers');


const GraphQLUserQuery = new GraphQLObjectType({
    name: 'GraphQLListUserQuery',
    fields: {

        list: {
            type: GraphQLList(GraphQLUser),
            description: 'Get Users',
            resolve: userResolver.list
        },

        byID: {
            type: GraphQLUser,
            description: 'Get User',
            args: {
                id: {
                    type: GraphQLString,
                    description: 'User ID'
                }
            },
            resolve: userResolver.byID
        }
    }
});

module.exports = {
    GraphQLUserQuery: GraphQLUserQuery
};
