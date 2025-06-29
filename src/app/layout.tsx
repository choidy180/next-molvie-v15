import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyle from "./GlobalStyle";

export default function RootLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <head>
                <title>Next-Movie</title>
            </head>
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyle/>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
