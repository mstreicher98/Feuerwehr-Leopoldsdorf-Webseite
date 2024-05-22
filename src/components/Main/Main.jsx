import { Container } from "@mantine/core";

const Main = ({children, centered, nomargin}) => {
    return (
        <main className={nomargin ? "nomargin" : ""}>
            <Container size="xl" ta={centered ? "center" : ""}>
                {children}
            </Container>
        </main>
    );
}
export default  Main;