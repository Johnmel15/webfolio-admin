import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: "Jan", users: 4000, orders: 2400 },
  { name: "Feb", users: 3000, orders: 1398 },
  { name: "Mar", users: 5000, orders: 9800 },
  { name: "Apr", users: 4780, orders: 3908 },
  { name: "May", users: 5890, orders: 4800 },
  { name: "Jun", users: 4390, orders: 3800 },
  { name: "Jul", users: 3490, orders: 4300 },
];

const DashboardContainer: FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>User & Order Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#007AFF"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#FF5733"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Table Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "#1001",
                  customer: "John Doe",
                  amount: "$120.00",
                  status: "Completed",
                },
                {
                  id: "#1002",
                  customer: "Jane Smith",
                  amount: "$250.50",
                  status: "Pending",
                },
                {
                  id: "#1003",
                  customer: "Michael Lee",
                  amount: "$89.99",
                  status: "Cancelled",
                },
              ].map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell
                    className={
                      order.status === "Completed"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  >
                    {order.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContainer;
