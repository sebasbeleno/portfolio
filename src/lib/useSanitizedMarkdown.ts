import { useEffect, useState } from "react";
import { parseMarkdown } from "./markdown";

export function useSanitizedMarkdown(content: string) {
	const [sanitizedHtml, setSanitizedHtml] = useState<string>("");
	const [markdownError, setMarkdownError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let isMounted = true;

		const processMarkdown = async () => {
			setIsLoading(true);
			try {
				const rawHtml = await parseMarkdown(content);
				// Dynamically import DOMPurify to avoid SSR issues
				const DOMPurify = (await import("dompurify")).default;
				const sanitized = DOMPurify.sanitize(rawHtml);

				if (isMounted) {
					setSanitizedHtml(sanitized);
					setMarkdownError(null);
					setIsLoading(false);
				}
			} catch (err) {
				console.error("Error processing markdown in processMarkdown:", err);
				if (isMounted) {
					setSanitizedHtml("");
					setMarkdownError(err instanceof Error ? err : new Error(String(err)));
					setIsLoading(false);
				}
			}
		};

		processMarkdown();

		return () => {
			isMounted = false;
		};
	}, [content]);

	return { sanitizedHtml, markdownError, isLoading };
}
