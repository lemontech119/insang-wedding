import AgreementGame from "@/components/AgreementGame";

export const metadata = {
  title: "혜택 | 청첩장",
  description: "혜택 안내",
};

export default function BenefitPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-8">
      <div className="w-full max-w-[500px] mx-auto px-6 py-10">
        <header className="text-center mb-10">
          <h1 className="font-[var(--font-serif)] text-2xl font-semibold text-stone-800 tracking-tight">
            도시락통을 돌려주세요.
          </h1>
        </header>

        <AgreementGame />
      </div>
    </div>
  );
}
