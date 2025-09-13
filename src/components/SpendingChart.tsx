import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', spending: 2400, budget: 3000, predicted: 2600 },
  { month: 'Feb', spending: 1398, budget: 3000, predicted: 2400 },
  { month: 'Mar', spending: 9800, budget: 3000, predicted: 2800 },
  { month: 'Apr', spending: 3908, budget: 3000, predicted: 3200 },
  { month: 'May', spending: 4800, budget: 3000, predicted: 3400 },
  { month: 'Jun', spending: 3800, budget: 3000, predicted: 3100 },
];

const SpendingChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-medium)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="spending" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            name="Actual Spending"
            dot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="budget" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Budget"
            dot={{ r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="hsl(var(--accent))" 
            strokeWidth={2}
            name="AI Prediction"
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;