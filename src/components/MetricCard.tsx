import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
}

const MetricCard = ({ title, value, change, changeType, icon }: MetricCardProps) => {
  const getChangeColor = (type: string) => {
    switch (type) {
      case "positive":
        return "text-metric-positive";
      case "negative":
        return "text-metric-negative";
      default:
        return "text-metric-neutral";
    }
  };

  const getChangeIcon = (type: string) => {
    return type === "positive" ? (
      <TrendingUp className="h-4 w-4" />
    ) : type === "negative" ? (
      <TrendingDown className="h-4 w-4" />
    ) : null;
  };

  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className={`flex items-center text-xs ${getChangeColor(changeType)} mt-1`}>
          {getChangeIcon(changeType)}
          <span className="ml-1">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;