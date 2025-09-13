import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
}

const goals: Goal[] = [
  {
    id: '1',
    title: 'Emergency Fund',
    target: 10000,
    current: 7500,
    deadline: 'Dec 2024',
    category: 'Savings'
  },
  {
    id: '2',
    title: 'Vacation Fund',
    target: 5000,
    current: 2800,
    deadline: 'Jun 2024',
    category: 'Travel'
  },
  {
    id: '3',
    title: 'New Car',
    target: 25000,
    current: 12000,
    deadline: 'Mar 2025',
    category: 'Purchase'
  }
];

const GoalTracker = () => {
  return (
    <div className="space-y-4">
      {goals.map((goal) => {
        const progress = (goal.current / goal.target) * 100;
        const isOnTrack = progress >= 60; // Simple logic for demo
        
        return (
          <Card key={goal.id} className="bg-gradient-card shadow-soft">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">{goal.title}</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{goal.deadline}</div>
                  <div className={`text-xs ${isOnTrack ? 'text-metric-positive' : 'text-metric-negative'} flex items-center`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {isOnTrack ? 'On track' : 'Behind'}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{progress.toFixed(1)}% complete</span>
                  <span>${(goal.target - goal.current).toLocaleString()} remaining</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default GoalTracker;