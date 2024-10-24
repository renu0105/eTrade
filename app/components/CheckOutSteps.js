const CheckOutSteps = ({ current = 0 }) => {
  const steps = [
    "User Login",
    "Shipping Address",
    "Payment Method",
    "Place order",
  ];
  return (
    <ul className="steps steps-horizontal lg:steps-vertical text-xl mt-4 w-full lg:mx-40">
      {steps.map((step, index) => (
        <li
          key={step}
          className={`step${index >= current ? "step-primary" : ""}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default CheckOutSteps;
