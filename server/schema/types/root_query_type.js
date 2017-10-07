const graphql = require('graphql')
const { GraphQLObjectType } = graphql

const QuestionType = require('./question_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    question: {
      type: QuestionType,
      resolve (parentValue, { service, test, length }, req) {
        return 'Sup'
      }
    }
  }
})

module.exports = RootQueryType
