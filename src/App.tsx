import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MainLayout } from "./layout";
import AppRoutes from "./routes/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <div className="scroll-smooth"> */}
      <AppRoutes />
      {/* </div> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
