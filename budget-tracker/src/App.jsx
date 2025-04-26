import Header from "./components/Header";
import Cards from "./components/Cards";
import NewTransaction from "./components/NewTransaction";
import TransactionsList from "./components/TransactionsList";
import BudgetCategories from "./components/BudgetCategories";
import SpendingBreakdown from "./components/SpendingBreakdown";
import QuickStats from "./components/QuickStats";
import { Context } from "./context/Context";

import "./App.css";
import { useState } from "react";
// import Tab from "./components/tab";

function App() {
  // Card Component States
  const [total, setTotal] = useState(10000);
  const [budget, setBudget] = useState(2500);
  const [savings, setSavings] = useState(1800);

  const [formData, setFormData] = useState([]);

  return (
    // Context API

    <Context.Provider
      value={{
        total,
        setTotal,
        budget,
        setBudget,
        savings,
        setSavings,
        formData,
        setFormData,
      }}
    >
      <main className="font-sans bg-[#242424]">
        <section className="container mx-auto px-4 py-8">
          <Header />
          <Cards />
        </section>

        <section className="container mx-auto px-4 py-8 -mt-20">
          <article className="text-white grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <NewTransaction />
              <TransactionsList />
            </div>

            <div className="space-y-4">
              <SpendingBreakdown />
              <BudgetCategories />
              <QuickStats />
            </div>
          </article>
        </section>
        {/* <Tab/> */}
      </main>
    </Context.Provider>
  );
}

export default App;