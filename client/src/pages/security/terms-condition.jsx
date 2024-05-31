export const TermsAndConditions = ()=>{
    const today = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Kolkata'
};
const formattedDate = today.toLocaleDateString('en-IN', options);
    return <>
        
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">Last updated: {formattedDate}</p>

      <p className="mb-4">
        Welcome to <strong>Lordstore</strong>! These terms and conditions outline the rules and regulations for the use of Lordstore's Website, located at https://lordstore.shop.
      </p>

      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Lordstore if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <p className="mb-4">
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Clients needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-6">License</h2>
      <p className="mb-4">
        Unless otherwise stated, Lordstore and/or its licensors own the intellectual property rights for all material on Lordstore. All intellectual property rights are reserved. You may access this from Lordstore for your own personal use subjected to restrictions set in these terms and conditions.
      </p>

      <p className="mb-4">
        You must not:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Republish material from Lordstore</li>
        <li>Sell, rent or sub-license material from Lordstore</li>
        <li>Reproduce, duplicate or copy material from Lordstore</li>
        <li>Redistribute content from Lordstore</li>
      </ul>

      <p className="mb-4">
        This Agreement shall begin on the date hereof.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-6">Hyperlinking to our Content</h2>
      <p className="mb-4">
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </ul>

      <p className="mb-4">
        These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
      </p>
      </div>

    </>
}