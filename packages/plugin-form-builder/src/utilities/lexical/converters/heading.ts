import type { HTMLConverter } from '../types.js'

import { convertLexicalNodesToHTML } from '../serializeLexical.js'

export const HeadingHTMLConverter: HTMLConverter<any> = {
  async converter({ converters, node, parent, submissionData }) {
    const childrenText = await convertLexicalNodesToHTML({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
      submissionData,
    })

    return '<' + node?.tag + '>' + childrenText + '</' + node?.tag + '>'
  },
  nodeTypes: ['heading'],
}
