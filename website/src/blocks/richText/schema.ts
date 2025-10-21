import {
  FixedToolbarFeature,
  BoldFeature,
  ItalicFeature,
  BlockquoteFeature,
  HeadingFeature,
  AlignFeature,
  UnorderedListFeature,
  OrderedListFeature,
  IndentFeature,
  ParagraphFeature,
  LinkFeature,
  lexicalEditor,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

// this block is used on texts collection ONLY to prevent chaos

export const RichTextBlock: Block = {
  slug: 'richtext',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          BlockquoteFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2'] }),
          AlignFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          IndentFeature(),
          ParagraphFeature(),
          LinkFeature(),
          FixedToolbarFeature(),
        ],
      }),
    },
  ],
}
