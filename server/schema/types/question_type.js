const graphql = require('graphql')
const ServiceType = require('./service_type')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean
} = graphql

const QuestionType = new GraphQLObjectType({
  name: 'QuestionType',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    answers: { type: new GraphQLList(GraphQLString) },
    correctAnswers: { type: new GraphQLList(GraphQLString) },
    developerAssociate: { type: GraphQLBoolean },
    solutionsArchitectAssociate: { type: GraphQLBoolean },
    sysOpsAssociate: { type: GraphQLBoolean },
    service: { type: ServiceType }
  })
})

module.exports = QuestionType
