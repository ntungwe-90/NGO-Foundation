export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
          { title: 'Food', value: 'Food' },
          { title: 'Empowerment', value: 'Empowerment' },
          { title: 'Youth', value: 'Youth' }
        ]
      }
    },
    {
      name: 'impact',
      title: 'Impact Statement',
      type: 'string',
      validation: (Rule: any) => Rule.required()
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
      category: 'category',
      media: 'image'
    },
    prepare(selection: any) {
      const { title, category } = selection;
      return {
        title: title,
        subtitle: category
      };
    }
  }
};