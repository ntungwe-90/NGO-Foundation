export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage'
    }
  }
};