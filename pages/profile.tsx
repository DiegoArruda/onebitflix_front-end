import Footer from "@/src/components/common/footer";
import HeaderAuth from "@/src/components/common/headerAuth";
import UserForm from "@/src/components/profile/user";
import Head from "next/head";
import { Col, Row, Container, Button } from "reactstrap";
import styles from "../styles/profile.module.scss";

const UserInfo = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
              <Button className={styles.renderFormBtn}>DADOS PESSOAIS</Button>
              <Button className={styles.renderFormBtn}>SENHA</Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default UserInfo;
