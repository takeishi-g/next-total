import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="min-w-full bg-zinc-600">
      <div className="px-32 py-2 mx-auto">
        <div className="container flex justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="株式会社エヌイーティ"
              width={100}
              height={50}
              priority={true}
            />
          </Link>
            <Link href="/pages/all-list" className="my-auto text-white">
              集計一覧
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
