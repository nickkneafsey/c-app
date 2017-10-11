const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } = graphql
const mongoose = require('mongoose')
const Question = mongoose.model('question')
const QuestionType = require('./types/question_type')
const ServiceType = require('./types/service_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addQuestion: {
      type: QuestionType,
      args: {
        text: { type: GraphQLString },
        correctAnswers: { type: new GraphQLList(GraphQLString) },
        answers: { type: new GraphQLList(GraphQLString) },
        service: { type: ServiceType },
        developerAssociate: { type: GraphQLBoolean },
        solutionsArchitectAssociate: { type: GraphQLBoolean },
        sysOpsAssociate: { type: GraphQLBoolean }
      },
      resolve (parentValue, { text, correctAnswers, answers, service, developerAssociate, solutionsArchitectAssociate, sysOpsAssociate }) {
        return Question.addQuestion(new Question({ text, correctAnswers, answers, service, developerAssociate, solutionsArchitectAssociate, sysOpsAssociate }))
      }
    }
  }
})

module.exports = mutation
