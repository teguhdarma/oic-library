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
      name: 'tipesetsumei1',
      title: 'Tipesetsumei1',
      type: 'string',
    },
    {
      name: 'tipesetsumei2',
      title: 'Tipesetsumei2',
      type: 'string',
    },
    {
      name: 'tipesetsumei3',
      title: 'Tipesetsumei3',
      type: 'string',
    },
    {
      name: 'tipesetsumei4',
      title: 'Tipesetsumei4',
      type: 'string',
    },
    {
      name: 'tipesetsumei5',
      title: 'Tipesetsumei5',
      type: 'string',
    },
    {
      name: 'tipesetsumei6',
      title: 'Tipesetsumei6',
      type: 'string',
    },
    {
      name: 'tipesetsumei7',
      title: 'Tipesetsumei7',
      type: 'string',
    },
    {
      name: 'tipehaikei1',
      title: 'Tipehaikei1',
      type: 'string',
    },
    {
      name: 'tipehaikei2',
      title: 'Tipehaikei2',
      type: 'string',
    },
    {
      name: 'tipehaikei3',
      title: 'Tipehaikei3',
      type: 'string',
    },
    {
      name: 'tipehaikei4',
      title: 'Tipehaikei4',
      type: 'string',
    },
    {
      name: 'tipehaikei5',
      title: 'Tipehaikei5',
      type: 'string',
    },
    {
      name: 'tipehaikei6',
      title: 'Tipehaikei6',
      type: 'string',
    },
    {
      name: 'tipehaikei7',
      title: 'Tipehaikei7',
      type: 'string',
    },

    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'sakuhinnamae1',
      title: 'sakuhinnamae1',
      type: 'string',
    },
    {
      name: 'sakuhinnamae2',
      title: 'sakuhinnamae2',
      type: 'string',
    },
    {
      name: 'sakuhinnamae3',
      title: 'sakuhinnamae3',
      type: 'string',
    },

    {
      name: 'sakuhinnamae4',
      title: 'sakuhinnamae4',
      type: 'string',
    },

    {
      name: 'sakuhinnamae5',
      title: 'sakuhinnamae5',
      type: 'string',
    },

    {
      name: 'sakuhinnamae6',
      title: 'sakuhinnamae6',
      type: 'string',
    },

    {
      name: 'sakuhinnamae7',
      title: 'sakuhinnamae7',
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
      name: 'mainImage1',
      title: 'Main image1',
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
      name: 'mainImage5',
      title: 'Main image5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage6',
      title: 'Main image6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage7',
      title: 'Main image7',
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
      name: 'sakuhinhaikei1',
      title: 'Sakuhinhaikei1',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei2',
      title: 'Sakuhinhaikei2',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei3',
      title: 'Sakuhinhaikei3',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei4',
      title: 'Sakuhinhaikei4',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei5',
      title: 'Sakuhinhaikei5',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei6',
      title: 'Sakuhinhaikei6',
      type: 'blockContent',
    },
    {
      name: 'sakuhinhaikei7',
      title: 'Sakuhinhaikei7',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei1',
      title: 'Sakuhinsetsumei1',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei2',
      title: 'Sakuhinsetsumei2',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei3',
      title: 'Sakuhinsetsumei3',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei4',
      title: 'Sakuhinsetsumei4',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei5',
      title: 'Sakuhinsetsumei5',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei6',
      title: 'Sakuhinsetsumei6',
      type: 'blockContent',
    },
    {
      name: 'sakuhinsetsumei7',
      title: 'Sakuhinsetsumei7',
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
