import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
        <section className="bg-[white] text-primary text-center py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to my Next.js App
            </h1>
            <p className="text-lg mb-6">
              Build amazing things with Nextjs &amp; TailwindCSS
            </p>
            
            <Link href="/auth" className="btn btn-secondary btn-lg">
            Get Started
            </Link>
          </div>
        </section>

        {/* Featured Section */}
        <section className="max-w-6xl mx-auto text-center my-16 px-4">
          <h2 className="text-3xl font-bold mb-8">Awesome Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Features 1 */}
            <div className="flex flex-col items-center"> 
              <Image src="/file.svg" alt="Feature 1" width={60} height={60} />
              <h4>Fast Performance</h4>
              <p>Optimized for speed and efficiency</p>

            </div>


            {/* Features 2 */}
            <div className="flex flex-col items-center">
              <Image src="/window.svg" alt="Feature 2" width={60} height={60}/>
              <h4>User Friendly</h4>
              <p>Intuitive and easy-to-use design</p>

            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center"> 
              <Image src="/globe.svg" alt="Feature 3" width={60} height={60} />
              <h4> SEO Ready</h4>
              <p>Boost your search ranking with SEO</p>

            </div>
          </div>

        </section>
      
        {/* Footer */}
        <footer className="bg-neutral text-neutral-content text-center py-6">
          <p className="mb-3">&copy; 2025 MyBrand. All Rights Reserved</p>

        </footer>

    </main>
    
   
  );
}
