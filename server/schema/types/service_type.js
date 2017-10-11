const graphql = require('graphql')
const { GraphQLEnumType } = graphql

const ServiceType = new GraphQLEnumType({
  name: 'Service',
  values: {
    EC2: { value: 'EC2' },
    S3: { value: 'S3' },
    RDS: { value: 'RDS' },
    SQS: { value: 'SQS' },
    DYNAMO_DB: { value: 'DYNAMO_DB' }
  }
})

module.exports = ServiceType
