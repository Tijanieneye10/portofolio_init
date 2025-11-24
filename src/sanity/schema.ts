import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schema/blockContent'
import post from './schema/post'
import author from './schema/author'
import project from './schema/project'
import experience from './schema/experience'
import testimonial from './schema/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, project, experience, testimonial, blockContent],
}
