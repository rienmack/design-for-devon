/** Inline SVG icons for Neon Bot landing (no Google Material Symbols). */

const sizeClasses: Record<string, string> = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'text-[10rem] w-[10rem] h-[10rem]',
};

type IconProps = { className?: string; size?: keyof typeof sizeClasses };

export function IconBolt({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12 15.24 11 21 11 21z" />
        </svg>
    );
}

export function IconToken({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
    );
}

export function IconRocket({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l5 5.02V20h2v-2.95c0-.29.03-.58.07-.86l2.12 2.12c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L9.19 6.35zM11 17.5c0 .83-.67 1.5-1.5 1.5S8 18.33 8 17.5 8.67 16 9.5 16s1.5.67 1.5 1.5zM22 4.5v2h-2v-2h2zM19.5 7H22v2h-2.5V7zM17 9.5V12h-2V9.5h2zM12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29l1.41-1.41C4.17 14.12 4 13.09 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.09-.17 2.12-.38 3.12l1.41 1.41C21.64 14.98 22 13.54 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
    );
}

export function IconMemory({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
        </svg>
    );
}

export function IconSettings({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M12 15.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-2.5-3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zM19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0014 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
        </svg>
    );
}

export function IconChart({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
    );
}

export function IconPremium({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
    );
}

export function IconTerminal({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-9 10H6v-2h5v2zm4 0h-2v-2h2v2zm0-4H6V8h9v2z" />
        </svg>
    );
}

export function IconShield({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
    );
}

export function IconLanguage({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.96 1.27 1.5 2.64 1.79 3.96h-3.58c.29-1.32.83-2.69 1.79-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.96-1.27-1.5-2.64-1.79-3.96h3.58c-.29 1.32-.83 2.69-1.79 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
        </svg>
    );
}

export function IconPodcasts({ className = '', size = 'md' }: IconProps) {
    return (
        <svg
            className={`${sizeClasses[size]} ${className}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path d="M12 2c-1.1 0-2 .9-2 2v8.59c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 005.98 3.24c.48-.26.89-.65 1.15-1.12.26-.47.4-1 .4-1.58V4c0-1.1-.9-2-2-2zm-2 14.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5zM2 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.57-.46 3.03-1.24 4.26l-1.45-1.45A5.96 5.96 0 0018 12c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.19.35 2.3.69 3.26L2.24 16.26C1.46 15.03 2 12 2 12zm18 0c0-1.57.46-3.03 1.24-4.26l1.45 1.45A5.96 5.96 0 0118 12c0 3.31 2.69 6 6 6 0 0 0-2.31-.69l1.45 1.45C21.54 14.97 22 13.57 22 12z" />
        </svg>
    );
}
