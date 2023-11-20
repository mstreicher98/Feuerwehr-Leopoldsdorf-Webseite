import { Container } from "@mantine/core";

export default function Main({children, centered}) {
    return (
        <main>
            <Container ta={centered ? "center" : ""}>
                {children}
            </Container>
        </main>
    );
}