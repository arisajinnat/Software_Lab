

const Faq = () => {
    return (
        <div className="mt-20">
            <h2 className="text-center text-xl lg:text-2xl font-bold mb-5">Frequently Asked Questions</h2>
            <div className="  collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className=" text-center collapse-title text-lg lg:text-xl font-medium">
  How do I get started with planning my wedding?
  </div>
  <div className=" text-center  collapse-content"> 
    <p>We offer a complimentary consultation to discuss your vision and needs. Contact us to schedule an appointment!</p>
  </div>
</div>
<div className=" text-center  collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className=" text-center  collapse-title text-lg lg:text-xl font-medium">
  What services do you offer for wedding planning?
  </div>
  <div className=" text-center  collapse-content"> 
    <p>We provide a wide range of services, including venue selection, decor, catering, photography, and more. Explore our services page for details.</p>
  </div>
</div>
<div className="text-center collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="text-center  collapse-title text-lg lg:text-xl font-medium">
  Can you customize wedding packages to fit my budget?
  </div>
  <div className=  "text-center collapse-content"> 
    <p>Yes, we offer flexible packages tailored to your budget and preferences. Let us know your requirements, and we will create a personalized package for you.</p>
  </div>
</div>
        </div>
    );
};

export default Faq;