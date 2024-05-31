export const PrivacyPolicy = ()=>{
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
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {formattedDate}</p>

      <p className="mb-4">
        Welcome to <strong>Lordstore</strong>! This Privacy Policy outlines how Lordstore collects, uses, maintains, and discloses information collected from users (each, a "User") of the Lordstore website ("Site"). This privacy policy applies to the Site and all products and services offered by Lordstore.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-6">1. Personal identification information</h2>
      <p className="mb-4">
        We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identifiable information, except that it may prevent them from engaging in certain Site-related activities.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-6">2. How we use collected information</h2>
      <p className="mb-4">
        Lordstore may collect and use Users' personal information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.
        </li>
        <li>
          <strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
        </li>
        <li>
          <strong>To improve our Site:</strong> We may use feedback you provide to improve our products and services.
        </li>
        <li>
          <strong>To process payments:</strong> We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
        </li>
        <li>
          <strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-6">3. How we protect your information</h2>
      <p className="mb-4">
        We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-6">4. Sharing your personal information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent Users
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-6">5. Contacting us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
      </p>
      <address className="mb-4">
        Lordstore <br />
        Address: Delhi, Connaught Place <br />
        Email: lordstorein@gmail.com <br />
        Phone: +91 8800366473
      </address>
        </div>
    </>
}