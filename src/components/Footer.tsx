import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

async function Footer(){
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-white mt-8 border border-t-slate-50">
      <Bounded as="div" className="py-4 md:py-6 lg:py-8 flex flex-col md:flex-row flex-wrap justify-between gap-2 ">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-slate-700 font-body text-xs leading-6">©{new Date().getFullYear()} {settings.data.site_title}</p>
          <ul className="flex md:flex-row justify-around gap-2 md:gap-4 text-slate-700 font-body text-base leading-normal">
            {settings.data.navigation.map(({label, link}) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
              </li>
            ))}
        </ul>
      </Bounded>
    </footer>
  )
}

export default Footer