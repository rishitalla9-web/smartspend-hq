import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Food & Dining', value: 1200, color: 'hsl(var(--primary))' },
  { name: 'Transportation', value: 800, color: 'hsl(var(--accent))' },
  { name: 'Shopping', value: 600, color: 'hsl(var(--warning))' },
  { name: 'Entertainment', value: 400, color: 'hsl(var(--success))' },
  { name: 'Bills & Utilities', value: 1000, color: 'hsl(var(--destructive))' },
  { name: 'Healthcare', value: 300, color: 'hsl(var(--secondary))' },
];

const ExpenseCategories = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Amount']}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-medium)'
            }}
          />
          <Legend 
            wrapperStyle={{
              fontSize: '12px',
              color: 'hsl(var(--foreground))'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseCategories;