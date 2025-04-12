import Faq from "./faqsSecrion";

const MyComponent = () => {
  const faqs = [
    {
      question: "What is a NFT?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      question: "What is Metamask?",
      answer:
        "Private property rights, profit motive, competition, and supply and demand are the key features of capitalism.",
    },
    {
      question: "Will there be a whitelisted presale?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      question: "How To mint my NFT?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      question: "Where does my NFT go after i puchase it?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      question:
        "Since I purchased a Big Head NFT,Do i own the rights to the design?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
    {
      question: "What blockchain will you be using?",
      answer:
        "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
    },
  ];

  return (
    <div className="text-white bg-black  py-24 pt-32" id="faq">
      <h1 className=" text-white font-signatra text-4xl  sm:text-5xl leading-[1.2]  tracking-[-0.00833em] text-center font-normal ">
        Frequently Asked Questions
      </h1>
      <div className="px-6 faq">
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default MyComponent;
