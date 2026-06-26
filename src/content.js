import { BookOpen, Cog, Globe, Code2 } from 'lucide-vue-next'

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Community', href: '#community' },
  { name: 'Patreon', href: '#patreon' },
  { name: 'Github', href: 'https://github.com/WaterdogPE/WaterdogPE', external: true },
  { name: 'Jenkins', href: 'https://jenkins.waterdog.dev/', external: true },
  { name: 'Documentation', href: 'https://docs.waterdog.dev', external: true },
]

export const features = [
  {
    name: 'Using CloudburstMC/Protocol',
    description:
      'Using the CloudburstMC Protocol and Network libraries as a solid foundation for quick protocol updates and easy maintenance.',
    icon: BookOpen,
  },
  {
    name: 'Rich Plugin Interface',
    description:
      'Easily integrate and extend WaterdogPE with your business logic through the rich plugin interface.',
    icon: Cog,
  },
  {
    name: 'Open Source',
    description:
      'WaterdogPE is actively maintained by the Project Team as well as a vast open source community.',
    icon: Globe,
  },
  {
    name: 'Battle-tested',
    description:
      'WaterdogPE is used by some of the most played Bedrock Edition Servers around.',
    icon: Code2,
  },
]

export const faqs = [
  {
    id: 1,
    question: 'Does WaterdogPE allow you to join from Java Edition on Bedrock Servers?',
    answer: 'No, WaterdogPE does not include any cross-platform compatibility.',
  },
  {
    id: 2,
    question: 'Is WaterdogPE compatible with BungeeCord plugins?',
    answer:
      'No. While the plugin API is somewhat similar, it differs in many places. If you have existing BungeeCord plugins, they will have to be rewritten.',
  },
  {
    id: 3,
    question: 'Which Minecraft: Bedrock versions does WaterdogPE support?',
    answer:
      'WaterdogPE supports all major releases of Minecraft since the 1.14 release. As long as your server software support it, it will work fine.',
  },
  {
    id: 4,
    question: 'What is the Partner Role?',
    answer:
      'Partners are servers with over 200 concurrent players who need exclusive, advanced support by the Waterdog maintainers.',
  },
]

export const partners = [
  { name: 'NetherGames', img: '/img/partners/nethergames.png', href: 'https://nethergames.org' },
  { name: 'Crafters Network', img: '/img/partners/crafters.png', href: 'https://craftersmc.net/' },
  { name: 'Hyperlands', img: '/img/partners/hyperlands.png', href: null },
]

export const sponsors = [
  { name: 'YourKit Profiler OSS', img: '/img/sponsors/yourkit.png', href: 'https://www.yourkit.com/' },
  { name: 'Bugsnag.com', img: '/img/sponsors/bugsnag.png', href: 'https://bugsnag.com/' },
]
