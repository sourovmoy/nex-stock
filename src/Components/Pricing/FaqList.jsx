import FaqItem from "./FaqItem";

export default function FaqList({ faqs }) {
  return (
    <section className="px-6 mb-20">
      <h2 className="text-2xl font-semibold mb-8">Common questions</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}
