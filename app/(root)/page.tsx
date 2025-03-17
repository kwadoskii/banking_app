import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function page() {
  const login = {
    firstname: "Austin",
  };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={login?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </div>

        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={98913.76} />
      </div>

      <aside>
        <p>Home</p>
      </aside>
    </section>
  );
}
