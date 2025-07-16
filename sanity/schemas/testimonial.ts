export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
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
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
};