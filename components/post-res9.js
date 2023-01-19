import { PortableText } from '@portabletext/react';

export default function PostRes9({ content }) {
  return (
    <div className="mx-auto max-w-2xl">
      <PortableText value={content} />
    </div>
  );
}
