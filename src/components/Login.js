import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-two.png" alt="logo1" />
                </CTA>
                <BgImage/>
            </Content>
        </Container>
        )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: columns;
    padding: 8rem 4rem;
    height: 100%;
`;

const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index= -1;
`;

const CTA = styled.div`
    margin: 0 auto 2vw;
    max-width: 65rem;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const CTALogoOne = styled.img`
    margin-bottom: 1.2rem;
    max-width: 60rem;
    min-height: 1px;
    display: block;
    width: 100%;
`;
export default Login;