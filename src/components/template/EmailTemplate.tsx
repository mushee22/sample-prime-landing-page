import * as React from "react";

import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import { Phone } from "lucide-react";

interface EmailTemplateProps {
    name: string;
    email: string;
    company: string;
    phone: string;
    interested: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    company,
    phone,
    interested
}) => (
    <Html>
        <Head />
        <Preview>New enquiry via website.</Preview>

        <Body style={main}>
            <Container style={container}>
                <Row
                    style={{
                        textAlign: "left",
                        paddingLeft: 10,
                        background:
                            "linear-gradient(90deg, rgba(21,23,23,1) 0%, rgba(142,137,137,1) 100%)",
                        width: "100%",
                        padding: 9,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            color: "#fff",
                            fontWeight: "normal",
                            textAlign: "center"
                        }}
                    >
                        Enquiry
                    </Text>
                </Row>

                <Section
                    style={{
                        paddingBottom: "10px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                    }}
                >
                    <Row style={{ paddingBottom: "5px", paddingTop: "15px" }}>
                        <Text style={heading}>We noticed a new enquiry from {name}</Text>


                        <Text style={{ fontSize: 16, marginTop: -5, color: "#000" }}>
                            <b>Name: </b>
                            {name}
                        </Text>

                        <Text style={{ fontSize: 16, marginTop: -5, paddingBottom: 25 }}>
                            <b>Email: </b>
                            {email}
                        </Text>
                        <Text style={{ fontSize: 16, marginTop: -5, paddingBottom: 25 }}>
                            <b>Company: </b>
                            {company}
                        </Text>
                        <Text style={{ fontSize: 16, marginTop: -5, paddingBottom: 25 }}>
                            <b>Phone: </b>
                            {phone}
                        </Text>
                        <Text style={{ fontSize: 16, marginTop: -5, paddingBottom: 25 }}>
                            <b>{name} interested in: </b>
                            {interested}
                        </Text>
                    </Row>
                </Section>

                <Hr style={hr} />

                <Row
                    style={{
                        textAlign: "center",
                        background:
                            "linear-gradient(90deg, rgba(21,23,23,1) 0%, rgba(142,137,137,1) 100%)",
                        width: "100%",
                        padding: 25,
                    }}
                >
                    <></>
                </Row>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplate;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
};

const heading = {
    fontSize: "18px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const review = {
    fontSize: "16px",
    lineHeight: "1.4",
    color: "#484848",
    padding: "18px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};
