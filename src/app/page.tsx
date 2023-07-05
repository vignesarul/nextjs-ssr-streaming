import { Suspense } from 'react';
import Count from "@/app/components/count";
import Status from "@/app/components/status";

export default function Home() {
  return (
      <div className="p-5 h-screen">
          <header className="my-5 uppercase font-bold text-xl">
              <div>Api status</div>
          </header>
          <main className="container space-y-4">
              {
                  Array(5).fill(0).map((_val, id: number) => (
                      <div key={id} className="flex space-x-2 justify-between p-2 py-3 border rounded border-b-blue-400 [&:has(div.text-red-700)]:border-b-red-400 items-center">
                          <div className="font-bold pl-2">GET</div>
                          <code className="basis-1/2">/path/long-path</code>
                          <div className="text-sm">
                              <Suspense fallback={<p className="text-sm">Loading...</p>}>
                                  <Status />
                              </Suspense>
                          </div>
                          <div className="basis-1">
                              <Suspense fallback={<p className="text-sm">Loading...</p>}>
                                  <Count />
                              </Suspense>
                          </div>
                      </div>
                  ))
              }


              <div>
                  <ul role="list" className="divide-y divide-gray-100 text-sm space-y-2">
                      <li className="pt-2"> The demo app demonstrates Next.js&apos;s SSR with streaming implementation.</li>
                      <li className="pt-2"> It is beneficial for SEO in ecommerce websites. </li>
                      <li className="pt-2"> Critical information like product page details and images are rendered in the initial HTML. </li>
                      <li className="pt-2"> Non-trivial information is loaded gradually as it is fetched by the backend and streamed to the frontend. </li>
                      <li className="pt-2"> This approach eliminates the necessity for multiple requests from the client to the server, which can cause blocking UI rendering.</li>
                  </ul>
              </div>
          </main>
          <footer className="text-center w-screen text-gray-500 text-sm pb-5">
              Next.js sample project by <a href="https://www.toptal.com/resume/vignes-aruljothi" className="text-gray-500 decoration-0 font-bold">Vignes Aruljothi</a>
          </footer>
      </div>
  )
}
