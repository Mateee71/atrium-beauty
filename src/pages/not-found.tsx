import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useLocation } from "wouter";
import { LOGO_BLACK } from "@/config";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <main className="min-h-screen bg-[#fcfafb] px-4 py-8 text-[#2f2628] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-[32px] border border-[#eadfe3] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(47,38,40,0.08)] sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#f4c8d8] opacity-60" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#f4c8d8] opacity-50" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#eadfe3] bg-[#fbf4f6] shadow-inner sm:h-72 sm:w-72">
                <img
                  src={LOGO_BLACK}
                  alt="Atrium Beauty"
                  className="h-36 w-36 object-contain sm:h-40 sm:w-40"
                />
                <div className="absolute -right-3 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#e33474] text-white shadow-[0_12px_28px_rgba(227,52,116,0.28)]">
                  <SearchX className="h-7 w-7" />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e33474]">
                404
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#2f2628] sm:text-5xl">
                Ez az oldal nem található
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 lg:text-lg">
                Lehet, hogy a link megváltozott, vagy a keresett oldal már nem elérhető.
                Visszaviszünk oda, ahol újra könnyű eligazodni.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e33474] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(227,52,116,0.24)] transition hover:scale-[1.02] hover:opacity-95"
                >
                  <Home className="h-4 w-4" />
                  Főoldal
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#eadfe3] bg-white px-7 py-3 text-sm font-semibold text-[#2f2628] transition hover:border-[#e33474] hover:text-[#e33474]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Vissza
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}