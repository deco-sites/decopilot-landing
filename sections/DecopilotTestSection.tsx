interface Props {
  /**
   * @description The title text.
   */
  title?: string;
}

export default function DecopilotSection({ 
  title = "Welcome to Decopilot"
}: Props) {
  const description = "Decopilot is an AI-powered code generation tool that helps developers write better code faster.";
  const includeFAQ = true;
  const faqTitle = "Frequently Asked Questions";
  const faqItems = [
    {
      question: "What is Decopilot?",
      answer: "Decopilot is an AI-powered code generation tool that helps developers write better code faster."
    },
    {
      question: "How does Decopilot work?",
      answer: "Decopilot uses advanced machine learning algorithms to analyze your code and suggest improvements and optimizations."
    }
  ];

  return (
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4 text-primary">{title}</h2>
        <p class="text-lg mb-8 text-green-500">{description}</p>
        
        {includeFAQ && (
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-4 text-accent">{faqTitle}</h3>
              {faqItems.map(({ question, answer }) => (
                <div class="collapse">
                  <input type="checkbox" />
                  <div class="collapse-title text-lg font-medium">
                    {question}
                  </div>
                  <div class="collapse-content">
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}