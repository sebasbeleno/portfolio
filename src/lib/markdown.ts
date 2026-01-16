import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
// Register only the languages we need
import javascript from "highlight.js/lib/languages/javascript";
import plaintext from "highlight.js/lib/languages/plaintext";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("cs", csharp);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("plaintext", plaintext);

const marked = new Marked(
	markedHighlight({
		langPrefix: "hljs language-",
		highlight(code, lang) {
			const normalizedLang = lang ? lang.toLowerCase() : "plaintext";
			const language = hljs.getLanguage(normalizedLang) ? normalizedLang : "plaintext";
			return hljs.highlight(code, { language, ignoreIllegals: true }).value;
		},
	}),
);

export async function parseMarkdown(content: string): Promise<string> {
	return await marked.parse(content);
}
