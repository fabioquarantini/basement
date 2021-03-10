import PostPreview from "./post-preview";

export default function BlogList({ posts }) {
  return (
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    {posts.map(({ node }) => (
        <PostPreview
          key={node.slug}
          title={node.title}
          coverImage={node.featuredImage?.node}
          date={node.date}
          author={node.author?.node}
          slug={node.slug}
          excerpt={node.excerpt}
        />
      ))}
      </ul>
  );
}
