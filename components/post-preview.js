//import Avatar from '../components/avatar'
import Date from "../components/date";
//import CoverImage from './cover-image'
import Tags from "../components/tags";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return (
    <>
      <li class="py-12">
        <article>
          <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time datetime="{date}"><Date dateString={date} /></time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <div>
                  <h2 class="text-2xl font-bold leading-8 tracking-tight">
                  <Link as={`/blog/${slug}`} href="/blog/[slug]">
                    <a
                      class="text-gray-900 dark:text-gray-100"
                      dangerouslySetInnerHTML={{ __html: title }}
                    >
                    </a>
                    </Link>
                  </h2>

                  <div class="flex flex-wrap">
                    <a
                      class="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
                      href="/tags/next-js"
                    >
                      next-js
                    </a>
                    <a
                      class="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
                      href="/tags/tailwind"
                    >
                      tailwind
                    </a>
                    <a
                      class="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
                      href="/tags/guide"
                    >
                      guide
                    </a>
                  </div>
                </div>
                <div
                  className="prose text-gray-500 max-w-none dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </div>
              <div class="text-base font-medium leading-6">
              <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <a
                  class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Read more →
                </a>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
}
