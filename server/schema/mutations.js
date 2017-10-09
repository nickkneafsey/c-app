const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLId } = graphql;
const mongoose = require('mongoose')
const Question = mongoose.model('question')
const QuestionType = require('./types/question_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addQuestion: {
      type: QuestionType,
      args: {
        text: { type: GraphQLString },
        correctAnswers: { type: new GraphQLList(GraphQLString) },
        answers: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parentValue, { text, correctAnswers, answers }) {
        return Question.addQuestion(new Question({ text, correctAnswers, answers }))
      }
    }
  }
})


module.exports = mutation
