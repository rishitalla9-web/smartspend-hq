import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Target } from "lucide-react";

const insights = [
  {
    id: '1',
    type: 'spending',
    title: 'Unusual Spending Pattern Detected',
    description: 'Your dining expenses increased by 45% this month compared to your average.',
    severity: 'warning',
    action: 'Consider setting a dining budget limit',
    icon: <AlertTriangle className="h-4 w-4" />
  },
  {
    id: '2',
    type: 'savings',
    title: 'Great Progress on Emergency Fund',
    description: 'You\'re ahead of schedule on your emergency fund goal by 3 months.',
    severity: 'positive',
    action: 'Consider increasing your vacation fund contribution',
    icon: <Target className="h-4 w-4" />
  },
  {
    id: '3',
    type: 'prediction',
    title: 'Budget Overspend Risk',
    description: 'Based on current spending patterns, you may exceed your monthly budget by $200.',
    severity: 'high',
    action: 'Reduce discretionary spending for the next 2 weeks',
    icon: <TrendingUp className="h-4 w-4" />
  }
];

const AIInsights = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'positive':
        return 'bg-metric-positive/10 text-metric-positive border-metric-positive/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'high':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Financial Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className={`p-4 rounded-lg border ${getSeverityColor(insight.severity)}`}>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">{insight.icon}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{insight.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      AI Detected
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  <div className="pt-2">
                    <p className="text-xs font-medium">Recommended Action:</p>
                    <p className="text-xs text-muted-foreground">{insight.action}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;