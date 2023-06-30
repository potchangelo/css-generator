import React from 'react';
import { Link } from 'gatsby';
import { Seo } from 'z/components';

function Page404() {
  return (
    <section className="section">
      <div className="container is-max-desktop content has-text-centered">
        <h1 className="title is-1">404</h1>
        <h4 className="subtitle is-4">Page not found</h4>
        <p>The page you requested was not found.</p>
        <p>
          <Link className="button is-link has-text-weight-bold" to="/">
            Go home
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Page404;

export const Head = () => <Seo pageTitle="Page Not Found" />;
