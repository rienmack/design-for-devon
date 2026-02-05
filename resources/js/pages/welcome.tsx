import { Head, Link } from '@inertiajs/react';
import { home } from '@/routes';
import {
    IconBolt,
    IconToken,
    IconRocket,
    IconMemory,
    IconSettings,
    IconChart,
    IconPremium,
    IconTerminal,
    IconShield,
    IconLanguage,
    IconPodcasts,
} from '@/components/NeonIcons';

const architectureCards = [
    {
        id: 'CORE_01',
        icon: IconSettings,
        title: 'Automated Tasks',
        description:
            'Automate repetitive tasks and streamline your server management with intelligent AI workflows.',
        tag: '[ Logic.Deploy_Active ]',
        variant: 'pink' as const,
    },
    {
        id: 'CORE_02',
        icon: IconChart,
        title: 'AI-Powered Insights',
        description:
            'Get intelligent insights about your community with advanced analytics and AI-driven recommendations.',
        tag: '[ Analytics.v8_Stream ]',
        variant: 'cyan' as const,
    },
    {
        id: 'CORE_03',
        icon: IconPremium,
        title: 'Premium Features',
        description:
            'Access premium tools and features designed to elevate your Discord server experience.',
        tag: '[ Tier.Elite_Enabled ]',
        variant: 'pink' as const,
    },
    {
        id: 'CORE_04',
        icon: IconTerminal,
        title: 'Custom Commands',
        description:
            "Create custom AI-powered commands tailored to your server's unique needs and workflows.",
        tag: '[ Syntax.Custom_Link ]',
        variant: 'cyan' as const,
    },
    {
        id: 'CORE_05',
        icon: IconShield,
        title: 'Secure & Reliable',
        description:
            'Built with security in mind, ensuring your data and community are always protected.',
        tag: '[ Shield.Active_100% ]',
        variant: 'pink' as const,
    },
    {
        id: 'CORE_06',
        icon: IconBolt,
        title: 'High Performance',
        description:
            'Lightning-fast responses and seamless integration with your existing Discord setup.',
        tag: '[ Latency.Sub_1ms ]',
        variant: 'cyan' as const,
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="Neon Bot - Supercharge Discord" />
            <div className="font-mono-neon min-h-screen bg-bg-dark text-slate-200 selection:bg-pink-600 selection:text-white bg-grid-circuit">
                <nav className="fixed left-0 top-0 z-50 h-20 w-full border-b-4 border-cyan-500 bg-bg-dark/95 backdrop-blur-md">
                    <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <div className="brutal-border-pink bg-pink-600 p-2">
                                <IconBolt size="md" className="text-white" />
                            </div>
                            <span className="heading-font text-4xl font-black italic tracking-tighter text-white">
                                NEON<span className="text-pink-600">BOT</span>
                            </span>
                        </div>
                        <Link
                            href={home.url()}
                            className="brutal-border-pink bg-pink-600 px-8 py-3 font-black uppercase tracking-widest text-white transition-transform hover:-translate-y-1 hover:translate-x-1"
                        >
                            INITIALIZE
                        </Link>
                    </div>
                </nav>

                <main className="mx-auto max-w-screen-2xl space-y-10 px-4 pb-16 pt-28 md:px-8">
                    <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        <div className="brutal-border-cyan relative flex min-h-[350px] flex-col justify-center overflow-hidden bg-bg-panel p-8 md:p-12 lg:col-span-8">
                            <div className="absolute right-0 top-0 p-6 opacity-10">
                                <IconToken size="xl" className="text-cyan-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-4 inline-block bg-cyan-500 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-black">
                                    Status: System Online
                                </div>
                                <h1 className="mb-6 text-5xl leading-[0.85] md:text-[5.5rem]">
                                    <span className="neon-text-white-pink block text-white">
                                        SUPERCHARGE
                                    </span>
                                    <span className="neon-text-cyan block text-cyan-500">
                                        DISCORD
                                    </span>
                                </h1>
                                <div className="mb-8 max-w-2xl border-l-[6px] border-pink-600 pl-8">
                                    <p className="text-base font-bold italic uppercase leading-tight text-slate-200">
                                        Unlock the full potential of your Discord
                                        server with our AI-driven bot. Seamlessly
                                        integrate cutting-edge AI features to
                                        make managing and engaging your
                                        community effortless.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <button
                                        type="button"
                                        className="brutal-border-pink flex items-center gap-3 bg-pink-600 px-8 py-4 text-lg font-black uppercase text-white transition-colors hover:bg-pink-500"
                                    >
                                        <IconRocket size="sm" />
                                        Deploy Bot
                                    </button>
                                    <button
                                        type="button"
                                        className="brutal-border-cyan bg-transparent px-8 py-4 text-lg font-black uppercase text-cyan-500 transition-colors hover:bg-cyan-500/10"
                                    >
                                        Documentation
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-8 lg:col-span-4">
                            <div className="brutal-border-pink group relative flex flex-col justify-between bg-bg-panel p-8">
                                <div className="absolute right-2 top-2 text-5xl font-black text-pink-600 opacity-30">
                                    01
                                </div>
                                <h3 className="heading-font mb-2 text-4xl text-white">
                                    REGISTRY
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-end justify-between border-b-2 border-white/20 pb-2">
                                        <span className="text-xs font-bold uppercase text-slate-400">
                                            Active_Entities
                                        </span>
                                        <span className="text-2xl font-black text-pink-600">
                                            2.5M+
                                        </span>
                                    </div>
                                    <div className="flex items-end justify-between border-b-2 border-white/20 pb-2">
                                        <span className="text-xs font-bold uppercase text-slate-400">
                                            Sync_Nodes
                                        </span>
                                        <span className="text-2xl font-black text-cyan-500">
                                            50K
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="brutal-border-cyan flex flex-col items-center justify-center bg-cyan-500 p-8 text-center">
                                <IconMemory
                                    size="lg"
                                    className="mb-1 text-black"
                                />
                                <h3 className="heading-font text-4xl font-black leading-none text-black">
                                    99.9%
                                    <br />
                                    UPTIME
                                </h3>
                                <div className="mt-4 bg-black px-4 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-500">
                                    Realtime Monitoring Active
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-10">
                        <div className="flex items-center gap-8">
                            <h2 className="heading-font text-5xl font-black leading-none text-white">
                                SYSTEM.
                                <span className="text-pink-600">
                                    ARCHITECTURE
                                </span>
                            </h2>
                            <div className="h-2 grow bg-white/20" />
                            <div className="hidden text-right md:block">
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Technical Specifications
                                </p>
                                <p className="text-xs font-bold uppercase text-slate-500">
                                    Build v8.5.0-Refined
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {architectureCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={card.id}
                                        className={`glass-pane-neon relative isolate flex h-full flex-col overflow-hidden p-8 transition-transform hover:scale-[1.02] ${
                                            card.variant === 'pink'
                                                ? 'neon-tube-pink'
                                                : 'neon-tube-cyan'
                                        }`}
                                    >
                                        <div
                                            className={`absolute right-4 top-4 rounded px-3 py-1 text-xs font-black ${
                                                card.variant === 'pink'
                                                    ? 'bg-pink-600/90 text-white'
                                                    : 'bg-cyan-500/90 text-black'
                                            }`}
                                        >
                                            {card.id}
                                        </div>
                                        <Icon
                                            size="lg"
                                            className={`mb-6 ${
                                                card.variant === 'pink'
                                                    ? 'text-pink-600'
                                                    : 'text-cyan-500'
                                            }`}
                                        />
                                        <h3 className="heading-font mb-4 text-3xl text-white">
                                            {card.title}
                                        </h3>
                                        <p className="mb-6 grow leading-snug text-slate-400">
                                            {card.description}
                                        </p>
                                        <div
                                            className={`border-t-2 border-white/10 pt-4 text-xs font-black uppercase tracking-widest ${
                                                card.variant === 'pink'
                                                    ? 'text-pink-500'
                                                    : 'text-cyan-500'
                                            }`}
                                        >
                                            {card.tag}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>

                <footer className="mt-24 border-t-8 border-pink-600 bg-bg-dark py-20">
                    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-6 md:grid-cols-12">
                        <div className="md:col-span-4">
                            <div className="mb-10 flex items-center gap-4">
                                <div className="brutal-border-pink bg-pink-600 p-2">
                                    <IconBolt size="lg" className="text-white" />
                                </div>
                                <span className="heading-font text-5xl font-black italic tracking-tighter text-white">
                                    NEON
                                    <span className="text-pink-600">BOT</span>
                                </span>
                            </div>
                            <p className="mb-10 max-w-sm text-sm font-bold uppercase leading-relaxed text-slate-400">
                                Architecting the future of Discord
                                infrastructure. Optimized for performance.
                                Built for total control. The final word in
                                AI-driven governance.
                            </p>
                            <div className="flex space-x-6">
                                <a
                                    href="#"
                                    className="text-pink-600 transition-colors hover:text-white"
                                    aria-label="Language"
                                >
                                    <IconLanguage size="lg" />
                                </a>
                                <a
                                    href="#"
                                    className="text-cyan-500 transition-colors hover:text-white"
                                    aria-label="Terminal"
                                >
                                    <IconTerminal size="lg" />
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-500 transition-colors hover:text-white"
                                    aria-label="Podcasts"
                                >
                                    <IconPodcasts size="lg" />
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="heading-font mb-8 inline-block border-b-4 border-pink-600 text-2xl text-white">
                                Sectors
                            </h4>
                            <ul className="space-y-4 text-sm font-black uppercase tracking-tight text-slate-400">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-cyan-500"
                                    >
                                        System_Status
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-cyan-500"
                                    >
                                        Feature_Set
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-cyan-500"
                                    >
                                        Upgrade_Log
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-cyan-500"
                                    >
                                        Licensing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="heading-font mb-8 inline-block border-b-4 border-cyan-500 text-2xl text-white">
                                Archives
                            </h4>
                            <ul className="space-y-4 text-sm font-black uppercase tracking-tight text-slate-400">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-pink-600"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-pink-600"
                                    >
                                        API_Reference
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-pink-600"
                                    >
                                        Legal_Notice
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-end md:col-span-4">
                            <div className="brutal-border-cyan w-full bg-cyan-500/5 p-8">
                                <p className="mb-4 text-sm font-black uppercase tracking-widest text-cyan-500">
                                    Connect to Neural Net
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="ACCESS_CODE"
                                        className="grow border-4 border-cyan-500 bg-black p-3 text-sm font-black uppercase text-white placeholder:text-cyan-500/40 focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        className="bg-cyan-500 px-6 font-black uppercase text-black transition-colors hover:bg-white"
                                    >
                                        LINK
                                    </button>
                                </div>
                            </div>
                            <p className="mt-12 text-right text-[12px] font-black uppercase tracking-[0.4em] text-slate-700">
                                © 2024 NEON BOT ARCHITECTURE.
                                <br />
                                RESERVED FOR THE ELITE.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
