const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql

const QuestionType = new GraphQLObjectType({
  name: 'QuestionType',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    answers: { type: new GraphQLList(GraphQLString) },
    correctAnswers: { type: new GraphQLList(GraphQLString) }
  })
})

module.exports = QuestionType
