import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';

export default function ContactBox() {
  return (
    <section className="flex flex-col gap-4 py-3 mt-3">
          <nav
            className="inline-flex list-none gap-3"
            aria-label="social media icons"
          >
            <a target="_blank" title="بريد الكتروني" className="bg-purple-600 py-3 px-6 rounded-lg text-white flex gap-4 text-xl hover:bg-purple-700" href="mailto:islam@shehata.io" rel="noopener">
              <span>راسلني</span>
              <FontAwesomeIcon icon={faEnvelopeOpen} className="hover:text-white" />
            </a>
            <Link title="الخدمات" className="bg-gray-100 py-3 px-8 rounded-md text-gray-900 flex gap-4 text-xl hover:bg-gray-200" href="/services" rel="noopener">
              <span>الخدمات</span>
            </Link>
          </nav>
          <nav className="inline-flex list-none gap-3 mt-3">
            <span className="mt-1">تواصل معي</span>
            <a
              target="_blank"
              title="حسابي على لينكدإن"
              href="https://linkedin.com/in/schehata"
              rel="noopener"
              className="social-icon hover:text-white hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              title="حسابي على github"
              href="https://github.com/schehata"
              rel="noopener"
                className="social-icon hover:text-white hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faGithub} className="" />
            </a>
              <a
                  target="_blank"
                  title="حسابي على github"
                  href="https://indieweb.social/@islam"
                  rel="noopener"
                  className="social-icon hover:text-white hover:bg-[#5D4FE6]"
                  >
                  <FontAwesomeIcon icon={faMastodon} />
              </a>
          </nav>
        </section>
  );
}


{/* <style scoped>
.social-icon {
  @apply bg-gray-100 rounded-full w-9 h-9 pt-1.5 align-middle text-center text-xl text-gray-600;
}
</style> */}