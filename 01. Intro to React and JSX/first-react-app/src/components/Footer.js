import FooterCredits from "./FooterCredits";
import FooterMain from "./FooterMain";

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <FooterMain />
            <FooterCredits />
        </div>
    );
}