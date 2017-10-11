const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  answers: { type: Array, default: [] },
  text: { type: String, default: '' },
  correctAnswers: { type: Array, default: [] },
  developerAssociate: { type: Boolean, default: true },
  solutionsArchitectAssociate: { type: Boolean, default: true },
  sysOpsAssociate: { type: Boolean, default: true },
  service: { type: String }
})

QuestionSchema.statics.addQuestion = function ({ text, correctAnswers, answers, service, developerAssociate, solutionsArchitectAssociate, sysOpsAssociate }) {
  const Question = mongoose.model('question')

  const question = new Question({
    text,
    correctAnswers,
    answers,
    service,
    developerAssociate,
    solutionsArchitectAssociate,
    sysOpsAssociate
  })

  return question.save()
}

mongoose.model('question', QuestionSchema)
