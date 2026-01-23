import {Stack} from "expo-router";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

export default function RootLayout(){
    const  queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient} >
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
        </QueryClientProvider>
    )
}