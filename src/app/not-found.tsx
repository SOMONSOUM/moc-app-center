"use client";

import Error from "next/error";

function NotFoundPage() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}

export default NotFoundPage;
