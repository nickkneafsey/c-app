const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql
const Question = mongoose.model('question')

const QuestionType = require('./question_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    questions: {
      type: new GraphQLList(QuestionType),
      args: {
        service: { type: GraphQLString },
        test: { type: GraphQLString },
        length: { type: GraphQLInt }
      },
      resolve (parentValue, { service, test }, req) {
        // This is gross
        let queryObj = {}
        if (service) { queryObj = { service } }
        if (test) { queryObj[test] = true }
        return Question.find(queryObj)
      }
    }
  }
})

module.exports = RootQueryType
