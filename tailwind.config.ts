
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FF6B6B',
					foreground: '#FFFFFF',
					50: '#FFE8E8',
					100: '#FFD1D1',
					200: '#FFA3A3',
					300: '#FF7575',
					400: '#FF6B6B',
					500: '#FF4757',
					600: '#E63946',
					700: '#CC2936',
					800: '#B31E2A',
					900: '#99141F'
				},
				secondary: {
					DEFAULT: '#4ECDC4',
					foreground: '#FFFFFF',
					50: '#E8F9F8',
					100: '#D1F3F1',
					200: '#A3E7E3',
					300: '#75DBD5',
					400: '#4ECDC4',
					500: '#26C6B6',
					600: '#1FB5A6',
					700: '#1A9B8E',
					800: '#158176',
					900: '#10675E'
				},
				accent: {
					DEFAULT: '#45B7D1',
					foreground: '#FFFFFF',
					50: '#E8F6FB',
					100: '#D1EDF7',
					200: '#A3DBEF',
					300: '#75C9E7',
					400: '#45B7D1',
					500: '#2196F3',
					600: '#1E88E5',
					700: '#1976D2',
					800: '#1565C0',
					900: '#0D47A1'
				},
				success: {
					DEFAULT: '#2ECC71',
					foreground: '#FFFFFF'
				},
				warning: {
					DEFAULT: '#F39C12',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#E74C3C',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
