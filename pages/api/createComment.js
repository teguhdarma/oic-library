import sanityClient from '@sanity/client';
const config = {
  projectId: '9gldm4wh',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Couldn't submit comment`, err });
  }
  return res.status(200).json({ message: 'Comment submitted' });
}
