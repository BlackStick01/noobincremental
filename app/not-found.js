import Link from "next/link";
import { PageShell } from "./components";

export default function NotFound() {
  return (
    <PageShell>
      <section className="article-hero">
        <div>
          <h1>Page not found</h1>
          <p className="lede">
            This route is not part of the current Noob Incremental Wiki build.
            Return home or open a guide from the navigation.
          </p>
          <div className="actions">
            <Link className="button primary" href="/">
              Back Home
            </Link>
            <Link className="button" href="/beginner-guide">
              Start Guide
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
