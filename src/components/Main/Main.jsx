import { Container } from "@mantine/core";

export default function Main({children, centered, nomargin}) {
    return (
        <main className={nomargin ? "nomargin" : ""}>
            <Container size="xl" ta={centered ? "center" : ""}>
                {children}
            </Container>
        </main>
    );
}