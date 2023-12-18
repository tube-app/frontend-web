/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "extend-y-top":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1),0 -2px 4px -1px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* radix-colors */
        yt: {
          red: {
            3: "hsl(var(--yt-red-3))",
            7: "hsl(var(--yt-red-7))",
            11: "hsl(var(--yt-red-11))",
          },
          green: {
            3: "hsl(var(--yt-green-3))",
            7: "hsl(var(--yt-green-7))",
            11: "hsl(var(--yt-green-11))",
          },
          blue: {
            1: "hsl(var(--yt-blue-1))",
            2: "hsl(var(--yt-blue-2))",
            3: "hsl(var(--yt-blue-3))",
            4: "hsl(var(--yt-blue-4))",
            5: "hsl(var(--yt-blue-5))",
            6: "hsl(var(--yt-blue-6))",
            7: "hsl(var(--yt-blue-7))",
            8: "hsl(var(--yt-blue-8))",
            9: "hsl(var(--yt-blue-9))",
            10: "hsl(var(--yt-blue-10))",
            11: "hsl(var(--yt-blue-11))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
