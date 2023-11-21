import { Container } from "@mantine/core";

export default function Main({children, centered, nomargin}) {
    return (
        <main className={nomargin ? "nomargin" : ""}>
            <Container ta={centered ? "center" : ""}>
                {children}
            </Container>
        </main>
    );
}