"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function SearchBox({ items }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return items.slice(0, 12);
    }

    return items
      .filter((item) =>
        `${item.title} ${item.description} ${item.category} ${item.url}`
          .toLowerCase()
          .includes(value)
      )
      .slice(0, 24);
  }, [items, query]);

  return (
    <section className="content-panel">
      <h2>Site Search</h2>
      <label className="search-label" htmlFor="site-search">
        Search wiki pages, guides, blog posts, updates, and codes
      </label>
      <input
        id="site-search"
        className="search-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-describedby="site-search-help"
      />
      <p className="search-label" id="site-search-help">
        Try codes, runes, prestige, Oof, LABUPDATE, Prism, or verification.
      </p>
      <div className="search-results" aria-live="polite">
        {results.map((item) => (
          <Link className="search-result" href={item.url} key={`${item.url}-${item.title}`}>
            <span>{item.category}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
