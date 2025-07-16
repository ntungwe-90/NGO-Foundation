export default {
  name: 'event',
  title: 'Event',
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
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required()
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
          { title: 'Fundraising', value: 'Fundraising' },
          { title: 'Community', value: 'Community' },
          { title: 'Education', value: 'Education' },
          { title: 'Health', value: 'Health' },
          { title: 'Youth', value: 'Youth' },
          { title: 'Water', value: 'Water' }
        ]
      }
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'registrationRequired',
      title: 'Registration Required',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
      media: 'image'
    },
    prepare(selection: any) {
      const { title, date, location } = selection;
      return {
        title: title,
        subtitle: `${new Date(date).toLocaleDateString()} • ${location}`
      };
    }
  }
};