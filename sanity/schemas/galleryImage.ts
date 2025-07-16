export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Education', value: 'Education' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Water', value: 'Water' },
          { title: 'Community', value: 'Community' },
          { title: 'Youth', value: 'Youth' },
          { title: 'Empowerment', value: 'Empowerment' },
          { title: 'Training', value: 'Training' },
          { title: 'Impact', value: 'Impact' },
          { title: 'Food', value: 'Food' }
        ]
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text'
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
};