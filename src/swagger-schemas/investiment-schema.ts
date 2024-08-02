export const investimentSchema = {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        description: 'Investiment DB ID',
      },
      confirmation_date: {
        type: 'string',
        description: 'Investiment confirmation date',
      },
      amount: {
        type: 'number',
        description: 'Investiment Amount',
      },
      yearly_rate: {
        type: 'number',
        description: 'Investiment yearly rate',
      }
    }
}