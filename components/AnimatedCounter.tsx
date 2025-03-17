"use client";

import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} prefix="₦" duration={1.3} />
    </div>
  );
}

export default AnimatedCounter;
