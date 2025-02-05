import React from 'react'

import Link from "next/link";
const Page = () => {
  return (
    <main>
      <div>page</div>
      <Link href="/components/hola">
        Ir a Hola
      </Link>

    </main>
  )
}

export default Page;
