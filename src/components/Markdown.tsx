import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renders article Markdown into Tailwind-styled HTML (SSR-safe, no typography
 * plugin dependency). Used by the blog ArticlePage.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: (p) => <h2 className="text-2xl font-bold text-[#0B1F3A] mt-10 mb-4" {...p} />,
        h3: (p) => <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-3" {...p} />,
        p: (p) => <p className="text-gray-700 leading-loose mb-4" {...p} />,
        ul: (p) => <ul className="list-disc ms-6 space-y-2 mb-4 text-gray-700" {...p} />,
        ol: (p) => <ol className="list-decimal ms-6 space-y-2 mb-4 text-gray-700" {...p} />,
        li: (p) => <li className="leading-relaxed" {...p} />,
        a: (p) => <a className="text-[#EFB621] underline hover:no-underline" {...p} />,
        strong: (p) => <strong className="font-bold text-[#0B1F3A]" {...p} />,
        blockquote: (p) => (
          <blockquote className="border-s-4 border-[#EFB621] ps-4 italic text-gray-600 my-4" {...p} />
        ),
        table: (p) => <table className="w-full border-collapse my-4 text-sm" {...p} />,
        th: (p) => <th className="border border-gray-300 bg-gray-50 p-2 text-start" {...p} />,
        td: (p) => <td className="border border-gray-300 p-2" {...p} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
