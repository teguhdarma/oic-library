import { MdLocalMovies as icon } from 'react-icons/md';

export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'mainImage2',
      title: 'Main image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage3',
      title: 'Main image3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage4',
      title: 'Main image4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [{ type: 'author' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },

    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{ type: 'castMember' }],
    },
    {
      name: 'tipe',
      title: 'tipe',
      type: 'reference',
      to: { type: 'tipe' },
    },
    {
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{ type: 'crewMember' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
      const year = selection.date && selection.date.split('-')[0];
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(', ');

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      };
    },
  },
};
