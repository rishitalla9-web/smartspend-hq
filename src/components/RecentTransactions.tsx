import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CreditCard, Smartphone, Coffee, Car, Home } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'expense' | 'income';
  icon: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Starbucks Coffee',
    amount: -5.47,
    category: 'Food & Dining',
    date: '2 hours ago',
    type: 'expense',
    icon: <Coffee className="h-4 w-4" />
  },
  {
    id: '2',
    description: 'Uber Ride',
    amount: -18.23,
    category: 'Transportation',
    date: '4 hours ago',
    type: 'expense',
    icon: <Car className="h-4 w-4" />
  },
  {
    id: '3',
    description: 'Salary Deposit',
    amount: 3200.00,
    category: 'Income',
    date: 'Yesterday',
    type: 'income',
    icon: <CreditCard className="h-4 w-4" />
  },
  {
    id: '4',
    description: 'Netflix Subscription',
    amount: -15.99,
    category: 'Entertainment',
    date: '2 days ago',
    type: 'expense',
    icon: <Smartphone className="h-4 w-4" />
  },
  {
    id: '5',
    description: 'Rent Payment',
    amount: -1200.00,
    category: 'Housing',
    date: '3 days ago',
    type: 'expense',
    icon: <Home className="h-4 w-4" />
  }
];

const RecentTransactions = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Food & Dining': 'bg-primary/10 text-primary',
      'Transportation': 'bg-accent/10 text-accent',
      'Income': 'bg-metric-positive/10 text-metric-positive',
      'Entertainment': 'bg-warning/10 text-warning',
      'Housing': 'bg-destructive/10 text-destructive'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Recent Transactions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-card">
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className={`text-xs ${getCategoryColor(transaction.category)}`}>
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{transaction.date}</span>
                  </div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'income' 
                  ? 'text-metric-positive' 
                  : 'text-metric-negative'
              }`}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;