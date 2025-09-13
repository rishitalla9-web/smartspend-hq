import { DollarSign, TrendingUp, Target, CreditCard } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import MetricCard from "@/components/MetricCard";
import SpendingChart from "@/components/SpendingChart";
import ExpenseCategories from "@/components/ExpenseCategories";
import GoalTracker from "@/components/GoalTracker";
import RecentTransactions from "@/components/RecentTransactions";
import AIInsights from "@/components/AIInsights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import financialHero from "@/assets/financial-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <DashboardHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">AI-Powered Financial Intelligence</h1>
                <p className="text-lg text-primary-foreground/90">
                  Take control of your finances with predictive analytics, automated categorization, and intelligent insights.
                </p>
                <div className="flex space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$24,847</div>
                    <div className="text-sm text-primary-foreground/80">Total Balance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success-foreground">+12.4%</div>
                    <div className="text-sm text-primary-foreground/80">This Month</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={financialHero} 
                  alt="Financial Analytics Dashboard" 
                  className="rounded-lg shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Monthly Spending"
            value="$3,247"
            change="+8.2% from last month"
            changeType="negative"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <MetricCard
            title="Savings Rate"
            value="23.5%"
            change="+2.1% from last month"
            changeType="positive"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            title="Goals Progress"
            value="67%"
            change="On track"
            changeType="positive"
            icon={<Target className="h-4 w-4" />}
          />
          <MetricCard
            title="Credit Score"
            value="742"
            change="+5 points"
            changeType="positive"
            icon={<CreditCard className="h-4 w-4" />}
          />
        </div>

        {/* Charts and Analytics */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>Spending Trends & Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <SpendingChart />
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ExpenseCategories />
            </CardContent>
          </Card>
        </div>

        {/* Goals and Transactions */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Financial Goals</h2>
            <GoalTracker />
          </div>
          
          <div>
            <RecentTransactions />
          </div>
          
          <div>
            <AIInsights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
