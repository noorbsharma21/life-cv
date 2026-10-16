#!/usr/bin/env python3
"""Inline styles.css and app.js into index.html -> life-cv.html (one openable file)."""

from pathlib import Path

here = Path(__file__).parent
html = (here / "index.html").read_text()
css = (here / "styles.css").read_text()
js = (here / "app.js").read_text()

html = html.replace('<link rel="stylesheet" href="styles.css" />', f"<style>\n{css}\n</style>")
html = html.replace('<script src="app.js"></script>', f"<script>\n{js}\n</script>")

out = here / "life-cv.html"
out.write_text(html)
print(f"wrote {out.name} ({len(html):,} bytes)")
