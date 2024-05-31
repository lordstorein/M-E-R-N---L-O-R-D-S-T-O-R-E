export const RefundPolicy = ()=>{
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
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
          <p className="mb-4">Last updated: {formattedDate}</p>
    
          <p className="mb-4">
            At Lordstore, we aim to provide our customers with the best products and services. However, please note that all sales are final, and we do not offer refunds or exchanges on any of our products or services unless there is a technical issue or a defect in the product.
          </p>
    
          <p className="mb-4">
            If you encounter any technical issues or defects with our products, please contact our customer support team at [lordstorein@gmail.com] within [two] days of purchase. We will assess the issue and, if deemed necessary, provide a replacement or technical support to resolve the problem.
          </p>
    
          <p className="mb-4">
            Please note that our refund policy does not cover the following circumstances:
          </p>
    
          <ul className="list-disc list-inside mb-4">
            <li>Change of mind or preference.</li>
            <li>Errors made by the customer during purchase.</li>
            <li>Compatibility issues with the customer's software or hardware.</li>
            <li>Unauthorized use or distribution of the product.</li>
          </ul>
    
          <p className="mb-4">
            We appreciate your understanding and cooperation in adhering to our refund policy.
          </p>
        </div>
     </>
}