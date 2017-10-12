const graphql = require('graphql')
const { GraphQLEnumType } = graphql

const ServiceType = new GraphQLEnumType({
  name: 'Service',
  values: {
    EC2: { value: 'EC2' },
    S3: { value: 'S3' },
    RDS: { value: 'RDS' },
    SQS: { value: 'SQS' },
    DYNAMO_DB: { value: 'DYNAMO_DB' },
    LAMBDA: { value: 'LAMBDA' },
    VPC: { value: 'VPC' },
    CLOUDFRONT: { value: 'CLOUDFRONT' },
    ROUTE_53: { value: 'ROUTE_53' },
    GLACIER: { value: 'GLACIER' },
    KINESIS: { value: 'KINESIS' },
    STORAGE_GATEWAY: { value: 'STORAGE_GATEWAY' },
    ECS: { value: 'ECS' },
    ELASTICACHE: { value: 'ELASTICACHE' },
    IAM: { value: 'IAM' },
    SNS: { value: 'SNS' },
    SES: { value: 'SES' },
    STEP_FUNCTIONS: { value: 'STEP_FUNCTIONS' },
    API_GATEWAY: { value: 'API_GATEWAY' }
  }
})

module.exports = ServiceType
