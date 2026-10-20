import Counter from "@/components/Counter";

const App = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">Vite Test App</h1>
        <p className="mb-8 text-slate-500">React + TypeScript + Tailwind, built with Vite.</p>
        <div className="flex justify-center">
          <Counter />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              Test {n}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
