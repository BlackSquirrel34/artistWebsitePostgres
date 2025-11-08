import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Texts: CollectionConfig = {
  slug: 'texts',
  labels: {
    singular: 'Text',
    plural: 'Texte',
  },
  admin: {
    hidden: true,
    useAsTitle: 'title',
    description: 'Texte können nur über die Seiten (Pages) hinzugefügt und verwaltet werden.',
  },
  // make visible just for dev.
  // that's how we ensure no orphaned texts are created
  //  hidden: true,
  fields: [
    {
      name: 'title',
      label: 'Überschrift',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Untertitel',
      type: 'text',
    },
    {
      name: 'author',
      label: 'Autor',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      label: 'Position',
      type: 'text',
    },
    {
      name: 'extrainfo',
      label: 'zusätzliche Angaben',
      type: 'text',
    },
    {
      name: 'top-citation',
      label: 'Eingangszitat',
      minRows: 0,
      maxRows: 1,
      type: 'array',
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'text',
        },
        {
          name: 'author',
          label: 'Autor',
          type: 'text',
        },
        {
          name: 'further',
          label: 'Weitere Angaben',
          type: 'text',
        },
      ],
    },
    {
      name: 'layout',
      label: 'Content',
      type: 'blocks',
      minRows: 1,
      maxRows: 1,
      blocks: [RichTextBlock],
      required: true,
    },
    {
      name: 'pdf',
      label: 'PDF',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { equals: 'application/pdf' },
      },
    },
  ],
}
