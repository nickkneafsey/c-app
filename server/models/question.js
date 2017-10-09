const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'question'
  },
  answers: { type: Array, default: [] },
  text: { type: String, default: '' },
  correctAnswers: { type: Array, default: [] }
})

QuestionSchema.statics.addQuestion = function({ text, correctAnswers, answers }) {
  const Question = mongoose.model('question')
  // Probably handle errors here eventually
  const question = new Question({ text, correctAnswers, answers })

  return Promise.all([question.save()])
    .then(([question]) => question)

  // return question.save()
  // return Question.create({ text, correctAnswers, answers })
}

mongoose.model('question', QuestionSchema)
